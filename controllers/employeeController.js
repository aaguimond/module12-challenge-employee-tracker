const db = require('../config/db');

const getEmployees = async () => {
    const res = await db.query('SELECT * FROM employee');
    return res.rows;
};

const addEmployee = async