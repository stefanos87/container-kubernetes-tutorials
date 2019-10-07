source setenv.sh
echo ${cyn}Removing container image ...${end}
$CONTAINER_BUILD_UTILITY rmi -f $CONTAINER_IMAGE_NAME:$CONTAINER_IMAGE_VERSION
echo ${cyn}Container image removed${end}
echo
echo ${cyn}Building container image ...${end}
$CONTAINER_BUILD_UTILITY build -t $CONTAINER_IMAGE_NAME:$CONTAINER_IMAGE_VERSION .
echo ${cyn}Container image built${end}