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
        SELECT * FROM USERS;`,
        [id.toString()]);

        this.mysqld.pool.query(statement, (error: any, rows: any) => {
            fn(error, rows);
        });
    }

}

export default userModel;