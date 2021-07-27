variable "acl" {
    type        = string
    default     = "private"
    description = "The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. `private` is the default & recommended value to avoid exposing sensitive information."
}

variable "region" {
    type        = string
    default     = ""
    description = "If specified, the AWS region this bucket should reside in. Otherwise, the region used by the callee"
}

variable "versioning_enabled" {
    type        = bool
    default     = false
    description = "A state of versioning. Versioning is a means of keeping multiple variants of an object in the same bucket"
}

variable "sse_algorithm" {
    type        = string
    default     = "AES256"
    description = "The server-side encryption algorithm to use.  Valid values are `AES256` and `aws:kms`"
}

variable "kms_master_key_arn" {
    type        = string
    default     = ""
    description = "The AWS KMS master key ARN used for the `SSE-KMS` encryption. This can only be used when you set the value of `sse_algorithm` as `aws:kms`. The default aws/s3 AWS KMS master key is used if this element is absent while the `sse_algorithm` is `aws:kms`"
}

variable "user_enabled" {
    type        = bool
    default     = false
    description = "Set to `true` to create an IAM user with permission to access the bucket"
}

variable "allowed_bucket_actions" {
    type        = list(string)
    default     = ["s3:PutObject", "s3:PutObjectAcl", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket", "s3:ListBucketMultipartUploads", "s3:GetBucketLocation", "s3:AbortMultipartUpload"]
    description = "List of actions the user is permitted to perform on the S3 bucket"
}

variable "allow_encrypted_uploads_only" {
    type        = bool
    default     = false
    description = "Set to `true` to prevent uploads of unencrypted objects to S3 bucket"
}

variable "block_public_acls" {
    type        = bool
    default     = true
    description = "Set to `false` to disable the blocking of new public access lists on the bucket"
}

variable "block_public_policy" {
    type        = bool
    default     = true
    description = "Set to `false` to disable the blocking of new public policies on the bucket"
}

variable "ignore_public_acls" {
    type        = bool
    default     = true
    description = "Set to `false` to disable the ignoring of public access lists on the bucket"
}

variable "restrict_public_buckets" {
    type        = bool
    default     = true
    description = "Set to `false` to disable the restricting of making the bucket public"
}

variable "bucket_name" {
    type        = string
    default     = null
    description = "Bucket name. If provided, the bucket will be created with this name instead of generating the name from the context"
}