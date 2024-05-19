const db = require('../config/db');

const getDepartments = async () => {
    try {
        const res = await db.query('SELECT * FROM department');
        return res.rows;
    } catch (err) {
        console.error('Error getting departments:', err);
        throw err;
    }
};

const addDepartment = async (name) => {
    try {
        await db.query('INSERT INTO department (name) VALUES ($1)',
        [name]);
    } catch (err) {
        console.error('Error adding department:', err);
        throw err;
    }
};

const updateDepartment = async (departmentId, name) => {
    try {
        await db.query('UPDATE department SET name = $1 WHERE id = $2',
        [name, departmentId]);
    } catch (err) {
        console.error('Error updating department:', err);
        throw err;
    }
};

module.exports = { getDepartments, addDepartment, updateDepartment };