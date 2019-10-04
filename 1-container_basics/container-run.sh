source setenv.sh
echo ${cyn}Removing $CONTAINER_NAME container ...${end}
docker rm -f $CONTAINER_NAME
echo ${cyn}Container removed${end}
echo
echo ${cyn}Running container ...${end}
CONTAINER_CMD_RUN="docker run -it --name $CONTAINER_NAME -p $CONTAINER_PORT:8082 -e EXPOSED_PORT=$CONTAINER_PORT $CONTAINER_IMAGE_NAME:$CONTAINER_IMAGE_VERSION"
echo ${cyn}Running with:${end} ${grn}$CONTAINER_CMD_RUN${end}
$CONTAINER_CMD_RUN