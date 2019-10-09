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
docker ps -a
docker network ls