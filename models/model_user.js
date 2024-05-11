const pool = require('../config/db');
// const bcrypt = require('bcrypt');
// Function to fetch data from PostgreSQL
const fetchData = async() => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT user_id, username, password, active, login_time FROM security.user_login;');
        const data = result.rows;
        client.release();
        return data;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};




const loginData = async(username, password) => {
    try {
        const client = await pool.connect();
        const result = await client.query(
            `SELECT user_id, username, password, active, login_time
             FROM security.user_login
             WHERE username = $1 AND password = $2`, [username, password]
        );
        client.release();
        const user = result.rows[0];
        return user;
    } catch (error) {
        console.error('Error executing loginData query', error);
        throw error;
    }
}


module.exports = { fetchData, loginData };