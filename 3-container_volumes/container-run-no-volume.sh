source setenv.sh
echo ${cyn}Removing $CONTAINER_NAME container ...${end}
$CONTAINER_RUN_UTILITY rm -f $CONTAINER_NAME
echo ${cyn}Container removed${end}
echo
echo ${cyn}Running container ...${end}
CONTAINER_CMD_RUN="$CONTAINER_RUN_UTILITY run -it --name $DOCKER_CONTAINER_NAME -p $DOCKER_CONTAINER_PORT:8082 -e CONFIG_DIR=$CONFIG_DIR_MOUNT -e UPLOAD_DIR=$UPLOAD_DIR_MOUNT -e EXPOSED_PORT=$DOCKER_CONTAINER_PORT $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_VERSION"
echo ${cyn}Running with:${end} ${grn}$CONTAINER_CMD_RUN${end}
$CONTAINER_CMD_RUN