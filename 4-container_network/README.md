# Container networking tutorial
This tutorial provides code to test and understand how container networking works.

The tutorial builds on previous ![Container volumes tutorial](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/3-container_volumes) by splitting the Restaurant Management web application in 3 different microservices, each one deployed as a separate container:
* ![*Restaurants UI*](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/4-container_network/rpozzi-restaurants-ui) microservice 
* *Restaurants backend* microservice
* *Upload manager* microservice

Overall, the application still exposes the same 6 endpoints:
* */healthz* endpoint - it returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it returns a list of restaurants in Json format
* */dir* endpoint - it calls an endpoint that shows the upload directory, as defined by UPLOAD_DIR environment variable which has been injected in the application environment
* */upload* endpoint - it allows to select files from the local filesystem and upload them to *<UPLOAD_DIR>* folder
* */list* endpoint - it calls an endpoint that shows all the files in *<UPLOAD_DIR>* folder
* */delete* endpoint - it calls an endpoint that deletes all the files in *<UPLOAD_DIR>* folder

The different endpoints are implemented by different microservices 

## Prerequisites
Prerequisites are described in ![Container basics tutorial - Prerequisites](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/1-container_basics#Prerequisites) paragraph.

## Application demo scenario
[TODO]

## Automation scripts available
The following scripts are provided for convenience:
* *docker-run-no-netwrok.sh* - it can be launched to run all 3 Docker containers locally with no Docker network attached.
* *docker-run-with-volume.sh* - it can be launched to run all 3 Docker containers locally, attached to the same Docker network.
* *docker-container-remove.sh* - it can be launched to remove all 3 Docker containers and Docker network.

All the relevant parameters are externalized and can be changed in *setenv.sh* script.