# Container basics tutorial
This tutorial provides the entry point to start familiarize with basic container technologies concepts and operations.

A simple web application running on Node.Js is provided; it serves an HTML page and exposes the following 2 REST service endpoints:
* */healthz* endpoint - it returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it returns a list of restaurants in Json format

## Prerequisites
To run the demo scenarios, the following software needs to be installed:
* *Node.js* - installation instructions are available for different platforms at *https://nodejs.org/en/download/*. The application has been developed and tested with Node.js v8.11.3.
* *npm* - Node.js Package Manager is distributed with Node.js, which means that when you download Node.js, you automatically get npm installed on your computer. The application has been developed and tested with npm v5.6.0.
* An *OCI compliant runtime*. The code provided in the tutorials have been developed and tested on the following container engines:
    * *Docker* - installation instructions for Docker Community Edition are available for different platforms at *https://docs.docker.com/install/*. The application has been developed and tested with Docker Engine 19.03.2.
    * *cri-o (https://cri-o.io/)* - it is an implementation of the Kubernetes CRI (Container Runtime Interface) to enable using OCI (Open Container Initiative) compatible runtimes. It is a lightweight alternative to using Docker as the container runtime. Cri-o is currently supported on Linux platforms only, installation instructions for different platforms are available at *https://github.com/cri-o/cri-o#installing-cri-o*. 
        * *Buildah (https://buildah.io/)* - Buildah is a tool that facilitates building OCI container images. Installation instructions for different platforms are available at *https://github.com/containers/buildah/blob/master/install.md*
        * *Podman (https://podman.io/)* - Podman is a utility, provided as part of the libpod library, that can be used to create, run and maintain containers. Installation instructions for different platforms are available at *https://podman.io/getting-started/installation*

## Application demo scenario
Application code is provided in */app* subfolder and can be run by launching *app-run.sh* script, available in the repository root folder.

## Automation scripts available
A *Dockerfile* is provided to build and run the application as a container; plain standard OCI compliant commands (either Docker or Buildah/Podman) can be used to build the container image, push the container image to Docker Hub repository and run it as a container, the following scripts are provided for convenience:

### Docker
* *docker-build.sh* - it can be launched to build the Docker image; the script removes the Docker image from the local registry and re-builds it.
* *docker-run.sh* - it can be launched to run Docker container locally; the script removes running container and runs a fresh container instance.
* *docker-push.sh* - it can be launched to push the Docker image to Docker Hub. You will need to modify *$CONTAINER_IMAGE_NAME* parameter in *setenv-docker.sh* appropriately to push to the correct Docker Hub repository.

All the relevant parameters are externalized and can be changed in *setenv-docker.sh* script.

### Buildah / Podman
* *container-build.sh* - it can be launched to build the container image using Buildah utility; the script removes the container image from the local registry and re-builds it.
* *container-run.sh* - it can be launched to run container locally using Podman utility; the script removes running container and runs a fresh container instance.
* *container-push.sh* - it can be launched to push the container image to Docker Hub. You will need to modify *$CONTAINER_IMAGE_NAME* parameter in *setenv.sh* appropriately to push to the correct Docker Hub repository.

All the relevant parameters are externalized and can be changed in *setenv.sh* script.