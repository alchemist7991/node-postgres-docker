const knex = require('knex');

module.exports = knex({
    client: 'postgres',
    connection: {
        host: process.env.PG_HOST || 'postgres_db',
        user: process.env.PG_USER || 'admin',
        password: process.env.PG_PASSWORD || '123456',
        database: process.env.PG_DB || 'node_app_pg_db',
    }
})