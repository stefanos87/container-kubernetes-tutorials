# Docker volumes tutorial
This tutorial provides code to test and understand how persistence can be managed in Docker based applications.

Docker containers are, by nature, inherently volatile, which means they do not persist state between subsequent runs of the container. Since persistence is mandatory for any non trivial application, Docker obviously provides technical mechanisms to manage persistence through the usage of Docker volumes (see Docker official documentation https://docs.docker.com/storage/volumes/).

The tutorial builds on previous ![Docker environment variables tutorial](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/2-container_environment) by further extending NodeJs based web application to serve an HTML page and expose 6 endpoints:
* */healthz* endpoint - it returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it returns a list of restaurants in Json format
* */dir* endpoint - it calls an endpoint that shows the upload directory, as defined by UPLOAD_DIR environment variable which has been injected in the application environment
* */upload* endpoint - it allows to select files from the local filesystem and upload them to *<UPLOAD_DIR>* folder
* */list* endpoint - it calls an endpoint that shows all the files in *<UPLOAD_DIR>* folder
* */delete* endpoint - it calls an endpoint that deletes all the files in *<UPLOAD_DIR>* folder

## Prerequisites
Prerequisites are described in ![Docker basics tutorial - Prerequisites](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/1-container_basics#Prerequisites) paragraph.

## Application demo scenario
Application code is provided in */app* subfolder and can be run by launching *app-run.sh* script, available in the repository root folder.

A *Dockerfile* is also provided to build and run the application as a Docker container. 

Once the Docker image is built, run a Docker container with the following standard Docker run command, where */tmp/upload* is a folder inside the Docker container filesystem (*docker-run-no-volume.sh* script is provided to automate this task avoiding errors): 

**docker run -it --name restaurant-app -p 8083:8082 -e UPLOAD_DIR=/tmp/upload -e EXPOSED_PORT=8083 robipozzi/rpozzi-restaurants:1.2**

Explore application behavior by opening a web browser with URL *http://localhost:8083* and doing the following steps:
1. upload some files from your local filesystem to *<UPLOAD_DIR>* folder by using the *Browse* and then *Upload your files* buttons
2. call *http://localhost:8083/list* endpoint that will show the content of *<UPLOAD_DIR>* folder: you will see the files you uploaded in the step before
3. stop the container by issuing CTRL+C in the terminal windows
4. run the container again, with the same docker run command as before (or run *docker-run-no-volume.sh* script)
5. call *http://localhost:8083/list* endpoint: since the container has been launched without any volume, the container filesystem is ephemeral and you will not see any file listed
6. stop the container by issuing CTRL+C in the terminal windows

To test how Docker can manage persistence through the usage of volumes, run a Docker container with the following standard Docker run command (change */Users/robertopozzi/temp/upload* to a folder available on your workstation), where */tmp/upload* is a folder inside the Docker container filesystem (*docker-run-with-volume.sh* script is provided to automate this task avoiding errors): 

**docker run -it --name restaurant-app -p 8083:8082 -v /Users/robertopozzi/temp/upload:/tmp/upload -e UPLOAD_DIR=/tmp/upload -e EXPOSED_PORT=8083 robipozzi/rpozzi-restaurants:1.2**

Now run again the following steps:
1. upload some files from your local filesystem to *<UPLOAD_DIR>* folder by using the *Browse* and then *Upload your files* buttons
2. call *http://localhost:8083/list* endpoint that will show the content of *<UPLOAD_DIR>* folder: you will see the files you uploaded in the step before
3. stop the container by issuing CTRL+C in the terminal windows
4. run the container again, with the same docker run command as before (or run *docker-run-with-volume.sh* script)
5. call *http://localhost:8083/list* endpoint: since the container now uses a volume and mounts a local folder to the container filesystem you will now see the files previously uploaded
6. stop the container by issuing CTRL+C in the terminal windows

## Automation scripts available
The following scripts are provided for convenience:
* *docker-build.sh* - it can be launched to build the Docker image; the script removes the Docker image from the local registry and re-builds it.
* *docker-run-no-volume.sh* - it can be launched to run Docker container locally with no Docker volumes attached.
* *docker-run-with-volume.sh* - it can be launched to run Docker container locally with Docker volumes attached. 
* *docker-push.sh* - it can be launched to push the Docker image to Docker Hub. You will need to modify *$DOCKER_IMAGE* parameter in *setenv.sh* appropriately to push to the correct Docker Hub repository.

All the relevant parameters are externalized and can be changed in *setenv.sh* script.