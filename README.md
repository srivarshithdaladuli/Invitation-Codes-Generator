# Invitation Codes Generator using Node.js and MySQL

This project is a simple Invitation Codes Generator implemented in Node.js with MySQL as the database. It allows you to generate unique invitation codes, store them in a MySQL database, and validate the codes.

## Features

- Generate random and unique invitation codes.
- Store generated codes in a MySQL database.
- Validate invitation codes for authenticity.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MySQL installed and running
- MySQL database created for this project

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/srivarshithdaladuli/Invitation-Codes-Generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Invitation-Codes-Generator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Configure your MySQL database connection by editing the `app.js` file.

5. Run the database migration to create the necessary tables:

    ```bash
    npm run migrate
    ```

6. Run the following command to start the development server:

    ```bash
    node app.js
    ```  

## Configuration

You can customize the MySQL database connection settings in the `app.js` file.

- host: 'localhost'
- user: 'root'
- password: 'Root'
- database: ' '  

## Contributing

Feel free to contribute to this project by opening issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/srivarshithdaladuli/Invitation-Codes-Generator/blob/main/LICENSE) file for details.

## Acknowledgments

- Thanks to [Node.js](https://nodejs.org/) and [MySQL](https://www.mysql.com/) for their awesome tools.

---

