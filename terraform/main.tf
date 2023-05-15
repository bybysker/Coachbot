provider "google" {
    credentials = file("projet-test-231711-33187dc965ba.json")
    project = var.project_id
    region = var.region
}


resource "google_project_service" "gcp_services" {
  for_each = toset(var.gcp_service_list)
  project = var.project_id
  service = each.key
}

resource "google_storage_bucket" "coachbot_bucket" {
  name          = var.bucket_name
  location      = var.region
  force_destroy = true
}

resource "google_cloud_run_service" "my_app" {
  name     = var.app_name
  location = var.region

  template {
    spec {
      containers {
        image = "gcr.io/projet-test-231711/coachbot:latest"
      }
      container_concurrency = 80
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloudbuild_trigger" "my_app_build_trigger" {
  name     = "coachbot-app-build-trigger"
  description = "Trigger for building and deploying the app"
  filename = "cloudbuild.yaml"
  

  trigger_template {
    project_id = var.project_id
    repo_name  = "Coachbot"
    branch_name = "main"
  }

  substitutions = {
    _CLOUD_RUN_SERVICE_NAME = "coachbot-app"
  }
}

resource "google_logging_project_sink" "my_app_log_sink" {
  name        = "coachbot-log-sink"
  destination = "storage.googleapis.com/coachbot-bucket" 
  filter      = "resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"my-app\""

  unique_writer_identity = true
}

