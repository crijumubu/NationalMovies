import Mysqld from "../database/mysql/mysql";

class userModel{

    private mysqld: Mysqld;

    constructor(){

        this.mysqld = new Mysqld();
    }

    public limit = (start: number, step: number): number[] => {

        return this.mysqld.limit(start, step);
    }

    public getUser = (id: string, fn: Function) => {

        this.mysqld.connection();

        const statement = this.mysqld.statement(`
        SELECT * FROM USERS WHERE ID_USER = ?;`,
        [id]);

        this.mysqld.pool.query(statement, (error: any, rows: JSON) => {

            fn(error, rows);
        });
    }

    public signIn = (email: string, password: string, fn: Function) => {

        this.mysqld.connection();

        const statement = this.mysqld.statement(`
        SELECT USER_NAME FROM USERS WHERE USER_EMAIL = ? AND USER_PASSWORD = ?;`,
        [email, password]);

        this.mysqld.pool.query(statement, (error: any, rows: JSON) => {

            fn(error, rows);
        });

    }

    public signUp = (name: string, lastname: string, email: string, password: string, fn: Function) => {

        this.mysqld.connection();

        let statement = this.mysqld.statement(`
        SELECT COUNT(*) as cnt FROM USERS WHERE USER_EMAIL = ?`,
        [email]);

        this.mysqld.pool.query(statement, (error: any, rows: any) => {

            if (rows[0].cnt <= 0){

                statement = this.mysqld.statement(`
                INSERT INTO USERS (USER_NAME, USER_LASTNAME, USER_EMAIL, USER_PASSWORD)
                VALUES (?, ?, ?, ?);`,
                [name, lastname, email, password]);
        
                this.mysqld.pool.query(statement, (error: any, rows: JSON) => {
        
                    fn(error, rows);
                });
            }else{

                fn(false, {inUse: true});
            }
        });
    }

}

export default userModel;