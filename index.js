const db = require('./config/db');
const {
    mainMenuPrompt,
    addEmployeePrompt,
    updateEmployeeRolePrompt,
    addRolePrompt,
    updateRolePrompt,
    addDepartmentPrompt,
    updateDepartmentPrompt
} = require('./utils/prompts');
const { getDepartments, addDepartment, updateDepartment } = require('./controllers/departmentController');
const { getEmployees, addEmployee, updateEmployeeRole } = require('./controllers/employeeController');
const { getRoles, addRole, updateRole } = require('./controllers/roleController');

