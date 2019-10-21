# Kubernetes basics tutorial
This tutorial provides the container image and the relative yaml configuration to deploy an application to Kubernetes (https://kubernetes.io/) and explore its basic capabilities, such as Deployments and Services.

The tutorial builds on previous container tutorial and uses **robipozzi/rpozzi-restaurants:1.0** container image, which has been built in ![Container basics tutorial](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/1-container_basics); the container image is available in Docker Hub (*https://hub.docker.com/*) publicly accessible registry (see *https://hub.docker.com/r/robipozzi/rpozzi-restaurants/tags*).

## Prerequisites
To follow the instructions in this tutorial you will need either a Kubernetes and/or a Red Hat OpenShift installation; this tutorial has been developed and tested on the following two environments, for which detailed instructions on how to instantiate and operate with are provided:
* *IBM Kubernetes Service* - IBM Cloud (*https://cloud.ibm.com/*) provides a managed Kubernetes service, with a free cluster tier available.
* *Red Hat OpenShift* on IBM Bluedemos environment - IBM provides a free demo environment, available at the following URL  *https://bluedemos.com/show/2459* where a full functional Red Hat OpenShift 3.11 installation can be used for demo and test purposes.

Every Kubernetes and Red Hat OpenShift installation (either installed on-premises or instantiated on a Cloud Provider) should work but have not been tested during the development of this tutorial. 
Please refer to the specific Cloud Provider documentation for instructions on how to instantiate, authenticate and operate with Kubernetes and/or Red Hat OpenShift environments provided.

### Use IBM Kubernetes Service
You can have access to a Kubernetes cluster installation on IBM Cloud, here following you will find the instructions to instantiate one:
1. Access IBM Cloud at *https://cloud.ibm.com/*, if you do not have an account you can create one for free
2. Go to Catalog and click *Containers* link in the menu on the left 
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/catalog.png)
3. Click on Kubernetes Service tile and then click *Create* button
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/create-button.png)
4. Select the Free plan (you will be able to experiment with full functional Kubernetes cluster at no charge for 1 month), leave all the defaults and then click *Create cluster* button; this tutorial has been tested with version 1.14.7 
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/create-cluster.png)
5. Once the cluster has been created (it usually takes 10 minutes or more) go to *Access* section that will give you all the instructions to download, install and configure the command lines needed to interact with Kubernetes
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/cluster-access.png)
6. Go to *Worker Nodes* section and take not of *Public IP*, you will need it to access the application, once deployed
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/public-ip.png)

#### IBM Kubernetes Service authentication
The *Access* section of your cluster describes how to connect and authenticate to your cluster; you basically need to:
1. Start a terminal and authenticate to IBM Cloud with the following **ibmcloud login -a cloud.ibm.com -r <YOUR_CLUSTER_REGION> -g <YOUR_CLUSTER_GROUP>**
2. Authenticate to the Kubernetes cluster with the following **ibmcloud ks cluster config --cluster <YOUR_CLUSTER_ID>**
3. Export the **KUBECONFIG** environment variable as described in the *Access* section of your cluster
The specific commands, with the correct values for your cluster are in the *Access* section of your cluster.
From now on you can use **kubectl** commands to interact with the cluster

### Use Red Hat OpenShift
You can have access to a Red Hat OpenShift cluster installation on IBM Bluedemos environment, here following you will find the instructions to instantiate one:
1. Access IBM Bluedemos at *https://bluedemos.com/show/2459*, you will need an IBM id, if you do not have it you can create one for free by clicking the *Create and IBM id* link at the bottom of the page, as you can see in the following snapshot
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/ibm-login.png)
2. Instantiate the environment by clicking the *Reserve a demo* button (the environment can be booked for a maximum of 350 consecutive hours, then you will need to create another instance), you will receive an email with URL and password to access the environment once it will be ready
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/bluedemos.png)
3. Once the environment is ready, access to it and start all the VMs by clicking the button as shown in the snapshot below
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/start.png)
4. Once the VMs are all started, access the one named *Workstation* by just clicking on its tile.

All usernames and passwords that you will eventually need to work within the environment are available in *Lab01 Guide* that you can find in *https://bluedemos.com/show/2459* Home Page.

#### Red Hat OpenShift authentication
[TODO]

## Application demo scenario
The Restaurant Management application, in the version developed in ![Container basics tutorial](https://github.com/robipozzi/container-kubernetes-tutorials/tree/master/1-container_basics) gets deployed to Kubernetes and can be tested on that. 
The *restaurant-app.yaml* file, provided in this repository, defines all the configurations needed to deploy and run the application in Kubernetes cluster.
Once you have authenticated to Kubernetes cluster, as described in the *Prerequisites* section, you can just issue the following command, which will create all the necessary Kubernetes objects in your cluster:

**kubectl apply -f restaurant-app.yaml**



### Kubernetes Deployment
A Deployment is a Kubernetes object used to describe the characteristics and the desired state of an application component.
Please refer to Kubernetes documentation *https://kubernetes.io/docs/concepts/workloads/controllers/deployment/* for more information and details.
The *restaurant-app.yaml* provided in this repository defines a Deployment for Restaurant Manage
![](https://github.com/robipozzi/container-kubernetes-tutorials/blob/master/5-k8_basics/images/k8-deployment.png)
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