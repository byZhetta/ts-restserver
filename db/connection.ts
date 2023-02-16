import { Sequelize } from 'sequelize';


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mariadb',
    // logging: false,
});

export default db;