variable "billing_mode" {
    type        = string
    default     = "PROVISIONED"
    description = "DynamoDB Billing mode. Can be PROVISIONED or PAY_PER_REQUEST"
}

variable "enable_encryption" {
    type        = bool
    default     = true
    description = "Enable DynamoDB server-side encryption"
}

variable "hash_key" {
    type        = string
    description = "DynamoDB table Hash Key"
}

variable "hash_key_type" {
    type        = string
    default     = "S"
    description = "Hash Key type, which must be a scalar type: `S`, `N`, or `B` for (S)tring, (N)umber or (B)inary data"
}

variable "dynamodb_attributes" {
    type        = list(object({
        name    = string
        type    = string
    }))
    default     = []
    description = "Additional DynamoDB attributes in the form of a list of mapped values"
}

variable "tags" {
    type        = map(string)
    default     = {}
    description = "Additional tags (e.g. `map('NAME','XYZ')`"
}

variable "name" {
    type        = string
    default     = null
    description = "The name of the table, this needs to be unique within a region."
}