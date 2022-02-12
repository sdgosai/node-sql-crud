const { createPool  } = require('mysql');

const pool = createPool({
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWOR: process.env.DB_PASSWOR,
    MYSQL_DB: process.env.MYSQL_DB,
    connectionLimit: 10
})

module.exports = pool;