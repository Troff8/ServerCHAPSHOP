const Pool = require('pg').Pool
const pool = new Pool({
    user : "postgres",
    password:"Russia163",
    host:"localhost",
    port:5432,
    database:"csBD"
})

module.exports = pool