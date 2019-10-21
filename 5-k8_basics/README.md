# Kubernetes basics tutorial
This tutorial provides the container image and the relative yaml configuration to deploy an application to Kubernetes (https://kubernetes.io/) and explore its basic capabilities, such as Deployments and Services.

The tutorial builds on previous container tutorial and uses **robipozzi/rpozzi-restaurants:1.0** container image, which has been built in ![Container basics tutorial](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/1-container_basics); the container image is available in Docker Hub (*https://hub.docker.com/*) publicly accessible registry (see *https://hub.docker.com/r/robipozzi/rpozzi-restaurants/tags*).

## Prerequisites
To follow the instructions in this tutorial you will need either a Kubernetes and/or a Red Hat OpenShift installation; this tutorial has been developed and tested on the following two environments, for which detailed instructions on how to instantiate and operate with are provided:
* *IBM Kubernetes Service* - IBM Cloud (*https://cloud.ibm.com/*) provides a managed Kubernetes service, with a free cluster tier available.
* *Red Hat OpenShift* on IBM Bluedemos environment - IBM provides a free demo environment, available at the following URL  *https://bluedemos.com/show/2459* where a full functional Red Hat OpenShift 3.11 installation can be used for demo and test purposes.

Every Kubernetes and Red Hat OpenShift installation (either installed on-premises or instantiated on a Cloud Provider) should work but have not been tested during the development of this tutorial. 
Please refer to the specific Cloud Provider documentation for instructions on how to instantiate, authenticate and operate with Kubernetes and/or Red Hat OpenShift environments provided.

### IBM Kubernetes Service
[TODO]
1. Access IBM Cloud at *https://cloud.ibm.com/*, if you do not have an account you can create one for free
2. Go to Catalog and click *Containers* link in the menu on the left 
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/catalog.png)
3. Click on Kubernetes Service tile and then click *Create* button
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/create-button.png)
4. Select the Free plan (so that you will be able to experiment with full functional Kubernetes cluster at no charge for 1 month)
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/create-cluster.png)
5. This tutorial has been tested with version 1.14.7 
[TODO]

### Red Hat OpenShift
[TODO]

## Application demo scenario
[TODO]

### Kubernetes Deployment
A Deployment is a Kubernetes object used to describe the characteristics and the desired state of [TODO] 
Please refer to Kubernetes documentation *https://kubernetes.io/docs/concepts/workloads/controllers/deployment/* for more information.
The *restaurant-app.yaml* provided in this repository has a section
[TODO]

### Kubernetes Service
A Service is a Kubernetes object that [TODO]
Please refer to Kubernetes documentation *https://kubernetes.io/docs/concepts/services-networking/service/* for more information.
The *restaurant-app.yaml* provided in this repository has a section
[TODO]

### Kubernetes Ingress
An Ingress is a Kubernetes object that [TODO]
Please refer to Kubernetes documentation *https://kubernetes.io/docs/concepts/services-networking/ingress/* for more information.
The *restaurant-app.yaml* provided in this repository has a section
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