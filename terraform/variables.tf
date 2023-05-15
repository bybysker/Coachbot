variable "project_id" {
  type = string
  default = "projet-test-231711"
}


variable "region" {
  type = string
  default = "europe-west1"
}

variable "zone" {
  type = string
  default = "europe-west1-b"
}

variable "bucket_name" {
  type = string
  default = "coachbot-bucket"
}

variable "storage_class" {
  type = string
  default = "REGIONAL"
}

variable "app_name" {
  type = string
  default = "coachbot-app"
}

variable "gcp_service_list" {
  description ="The list of apis necessary for the project"
  type = list(string)
  default = [
    "cloudbuild.googleapis.com",
    "run.googleapis.com",
    "logging.googleapis.com",
    "storage.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "serviceusage.googleapis.com",
    "iam.googleapis.com",
    "storage-component.googleapis.com",
    "container.googleapis.com",
    "containerregistry.googleapis.com",
    "iap.googleapis.com"
  ]
}


variable "sac_id" {
  type = string
  default = "default-sac"
}

variable "billing_account" {
  type = string
  default = "01CC73-9CE5F3-C33F4C"
}