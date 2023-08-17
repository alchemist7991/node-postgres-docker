# node-postgres-docker
Sample Porject on node js and postgres using docker

### Start Server
docker-compose up --build

### Migrate and Seed DB
docker exec nodeproject_server_1 npm run migrate
docker exec nodeproject_server_1 npm run seed

### Log into DB
docker exec -it nodeproject_postgres_db_1 psql -t node_app_pg_db -U admin

### Remove Data Volumes
sudo docker volume ls -q | xargs sudo docker volume rm
