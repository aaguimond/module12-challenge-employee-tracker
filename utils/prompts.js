const inquirer = require('inquirer');

const mainMenuPrompt = () => {
    return inquirer.createPromptModule([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Exit'
            ]
        }
    ]);
};

module.exports = { mainMenuPrompt };