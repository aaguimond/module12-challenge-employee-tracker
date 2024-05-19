const db = require('../config/db');

const getEmployees = async () => {
    try {
        const res = await db.query('SELECT * FROM employee');
        return res.rows;
    } catch (err) {
        console.error('Error getting employees:', err);
        throw err;
    }
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
    try {
        managerId = managerId === '' ? null : managerId;
        
        await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
        [firstName, lastName, roleId, managerId]);
    } catch (err) {
        console.error('Error adding employee:', err);
        throw err;
    }
};

const updateEmployeeRole = async (roleId, employeeId) => {
    try {
        await db.query('UPDATE employee SET role_id = $1 WHERE id = $2',
        [roleId, employeeId]);
    } catch (err) {
        console.error('Error updating employee:', err);
        throw err;
    }
};

module.exports = { getEmployees, addEmployee, updateEmployeeRole };