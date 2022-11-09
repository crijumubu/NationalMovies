import mysql, { Pool } from "mysql";

class mysqld {

    public pool: Pool;

    constructor(){

        this.pool = mysql.createPool({

            connectionLimit: parseInt(process.env.MYSQLCONNECTIONLIMIT || '20'),
            database: process.env.MYSQLNAME,
            user: process.env.MYSQLUSER,
            host: process.env.MYSQL,
            password: process.env.MYSQLPASSWORD,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }

    public connection = async () => {

        await this.pool.getConnection((error, connection) => {

            if(error) throw error;
            connection.release();
            console.log('Connected to Mysql');
        });
    }

    public statement = (statement: string, data: string[]) => {

        return mysql.format(statement, data);
    }
}

export default mysqld;