# Kubernetes ConfigMap and Secrets tutorial
This tutorial provides the container image and the relative yaml configuration to deploy an application to Kubernetes (https://kubernetes.io/) and explore the concepts and usage of Kubernetes object such as ConfigMap and Secret.

The tutorial builds on previous container tutorial and uses **robipozzi/rpozzi-restaurants:1.1** container image, which has been built in ![Container environment variables tutorial](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/2-container_environment); the container image is available in Docker Hub (*https://hub.docker.com/*) publicly accessible registry (see *https://hub.docker.com/r/robipozzi/rpozzi-restaurants/tags*).

## 1. Prerequisites
Prerequisites for the execution of this tutorial are described in ![Kubernetes basics tutorial - Prerequisites](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/5-k8_basics#Prerequisites) paragraph.

## 2. Application demo scenario
[TODO]

### Kubernetes ConfigMap
[TODO]

### Kubernetes Secret
[TODO]

### 2.1. Deploy and run application on IBM Kubernetes Service
A *restaurant-app.yaml* is provided to build and run the application as a Docker container. 
First you need to build the container image by running the *docker build* command as follows:

### 2.2. Deploy and run application on Red Hat OpenShift
[TODO]

## 3. Automation scripts available
A *restaurant-app.yaml* is provided to deplo and run the application as a container; plain standard OCI compliant commands (either Docker or Buildah/Podman) can be used to build the container image, push the container image to Docker Hub repository and run it as a container, the following scripts are provided for convenience:

### IBM Kubernetes Service
* *deploy.sh* - it can be launched to build the Docker image; the script removes the Docker image from the local registry and re-builds it.
* *delete.sh* - it can be launched to run Docker container locally with no Docker volumes attached.