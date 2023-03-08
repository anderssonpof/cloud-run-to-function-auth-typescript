# GCP cloud run-function auth

A very simple GCP cloud run to function authentication example.

Using cloud functions gen1.

General requirements

- GCP project.
- Cloud functions API enabled.
- Cloud run API enabled.
- Permissions to create GCP cloud run, functions and create service accounts.

Setup script requirements

- gcloud cli
- jq

Using the setup script

```bash
PROJECT_ID=example-project REGION=europe-west1 ./setup.sh
```

Using the cleanup script

```bash
PROJECT_ID=example-project REGION=europe-west1 ./cleanup.sh
```
