# node-postgres-docker
Sample Porject on node js and postgres using docker

### Start Server
`docker-compose up --build`

### Migrate and Seed DB
`docker exec nodeproject_server_1 npm run migrate`
`docker exec nodeproject_server_1 npm run seed`

### Log into DB
`docker exec -it nodeproject_postgres_db_1 psql -t node_app_pg_db -U admin`

### Remove Data Volumes
`sudo docker volume ls -q | xargs sudo docker volume rm`

```
docker ps -a # list of all running/stopped/exited containers
docker images -a # list of images
docker volume ls # list of volumes
docker network ls # list of networks
docker network inspect bridge # inepect about bridge network

docker-compose up -d # start container at background
docker-compose down -v # shutdown/remove container with volumes

# check logs to see error, if containers don't work
docker logs redis
docker logs api

docker rmi -f $(docker images -aq) # remove all images if linked to stopped/removed containers
docker system prune -a --volumes # cleanup/remove everything (images, containers, volumes & etc) in one go
```
