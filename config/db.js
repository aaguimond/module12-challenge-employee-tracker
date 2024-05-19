const { Pool } = require('pg');
require('dotenv').config();

console.log('DB_USER:', process.env.USERNAME);
console.log('DB_PASSWORD:', process.env.PASSWORD);
console.log('DB_NAME:', process.env.DB);
console.log('DB_HOST:', process.env.HOST);
console.log('DB_PORT:', process.env.PORT);

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST || 'localhost',
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.PORT || 5432,
});

module.exports = pool;