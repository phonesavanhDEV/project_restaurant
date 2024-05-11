const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_restaurant',
    password: 'scandal4',
    port: 5432,
});

pool.on('error', (err, client) => {
    console.error('Error failed connect database server', err);
    process.exit(-1);
});

module.exports = pool;