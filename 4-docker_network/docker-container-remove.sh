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
echo ${cyn}Docker networks removed${end}
echo
docker ps -a
docker network ls