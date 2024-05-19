const db = require('../config/db');

const getRoles = async () => {
    try {
        const res = await db.query('SELECT * FROM role');
        return res.rows;
    } catch (err) {
        console.error('Error getting roles:', err);
        throw err;
    }
};

const addRole = async (title, salary, departmentId) => {
    try {
        await db.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
        [title, salary, departmentId]);
    } catch (err) {
        console.error('Error adding role:', err);
        throw err;
    }
};

const updateRole = async (roleId, title, salary) => {
    if (title) {
        try {
            await db.query('UPDATE role SET title = $1 WHERE id = $2',
            [title, roleId]);
        } catch (err) {
            console.error('Error updating role:', err);
            throw err;
        }
    }
    if (salary) {
        try {
            await db.query('UPDATE role SET salary = $1 WHERE id = $2',
            [salary, roleId]);
        } catch (err) {
            console.error('Error updating role:', err);
            throw err;
        }
    }
};

module.exports = { getRoles, addRole, updateRole };