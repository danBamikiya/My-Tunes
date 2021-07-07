LOGFILE=$(shell date +'%y-%m-%d-%H:%M:%S')
RM?=
DIR?=
IMAGE?=
ENV?=

check-dir:
ifndef DIR
	$(error Please set the running directory)
endif

check-env:
ifndef ENV
	$(error Please set ENV=[preview|staging|prod])
endif

.PHONY:	run-local
run-local:
	docker-compose up -d
	docker-compose logs -f

.PHONY: teardown-local
teardown-local:
	docker-compose down -v

.PHONY: stop-run
stop-run:
	docker-compose stop

.PHONY: stop-container
stop-container:
	docker container stop $(CONTAINER_NAME)
	$(if $(RM),docker container rm $(CONTAINER_NAME))

.PHONY: rebuild-image
rebuild-image:
	docker-compose up --build $(CONTAINER_NAME) -d --no-deps
	docker-compose logs -f

.PHONY: scan-image
scan-image: check-dir
	cd $(DIR) && \
		docker scan -f Dockerfile --exclude-base $(IMAGE)

.PHONY: build
build:
	docker-compose build
	docker-compose up -f docker-compose.yml docker-compose.prod.yml -d
	docker-compose logs -f

.PHONY: terraform-create-workspace
terraform-create-workspace: check-dir check-env
	cd $(DIR)/terraform && \
		terraform workspace new $(ENV)

.PHONY: terraform-init
terraform-init: check-dir check-env
	cd $(DIR)/terraform && \
		terraform workspace select $(ENV) && \
		terraform init

.PHONY: terraform-init-migrate-state
terraform-init-migrate-state: check-dir check-env
	cd $(DIR)/terraform && \
		terraform workspace select $(ENV) && \
		terraform init -migrate-state -force-copy

.PHONY: terraform-format
terraform-format: check-dir check-env
	@cd $(DIR)/terraform && \
		terraform workspace select $(ENV) && \
		terraform fmt -check \
		-var-file="./environments/common.tfvars"

.PHONY: terraform-plan
terraform-plan: check-dir check-env
	@cd $(DIR)/terraform && \
		terraform workspace select $(ENV) && \
		terraform plan -input=false \
		-var-file="./environments/common.tfvars"

.PHONY: terraform-plan-save
terraform-plan-save: check-dir check-env
	@cd $(DIR)/terraform && \
		terraform workspace select $(ENV) && \
		terraform plan -out=.tfplan/$(LOGFILE) -input=false \
		-var-file="./environments/common.tfvars"

.PHONY: terraform-apply
terraform-apply: check-dir check-env
	@cd $(DIR)/terraform && \
		terraform workspace select $(ENV) && \
		terraform apply -input=false -auto-approve \
		-var-file="./environments/common.tfvars"