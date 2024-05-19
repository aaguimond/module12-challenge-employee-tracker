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

const init = async () => {
    let exit = false;
    while (!exit) {
        const { menu } = await mainMenuPrompt();

        switch (menu) {
            case 'View All Employees':
                const employees = await getEmployees();
                console.table(employees);
                break;

            case 'Add Employee':
                const employeeDetails = await addEmployeePrompt();
                await addEmployee(
                    employeeDetails.firstName,
                    employeeDetails.lastName,
                    employeeDetails.roleId,
                    employeeDetails.managerId === '' ? null : employeeDetails.managerId
                );
                console.log('Employee added successfully.');
                break;

            case "Update An Employee's Role":
                const allEmployees = await getEmployees();
                const allRoles = await getRoles();
                const employeeChoices = allEmployees.map(employee => ({
                    name: `${employee.first_name} ${employee.last_name}`, value: employee.id
                }));
                const roleChoices = allRoles.map(role => ({
                    name: role.title, value: role.id
                }));
                const { employeeId, roleId } = await updateEmployeeRolePrompt(employeeChoices, roleChoices);
                await updateEmployeeRole(employeeId, roleId);
                console.log("Employee's role updated successfully.");
                break;

            case 'View All Roles':
                const roles = await getRoles();
                console.table(roles);
                break;

            case 'Add Role':
                const roleDetails = await addRolePrompt();
                await addRole(roleDetails.roleName, roleDetails.roleSalary, roleDetails.roleDepartmentId);
                console.log('Role added successfully.');
                break;

            case 'Update a Role':
                const allRolesToUpdate = await getRoles();
                const roleChoicesForUpdate = allRolesToUpdate.map(role => ({
                    name: role.title, value: role.id
                }));
                const {
                    roleList,
                    roleSalaryChoice,
                    roleSalaryUpdate,
                    roleTitleChoice,
                    roleTitleUpdate
                } = await updateRolePrompt(roleChoicesForUpdate);
                await updateRole(roleList, roleTitleUpdate, roleSalaryUpdate);
                console.log('Role updated successfully.');
                break;

            case 'View All Departments':
                const departments = await getDepartments();
                console.table(departments);
                break;

            case 'Add Department':
                const { departmentName } = await addDepartmentPrompt();
                await addDepartment(departmentName);
                console.log('Department added successfully.');
                break;

            case 'Update Department':
                const allDepartments = await getDepartments();
                const departmentChoices = allDepartments.map(department => ({
                    name: department.name, value: department.id
                }));
                const {
                    departmentList,
                    departmentNameChoice,
                    departmentNameUpdate
                } = await updateDepartmentPrompt(departmentChoices);
                if (departmentNameChoice) {
                    await updateDepartment(departmentList, departmentNameUpdate);
                    console.log('Department updated successfully.')
                }
                break;

            case 'Exit':
                exit = true;
                db.end();
                break;
        }
    }
};

init();