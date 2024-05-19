const inquirer = require('inquirer');

const mainMenuPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                "Update An Employee's Role",
                'View All Roles',
                'Add Role',
                'Update a Role',
                'View All Departments',
                'Add Department',
                'Update Department',
                'Exit'
            ]
        }
    ]);
};

const addEmployeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "Please enter the employee's first name."
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Please enter the employee's last name.",
        },
        {
            type: 'input',
            name: 'roleId',
            message: "Please enter the employee's rold ID."
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter the employee's manager ID if applicable.",
        }
    ]);
};

const updateEmployeeRolePrompt = (employees, roles) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Please select the employee whose role you would like to update.',
            choices: employees,
        },
        {
            type: 'list',
            name: 'roleId',
            message: 'Please select the new role for the employee.',
            choices: roles,
        }
    ]);
};

const addRolePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'Please enter the title of the role.'
        },
        {
            type: 'input',
            name: 'roleDepartmentId',
            message: 'Please enter the ID of the department the role is in.',
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'Please enter the salary for the role.',
            validate: input => !isNaN(input) || 'Salary must be a number.'
        }
    ]);
};

const updateRolePrompt = (roles) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'roleList',
            message: 'Please select the role you would like to update.',
            choices: roles,
        },
        {
            type: 'confirm',
            name: 'roleSalaryChoice',
            message: "Would you like to update this role's salary?",
            default: false,
        },
        {
            type: 'input',
            name: 'roleSalaryUpdate',
            message: "Please enter the role's new salary.",
            when: function(answers) {
                return answers.roleSalaryChoice;
            },
            validate: input => !isNaN(input) || 'Salary must be a number.'
        },
        {
            type: 'confirm',
            name: 'roleTitleChoice',
            message: "Would you like to update this role's title?",
            default: false,
        },
        {
            type: 'input',
            name: 'roleTitleUpdate',
            message: "Please enter the role's new title.",
            when: function(answers) {
                return answers.roleTitleChoice;
            },
        }
    ]);
};

const addDepartmentPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Please enter the name of the department.'
        }
    ]);
};

const updateDepartmentPrompt = (departments) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'departmentList',
            message: 'Please select the department you would like to update.',
            choices: departments,
        },
        {
            type: 'confirm',
            name: 'departmentNameChoice',
            message: "Would you like to update this department's name?",
            default: false,
        },
        {
            type: 'input',
            name: 'departmentNameUpdate',
            message: "Please enter the department's new name.",
            when: function(answers) {
                return answers.departmentNameChoice;
            },
        }
    ]);
};


module.exports = {
    mainMenuPrompt,
    addEmployeePrompt,
    updateEmployeeRolePrompt,
    addRolePrompt,
    updateRolePrompt,
    addDepartmentPrompt,
    updateDepartmentPrompt
};