DROP DATABASE IF EXISTS employee_management;
CREATE DATABASE employee_management;

\c employee_management;

\i sql/tables.sql;
\i sql/seeds.sql;