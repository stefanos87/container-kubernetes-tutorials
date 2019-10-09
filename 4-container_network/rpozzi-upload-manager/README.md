# Upload manager microservice
[TODO]

## Prerequisites
Prerequisites are described in ![Docker Basics Tutorial - Prerequisites](https://github.com/robipozzi/docker-kubernetes-tutorials/tree/master/1-docker_basics#Prerequisites) paragraph.

## Automation scripts available
A *Dockerfile* is provided to build and run the application as a Docker container; plain standard Docker commands can be used to build the Docker image, push the Docker image to Docker Hub repository and run it as a Docker container, the following scripts are provided for convenience:
* *docker-build.sh* - it can be launched to build the Docker image; the script removes the Docker image from the local registry and re-builds it.
* *docker-run.sh* - it can be launched to run Docker container locally; the script removes running container and runs a fresh container instance.
* *docker-push.sh* - it can be launched to push the Docker image to Docker Hub. You will need to modify *$DOCKER_IMAGE* parameter in *setenv.sh* appropriately to push to the correct Docker Hub repository.

All the relevant parameters are externalized and can be changed in *setenv.sh* script.