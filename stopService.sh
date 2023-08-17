#! /bin/sh

sudo docker-compose down

# remove all volumes
sudo docker volume ls -q | xargs sudo docker volume rm
