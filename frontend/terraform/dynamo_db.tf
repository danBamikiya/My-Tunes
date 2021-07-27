provider "aws" {
    region   = var.aws_region
}

# Create DynamoDB table for state locking
module "terraform_lock" {
    source   = "../../infrastructure/terraform/modules/dynamo_db"

    name     = var.table_name
    hash_key = "LockID"

    dynamodb_attributes = [
        {
            name        = "LockID"
            type        = "S"
        }
    ]

    # Use object tagging to categorize tables
    tags = {
        Name        = "Soundchat Terraform State Lock Table"
    }
}
