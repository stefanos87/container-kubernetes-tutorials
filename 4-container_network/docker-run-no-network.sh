source setenv.sh
echo ${cyn}Removing Docker containers ...${end}
docker rm -f $RESTAURANTS_BACKEND_CONTAINER_NAME
docker rm -f $RESTAURANTS_UI_CONTAINER_NAME
docker rm -f $UPLOAD_CONTAINER_NAME
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
# Restaurants Backend
RESTAURANTS_BACKEND_CMD_RUN="docker run -d --name $RESTAURANTS_BACKEND_CONTAINER_NAME -p $RESTAURANTS_BACKEND_CONTAINER_PORT:8082 -v $CONFIG_DIR:$CONFIG_DIR_MOUNT -e CONFIG_DIR=$CONFIG_DIR_MOUNT -e EXPOSED_PORT=$RESTAURANTS_BACKEND_CONTAINER_PORT $RESTAURANTS_BACKEND_IMAGE_NAME:$RESTAURANTS_BACKEND_IMAGE_VERSION"
echo ${cyn}Running Restaurants Backend with:${end} ${grn}$RESTAURANTS_BACKEND_CMD_RUN${end}
$RESTAURANTS_BACKEND_CMD_RUN
# Upload Manager
UPLOAD_MANAGER_CMD_RUN="docker run -d --name $UPLOAD_CONTAINER_NAME -p $UPLOAD_CONTAINER_PORT:8083 -v $UPLOAD_DIR:$UPLOAD_DIR_MOUNT -e UPLOAD_DIR=$UPLOAD_DIR_MOUNT -e EXPOSED_PORT=$UPLOAD_CONTAINER_PORT $UPLOAD_IMAGE_NAME:$UPLOAD_IMAGE_VERSION"
echo ${cyn}Running Upload Manager with:${end} ${grn}$UPLOAD_MANAGER_CMD_RUN${end}
$UPLOAD_MANAGER_CMD_RUN
# Restaurants UI
RESTAURANTS_UI_CMD_RUN="docker run -it --name $RESTAURANTS_UI_CONTAINER_NAME -p $RESTAURANTS_UI_CONTAINER_PORT:80 $RESTAURANTS_UI_IMAGE_NAME:$RESTAURANTS_UI_IMAGE_VERSION"
echo ${cyn}Running Restaurants UI with:${end} ${grn}$RESTAURANTS_UI_CMD_RUN${end}
$RESTAURANTS_UI_CMD_RUN