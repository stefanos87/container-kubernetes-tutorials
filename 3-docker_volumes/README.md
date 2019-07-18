# Docker Volumes Tutorial
This tutorial provides code to test and understand how persistence can be managed in Docker based applications.

Docker containers are, by nature, inherently volatile, which means they do not persist state between subsequent runs of the container. Since persistence is mandatory for any non trivial application, Docker obviously provides technical mechanisms to manage persistence through the usage of Docker volumes (see Docker official documentation https://docs.docker.com/storage/volumes/).

The tutorial builds on previous ![Docker Environment Variables Tutorial](https://github.com/robipozzi/docker-kubernetes-tutorials/tree/master/2-docker_environment) by further extending NodeJs based web application to serve an HTML page and expose 6 endpoints:
* */healthz* endpoint - it calls a REST service endpoint that returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it calls a REST service endpoint that returns a list of restaurants in Json format
* */dir* endpoint - it calls an endpoint that shows the upload directory, as defined by UPLOAD_DIR environment variable which has been injected in the application environment
* */upload* endpoint - it allows to select files from the local filesystem and upload them to *<UPLOAD_DIR>* folder
* */list* endpoint - it calls an endpoint that shows all the files in *<UPLOAD_DIR>* folder
* */delete* endpoint - it calls an endpoint that deletes all the files in *<UPLOAD_DIR>* folder

## Application demo scenario
Application code is provided in */app* subfolder and can be run by launching *app-run.sh* script, available in the repository root folder.

A *Dockerfile* is also provided to build and run the application as a Docker container. 

Once the Docker image is built, run a Docker container with the following standard Docker run command, where */tmp/upload* is a folder inside the Docker container filesystem: 

**docker run -it --name robipozzi/rpozzi-restaurants -p 8083:8082 -e UPLOAD_DIR=/tmp/upload -e EXPOSED_PORT=8083 robipozzi/rpozzi-restaurants:1.2**

Explore application behavior by opening a web browser with URL *http://localhost:8083* and doing the following steps:
1. upload some files [TODO]
2. call *http://localhost:8083/list* endpoint [TODO]
3. stop the container
4. run the container again, with the same docker run command as before
5. call *http://localhost:8083/list* endpoint [TODO]

## Automation scripts available
The following scripts are provided for convenience:
* *docker-build.sh* - it can be launched to build the Docker image; the script removes the Docker image from the local registry and re-builds it.
* *docker-run-no-volume.sh* endpoint - it can be launched to run Docker container locally with no Docker volumes attached.
* *docker-run-with-volume.sh* endpoint - it can be launched to run Docker container locally with Docker volumes attached. 
* *docker-push.sh* - it can be launched to push the Docker image to Docker Hub. You will need to modify *$DOCKER_IMAGE* parameter in *setenv.sh* appropriately to push to the correct Docker Hub repository.

All the relevant parameters are externalized and can be changed in *setenv.sh* script.