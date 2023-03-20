import { Sequelize } from 'sequelize';

const db = new Sequelize('dbname', 'dbuser', 'dbpass', {
    host: 'localhost',
    dialect: 'mariadb',
    // logging: false,
});

export default db;