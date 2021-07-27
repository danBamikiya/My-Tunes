locals {
    attributes  = concat(
        [
            {
                name = var.hash_key
                type = var.hash_key_type
            }
        ],
        var.dynamodb_attributes
    )
}

resource "aws_dynamodb_table" "default" {
    name         = var.name
    billing      = var.billing_mode
    hash_key     = var.hash_key

    server_side_encryption {
        enabled  = var.enable_encryption
    }

    dynamic "attribute" {
        for_each = local.attributes
        content {
            name = attribute.value.name
            type = attribute.value.type
        }
    }

    tags = var.tags
}