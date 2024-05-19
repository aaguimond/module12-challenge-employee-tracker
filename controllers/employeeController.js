const db = require('../config/db');

const getEmployees = async () => {
    const res = await db.query('SELECT * FROM employee');
    return res.rows;
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
    await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
    [firstName, lastName, roleId, managerId]);
};

const updateEmployeeRole = async (roleId, employeeId) => {
    await db.query('UPDATE employee SET role_id = $1 WHERE id = $2',
    [roleId, employeeId]);
};

module.exports = { getEmployees, addEmployee, updateEmployeeRole };