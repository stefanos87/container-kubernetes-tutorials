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
CONTAINER_IMAGE_NAME=robipozzi/rpozzi-restaurants
CONTAINER_IMAGE_VERSION=1.2
CONTAINER_NAME=restaurant-app
CONTAINER_PORT=8083
UPLOAD_DIR=/Users/robertopozzi/temp/upload
UPLOAD_DIR_MOUNT=/tmp/upload
CONFIG_DIR=/Users/robertopozzi/dev/robipozzi-kubernetes/container-kubernetes-tutorials/3-container_volumes/app/config
CONFIG_DIR_MOUNT=/config
###### Variable section - END