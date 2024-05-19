const db = require('../config/db');

const getDepartments = async () => {
    const res = await db.query('SELECT * FROM department');
    return res.rows;
};

const addDepartment = async (name) => {
    await db.query('INSERT INTO department (name) VALUES ($1)',
    [name]);
};

const updateDepartment = async (departmentId, name) => {
    await db.query('UPDATE department SET name = $1 WHERE id = $2',
    [name, departmentId]);
};

module.exports = { getDepartments, addDepartment, updateDepartment };