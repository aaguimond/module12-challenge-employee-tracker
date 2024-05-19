const db = require('../config/db');

const getRoles = async () => {
    const res = await db.query('SELECT * FROM role');
    return res.rows;
};

const addRole = async (title, salary, departmentId) => {
    await db.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
    [title, salary, departmentId]);
};

const updateRole = async (roleId, title, salary) => {
    if (title) {
        await db.query('UPDATE role SET title = $1 WHERE id = $2',
        [title, roleId]);
    }
    if (salary) {
        await db.query('UPDATE role SET salary = $1 WHERE id = $2',
        [salary, roleId]);
    }
};

module.exports = { getRoles, addRole, updateRole };