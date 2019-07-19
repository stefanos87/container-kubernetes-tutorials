# Docker networking tutorial


## Prerequisites
Prerequisites are described in ![Docker Basics Tutorial - Prerequisites](https://github.com/robipozzi/docker-kubernetes-tutorials/tree/master/1-docker_basics#Prerequisites) paragraph.

## Automation scripts available
The following scripts are provided for convenience:
* *docker-run-no-netwrok.sh* - it can be launched to run all 3 Docker containers locally with no Docker network attached.
* *docker-run-with-volume.sh* - it can be launched to run all 3 Docker containers locally, attached to the same Docker network.
* *docker-container-remove.sh* - it can be launched to remove all 3 Docker containers and Docker network.

All the relevant parameters are externalized and can be changed in *setenv.sh* script.