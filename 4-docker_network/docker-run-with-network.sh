##### Terminal Colors - START
red=$'\e[1;31m'
grn=$'\e[1;32m'
yel=$'\e[1;33m'
blu=$'\e[1;34m'
mag=$'\e[1;35m'
cyn=$'\e[1;36m'
end=$'\e[0m'
coffee=$'\xE2\x98\x95'
coffee3="${coffee} ${coffee} ${coffee}"
##### Terminal Colors - END
###### Variable section - START
BACKEND_IMAGE_NAME=robipozzi/backend
BACKEND_IMAGE_VERSION=1.0
BACKEND_CONTAINER_NAME=hello-backend
ANOTHERBACKEND_CONTAINER_NAME=hello-another-backend
FRONTEND_IMAGE_NAME=robipozzi/frontend
FRONTEND_IMAGE_VERSION=1.0
FRONTEND_CONTAINER_NAME=hello-frontend
CLIENT_IMAGE_NAME=robipozzi/client
CLIENT_IMAGE_VERSION=1.0
CLIENT_CONTAINER_NAME=hello-client
HOME_DIR=/Users/robertopozzi/dev/rpozzi-kubernetes/multi-tier
CONFIG_DIR=backend/config
CONFIG_DIR_MOUNT=/config
CONTAINER_NETWORK=multitier-net
FE_CONTAINER_NETWORK=multitier-fe
BE_CONTAINER_NETWORK=multitier-be
###### Variable section - END

echo ${cyn}Removing Docker containers ...${end}
docker rm -f $BACKEND_CONTAINER_NAME
docker rm -f $ANOTHERBACKEND_CONTAINER_NAME
docker rm -f $FRONTEND_CONTAINER_NAME
docker rm -f $CLIENT_CONTAINER_NAME
echo ${cyn}Docker container removed${end}
echo
echo ${cyn}Removing Docker networks ...${end}
docker network rm $CONTAINER_NETWORK
docker network rm $FE_CONTAINER_NETWORK
docker network rm $BE_CONTAINER_NETWORK
echo ${cyn}Docker network removed${end}
echo
echo ${cyn}Creating Docker networks ...${end}
docker network create $CONTAINER_NETWORK
docker network create $FE_CONTAINER_NETWORK
docker network create $BE_CONTAINER_NETWORK
echo ${cyn}Docker network created${end}
echo
echo ${cyn}Running Docker container ...${end}
docker run -d --name $BACKEND_CONTAINER_NAME --network $CONTAINER_NETWORK -e CONFIGDIR="/config" -e ENDPOINT="BACKEND" -v $HOME_DIR/$CONFIG_DIR:$CONFIG_DIR_MOUNT -p 8082:8081 $BACKEND_IMAGE_NAME:$BACKEND_IMAGE_VERSION
docker run -d --name $ANOTHERBACKEND_CONTAINER_NAME --network $CONTAINER_NETWORK -e CONFIGDIR="/config" -e ENDPOINT="ANOTHER_BACKEND" -v $HOME_DIR/$CONFIG_DIR:$CONFIG_DIR_MOUNT -p 8084:8083 $BACKEND_IMAGE_NAME:$BACKEND_IMAGE_VERSION
docker run -it --name $FRONTEND_CONTAINER_NAME --network $CONTAINER_NETWORK -e BACKEND_ENDPOINT="hello-backend:8081" -e ANOTHER_BACKEND_ENDPOINT="hello-another-backend:8083" -p 8081:8080 $FRONTEND_IMAGE_NAME:$FRONTEND_IMAGE_VERSION