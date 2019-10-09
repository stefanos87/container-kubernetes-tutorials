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
CONTAINER_NETWORK=multitier-net
FE_CONTAINER_NETWORK=multitier-fe
BE_CONTAINER_NETWORK=multitier-be
## Restaurants Backend environment variables
RESTAURANTS_BACKEND_IMAGE_NAME=robipozzi/rpozzi-restaurants-backend
RESTAURANTS_BACKEND_IMAGE_VERSION=1.0
RESTAURANTS_BACKEND_CONTAINER_NAME=restaurant-backend-app
RESTAURANTS_BACKEND_CONTAINER_PORT=8083
CONFIG_DIR=/Users/robertopozzi/dev/robipozzi-kubernetes/docker-kubernetes-tutorials/4-docker_network/rpozzi-restaurants-backend/app/config
CONFIG_DIR_MOUNT=/config
## Upload Manager environment variables
UPLOAD_IMAGE_NAME=robipozzi/rpozzi-upload-manager
UPLOAD_IMAGE_VERSION=1.0
UPLOAD_CONTAINER_NAME=upload-manager-app
UPLOAD_CONTAINER_PORT=8084
UPLOAD_DIR=/Users/robertopozzi/temp/upload
UPLOAD_DIR_MOUNT=/tmp/upload
## Restaurants UI environment variables
RESTAURANTS_UI_IMAGE_NAME=robipozzi/rpozzi-restaurants-ui
RESTAURANTS_UI_IMAGE_VERSION=1.0
RESTAURANTS_UI_CONTAINER_NAME=rpozzi-restaurants-ui
RESTAURANTS_UI_CONTAINER_PORT=8085
ANGULAR_DIST_DIR=dist/
###### Variable section - END