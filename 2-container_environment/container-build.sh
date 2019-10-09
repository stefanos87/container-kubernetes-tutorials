source setenv.sh
echo ${cyn}Removing container image ...${end}
$CONTAINER_BUILD_UTILITY rmi -f $CONTAINER_IMAGE_NAME:$CONTAINER_IMAGE_VERSION
echo ${cyn}Container image removed${end}
echo
echo ${cyn}Building container image ...${end}
CONTAINER_CMD_RUN="$CONTAINER_BUILD_UTILITY $CONTAINER_BUILD_CMD -t $CONTAINER_IMAGE_NAME:$CONTAINER_IMAGE_VERSION ."
echo ${cyn}Running with:${end} ${grn}$CONTAINER_CMD_RUN${end}
$CONTAINER_CMD_RUN
echo ${cyn}Container image built${end}