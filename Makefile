run-local:
	docker-compose up -d
	docker-compose logs -f

teardown-local:
	docker-compose down -v

stop-run:
	docker-compose stop

RM=
stop-container:
	docker container stop $(CONTAINER_NAME)
	$(if $(RM),docker container rm $(CONTAINER_NAME))

rebuild-image:
	docker-compose up --build $(CONTAINER_NAME) -d --no-deps
	docker-compose logs -f

DIR=
IMAGE=
scan-image:
	cd $(DIR) && \
		docker scan -f Dockerfile --exclude-base $(IMAGE)

build:
	docker-compose build
	docker-compose up -f docker-compose.yml docker-compose.prod.yml -d
	docker-compose logs -f