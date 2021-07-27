### GENERAL
variable "app_name" {
    type        = string
}

### AWS
variable "aws_region" {
    type        = string
    description = "AWS region"
}

variable "bucket_name" {
    type        = string
}

variable "table_name" {
    type        = string
}