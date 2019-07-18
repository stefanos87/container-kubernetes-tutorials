# Docker Basics Tutorial
This tutorial provides the entry point to start familiarize with basic Docker concepts and operations.

A simple web application running on NodeJs is provided; it serves an HTML page and exposes 2 REST services endpoints:
* */healthz* endpoint - it just returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it calls a REST service endpoint that returns a list of restaurants in Json format

## Prerequisites
To run the demo scenarios, the following software needs to be installed:
* *Node.js* - download and installation instructions are available for different platforms at *https://nodejs.org/en/download/*. The application has been developed and tested with Node.js v8.11.3.
* *npm* - Node.js Package Manager is distributed with Node.js, which means that when you download Node.js, you automatically get npm installed on your computer. The application has been developed and tested with npm v5.6.0.
* *Docker* - installation instructions for Docker Community Edition are available for different platforms at *https://docs.docker.com/install/*. The application has been developed and tested with Docker Engine 18.09.2.

## Application demo scenario
Application code is provided in */app* subfolder and can be run by launching *app-run.sh* script, available in the repository root folder.

## Automation scripts available
A *Dockerfile* is provided to build and run the application as a Docker container; plain standard Docker commands can be used to build the Docker image, push the Docker image to Docker Hub repository and run it as a Docker container, the following scripts are provided for convenience:
* *docker-build.sh* - it can be launched to build the Docker image; the script removes the Docker image from the local registry and re-builds it.
* *docker-run.sh* endpoint - it can be launched to run Docker container locally; the script removes running container and runs a fresh container instance.
* *docker-push.sh* - it can be launched to push the Docker image to Docker Hub. You will need to modify *$DOCKER_IMAGE* parameter in *setenv.sh* appropriately to push to the correct Docker Hub repository.

All the relevant parameters are externalized and can be changed in *setenv.sh* script.