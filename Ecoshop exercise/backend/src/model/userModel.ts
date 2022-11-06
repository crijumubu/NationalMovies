import Mysqld from "../database/mysql/mysql";
import bcrypt from 'bcrypt';

class userModel{

    private mysqld: Mysqld;

    constructor(){

        this.mysqld = new Mysqld();
    }

    public getUser = (id: string, fn: Function) => {

        this.mysqld.connection();

        const statement = this.mysqld.statement(`
        SELECT USER_NAME AS Name, USER_LASTNAME AS Lastname, USER_EMAIL AS Email FROM USERS WHERE ID_USER = ?;`,
        [id]);

        this.mysqld.pool.query(statement, (error: any, rows: JSON) => {

            fn(error, rows);
        });
    }

    public signIn = async (email: string, password: string, fn: Function) => {

        this.mysqld.connection();

        const statement = this.mysqld.statement(`
        SELECT USER_NAME AS Name, USER_LASTNAME AS Lastname, USER_PASSWORD AS Password FROM USERS WHERE USER_EMAIL = ?;`,
        [email]);

        this.mysqld.pool.query(statement, async (error: any, rows: any) => {

            console.log(rows)

            if (rows.length > 0){

                const user = rows[0];
                const validPassword = await this.validatePassword(password, user.Password);

                if (validPassword){

                    fn(error, 1, { name: user.Name, lastname: user.Lastname, email: email });
                }else{

                    fn(error, 0);
                }
            }else{

                fn(error, -1);
            }
        });
    }

    public signUp = (name: string, lastname: string, email: string, password: string, fn: Function) => {

        this.mysqld.connection();

        let statement = this.mysqld.statement(`
        SELECT COUNT(*) AS Count FROM USERS WHERE USER_EMAIL = ?`,
        [email]);

        this.mysqld.pool.query(statement, async (error: any, rows: any) => {

            if (rows[0].Count <= 0){

                const encryptPassword = await this.encryptPassword(password);

                statement = this.mysqld.statement(`
                INSERT INTO USERS (USER_NAME, USER_LASTNAME, USER_EMAIL, USER_PASSWORD)
                VALUES (?, ?, ?, ?);`,
                [name, lastname, email, encryptPassword]);
        
                this.mysqld.pool.query(statement, (error: any) => {
        
                    fn(error, 1);
                });
            }else{

                fn(false, 0);
            }
        });
    }

    public encryptPassword = async (password: string) => {

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        return hash;
    }

    public validatePassword = async (password: string, hash: string) => {

        const validation = await bcrypt.compare(password, hash);
        return validation;
    }
}

export default userModel;