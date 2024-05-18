const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST || 'localhost',
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.PORT || 5432,
});

module.exports = pool;