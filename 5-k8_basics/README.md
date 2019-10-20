# Kubernetes basics tutorial
This tutorial provides code to explore ![Kubernetes](https://kubernetes.io/) basic capabilities, such as Deployments and Services.

The tutorial builds on previous container tutorial and uses the container image **robipozzi/rpozzi-restaurants:1.0** which has been built in ![Container basics tutorial](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/1-container_basics) and is available in Docker Hub (*https://hub.docker.com/*) publicly accessible registry (see *https://hub.docker.com/r/robipozzi/rpozzi-restaurants/tags*).

## Prerequisites
To follow the instructions in this tutorial you will need either a Kubernetes and/or a Red Hat OpenShift installation; this tutorial has been developed and tested on the following two environments, for which detailed instructions are provided on how to instantiate and operate with:
* *IBM Kubernetes Services* - [TODO]
* *Red Hat OpenShift* available in an IBM Bluedemos environment - [TODO] *https://bluedemos.com/show/2459*

Every Kubernetes and Red Hat OpenShift installation (either installed on-premises or instantiated on a Cloud Provider) should work but have not been tested, please refer to the specific Cloud Provider documentation for instructions on how to instantiate, authenticate and operate with Kubernetes and RH OpenShift provided.
[TODO]

## Application demo scenario
[TODO]

### Kubernetes Deployment
[TODO]

### Kubernetes Service
[TODO]

### Kubernetes Ingress
[TODO]

### Red Hat OpenShift Route
[TODO]

### Deploy and run application on IBM Kubernetes Service
A *restaurant-app.yaml* is provided to build and run the application as a Docker container. 
First you need to build the container image by running the *docker build* command as follows:

### Deploy and run application on Red Hat OpenShift
[TODO]

## Automation scripts available
A *restaurant-app.yaml* is provided to deplo and run the application as a container; plain standard OCI compliant commands (either Docker or Buildah/Podman) can be used to build the container image, push the container image to Docker Hub repository and run it as a container, the following scripts are provided for convenience:

### IBM Kubernetes Service
* *deploy.sh* - it can be launched to build the Docker image; the script removes the Docker image from the local registry and re-builds it.
* *delete.sh* - it can be launched to run Docker container locally with no Docker volumes attached.