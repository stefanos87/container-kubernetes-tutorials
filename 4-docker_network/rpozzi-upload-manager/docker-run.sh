source setenv.sh

echo ${cyn}Removing $DOCKER_CONTAINER_NAME Docker container ...${end}
docker rm -f $DOCKER_CONTAINER_NAME
echo ${cyn}Docker container removed${end}
echo
echo ${cyn}Running Docker container ...${end}
docker run -it --name $DOCKER_CONTAINER_NAME -v $UPLOAD_DIR:$UPLOAD_DIR_MOUNT -e UPLOAD_DIR=$UPLOAD_DIR_MOUNT -p 8084:8083 $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_VERSION