INSERT INTO department (name) VALUES ('Engineering'), ('Finance'), ('Legal'), ('Sales'), ('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Senior Software Engineer', 100000, 1),
('Chief Financial Officer', 150000, 2),
('Financial Analyst', 75000, 2),
('Lawyer', 125000, 3),
('Paralegal', 55000, 3),
('Sales Representative', 52500, 4),
('Human Resources Manager', 70000, 5),
('Human Resources Associate', 57500, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Amir', 'Johnson', 1, NULL),
('Michelle', 'Dobson', 1, NULL),
('Louise', 'Samuels', 2, NULL),
('Nick', 'Saban', 3, NULL),
('Nicole', 'Tamberson', 4, NULL),
('Talcum', 'Crowder', 4, NULL),
('George', 'Coleman', 5, NULL),
('Tali', 'Berger', 5, NULL),
('Peter', 'Nelson', 6, NULL),
('Deborah', 'Donaldson', 6, NULL),
('Janette', 'Brown', 7, NULL),
('Rudy', 'Michaels', 7, NULL),
('Allie', 'King', 8, NULL),
('Everette', 'Cooper', 9, NULL),
('Howard', 'Bornstein', 9, NULL);