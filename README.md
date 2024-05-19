# Employee Tracker

![License](https://img.shields.io/badge/license-ISC-blue.svg)

### A command-line application using Inquirer, PostgreSQL, and Node.js to track employee information using a database

## Table of Contents

[Project Status](#project-status)

[Media of Application](#media-for-application)

[Purpose](#purpose)

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Project Status

**Completed**

[GitHub Repository](https://github.com/aaguimond/module12-challenge-employee-tracker)

[Live Employee Tracker](N/A)

## Media for Application

![placeholder](placeholder)

[placeholder](placeholder)


## Purpose

To allow businesses to create and store employee, department, and salary data within a database.

## Installation

Users can clone this repository and install npm or Node.js. After successfully doing so, users simply need to type "npm i" in a terminal from the root folder of this project. A live server is also necessary to enable user interface with the database. For this project, I used PostgreSQL.

## Usage

After installing the application by following the above instructions, make sure that the PostgreSQL server is running. In a terminal started from the root folder of the project directory, type your postgres login credentials "psql -U [your_username]". The terminal should prompt you to type in your password. After logging into postgres, type "\i sql/schema.sql" to initialize the database. You can then quit out of the postgres shell by typing "\q". The final step to initializing the project is to type "node index.js" within the terminal. You will then be prompted to chose a method of interacting with the database.

## Credits

* Node.js
* PostgreSQL
* Inquirer
* Dotenv
* npm

## License

This project is licensed under the [ISC](https://opensource.org/licenses/ISC) license.

## Contributing

Please feel free to use the code under the limits of the [ISC license](#license).

## Tests

N/A

## Questions

Please reach out to me with any questions:

- Github: [aaguimond](https://github.com/aaguimond)
- Email: aidanguimond2024@u.northwestern.edu