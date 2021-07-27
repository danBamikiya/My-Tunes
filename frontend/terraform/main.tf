terraform {
    backend "s3" {
        bucket          = "soundchat"
        key             = "state/web/terraform.tfstate"
        region          = "us-east-1"

        dynamodb_table  = "soundchat"
        encrypt         = true
    }
}