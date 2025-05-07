## CI/CD Pipeline

This project demonstrates the deployment of a Node.js project to Azure Kubernetes Service (AKS) using Docker and GitHub Actions for CI/CD.

# Features
* Dockerized Node.js
* Azure Kubernetes Service (AKS) deployment
* CI/CD pipeline with GitHub Actions
* Azure Container Registry (ACR) for image storage

# Prerequisites
* Docker
* Azure CLI
* Kubernetes CLI (kubectl)
* Azure Container Registry (ACR)
* An Azure Kubernetes Service (AKS) cluster
* GitHub account with configured secrets (DOCKER\_USERNAME, DOCKER\_PASSWORD, AZURE\_CREDENTIALS)

## Setup and Installation

1. Clone the repository
2. Build and tag the Docker image  
3. Push the image to ACR
   
## Deployment to AKS

1. Update your AKS cluster to pull from ACR
2. Deploy the deployment and service yml file

## CI/CD Pipeline

The GitHub Actions pipeline automates the build, push, and deployment process:

* Triggers on push to the `main` branch.
* Builds the Docker image and pushes to ACR.
* Deploys to AKS using the updated image.
