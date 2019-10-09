source setenv-docker.sh
echo ${cyn}Removing $DOCKER_CONTAINER_NAME Docker container ...${end}
docker rm -f $DOCKER_CONTAINER_NAME
echo ${cyn}Docker container removed${end}
echo
echo ${cyn}Running Docker container ...${end}
CONTAINER_CMD_RUN="docker run -it --name $DOCKER_CONTAINER_NAME -p $DOCKER_CONTAINER_PORT:8082 -e CONFIG_DIR=$CONFIG_DIR_MOUNT -e UPLOAD_DIR=$UPLOAD_DIR_MOUNT -e EXPOSED_PORT=$DOCKER_CONTAINER_PORT $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_VERSION"
echo ${cyn}Running with:${end} ${grn}$CONTAINER_CMD_RUN${end}
$CONTAINER_CMD_RUN