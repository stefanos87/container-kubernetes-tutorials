# Docker Volumes Tutorial
[TODO]

It builds on ![Docker Environment Variables Tutorial](https://github.com/robipozzi/docker-kubernetes-tutorials/tree/master/2-docker_environment) by extending NodeJs based web application to serve an HTML page and expose 3 endpoints:
* */healthz* endpoint - it calls a REST service endpoint that returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it calls a REST service endpoint that returns a list of restaurants in Json format
* */dir* endpoint - it calls an endpoint that show the upload directory, as defined by UPLOAD_DIR environment variable which has been injected in the application environment

Application code is provided in */app* subfolder and can be run by launching *app-run.sh* script, available in the repository root folder.

The following scripts are provided for convenience:
* *docker-build.sh* - it can be launched to build the Docker image; the script removes the Docker image and re-builds it.
* *docker-run-no-volume.sh* endpoint - it can be launched to run Docker container locally with no Docker volumes attached [TODO].
* *docker-run-with-volume.sh* endpoint - it can be launched to run Docker container locally with Docker volumes attached [TODO]. 
* *docker-push.sh* - it can be launched to push the Docker image to Docker Hub. You will need to modify *$DOCKER_IMAGE* parameter in *setenv.sh* appropriately to push to the correct Docker Hub repository.

All the relevant parameters are externalized and can be changed in *setenv.sh* script.