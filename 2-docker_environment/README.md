# Docker environment variables usage tutorial
This tutorial provides code to test and understand how environment variables can be used to externalize and inject configuration in Docker based applications.

It builds on the previous tutorial by extending NodeJs based web application to serve an HTML page and expose 3 endpoints:
* */healthz* endpoint - it calls a REST service endpoint that returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it calls a REST service endpoint that returns a list of restaurants in Json format
* */dir* endpoint - it calls an endpoint that show the upload directory, as defined by UPLOAD_DIR environment variable which has been injected in the application environment

Application code is provided in */app* subfolder and can be run by launching *app-run.sh* script, available in the repository root folder. 

The application requires 2 environment variables, as it can be seen in the following code snippet from *app.js* file

![](https://github.com/robipozzi/docker-kubernetes-tutorials/blob/master/2-docker_environment/images/code-snippet1.png)

* one is called *UPLOAD_DIR*, and must be passed to the application by launching it with the following construct:

**UPLOAD_DIR="/Users/robertopozzi/temp/upload" npm start**

* the other is called *EXPOSED_PORT* but it is not mandatory.

A *Dockerfile* is also provided to build and run the application as a Docker container. Once the Docker image is built, it can be run with the standard Docker run command: 

**docker run -it --name restaurant-app -p 8083:8082 -e UPLOAD_DIR=$UPLOAD_DIR -e EXPOSED_PORT=8083 robipozzi/rpozzi-restaurants:1.1**

As it can be seen, an environment variable can be injected into a container with the following Docker construct:

**-e <ENV_VARIABLE_KEY>=<ENV_VARIABLE_VALUE>**

The following scripts are provided for convenience:
* *docker-build.sh* - it can be launched to build the Docker image; the script removes the Docker image and re-builds it. All the relevant parameters are externalized and can be changed in *setenv.sh* script.
* *docker-run.sh* endpoint - it can be launched to run Docker container locally; the script removes running container and runs a fresh container instance. All the relevant parameters are externalized and can be changed in *setenv.sh* script.
* *docker-push.sh* - it can be launched to push the Docker image to Docker Hub. You will need to modify *$DOCKER_IMAGE* parameter in *setenv.sh* appropriately to push to the correct Docker Hub repository.