import mysql from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_USER, DB_PWD } from './const.js';

export const pool = mysql.createPool({
    host     : DB_HOST,
    database : DB_NAME,
    user     : DB_USER,
    password : DB_PWD,
});

pool.getConnection().then(res => console.log(`Tu es connecté sur la base de données ${res.config.database}.`))
                    .catch(error => console.log(`Can't connect to the database`, error));