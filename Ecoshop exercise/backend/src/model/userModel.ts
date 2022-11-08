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

    public encryptPassword = async (password: string) => {

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        return hash;
    }

    public validatePassword = async (password: string, hash: string) => {

        const validation = await bcrypt.compare(password, hash);
        return validation;
    }

    public signIn = async (email: string, password: string, fn: Function) => {

        this.mysqld.connection();

        const statement = this.mysqld.statement(`
        SELECT USER_NAME AS Name, USER_LASTNAME AS Lastname, USER_PASSWORD AS Password FROM USERS WHERE USER_EMAIL = ?;`,
        [email]);

        this.mysqld.pool.query(statement, async (error: any, rows: any) => {

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
        SELECT COUNT(*) AS Count FROM USERS WHERE USER_EMAIL = ?;`,
        [email]);

        this.mysqld.pool.query(statement, async (error: any, rows: any) => {

            if (rows[0].Count == 0){

                const encryptPassword = await this.encryptPassword(password);

                statement = this.mysqld.statement(`
                INSERT INTO USERS (USER_NAME, USER_LASTNAME, USER_EMAIL, USER_PASSWORD) VALUES (?, ?, ?, ?);`,
                [name, lastname, email, encryptPassword]);
        
                this.mysqld.pool.query(statement, (error) => {
                    
                    statement = this.mysqld.statement(`
                    INSERT INTO SHOPPING_CART (SUBTOTAL, TOTAL, USERS_ID_USER) SELECT 0, 0, ID_USER FROM USERS WHERE USER_EMAIL = ?;`,
                    [email]);

                    this.mysqld.pool.query(statement, (error: any) => {

                        fn(error, 1);
                    });
                });
            }else{

                fn(error, 0);
            }
        });
    }

    public getFavorites = (page: number, email: string, fn: Function) => {

        let initItem = (page - 1) * parseInt(process.env.DATABASEPAGINATION || '12');
        let finalItem = (initItem + 12);

        this.mysqld.connection();

        let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`,
        [email]);

        this.mysqld.pool.query(statement, (error: any, rows: any) => {

            if (rows.length == 1){

                const id_user = rows[0].Id;

                statement = this.mysqld.statement(`
                SELECT PRODUCT_ID_PRODUCT AS Id_product FROM FAVORITES WHERE USER_ID_USER = ? LIMIT ${initItem}, ${finalItem};`,
                [id_user]);

                this.mysqld.pool.query(statement, (error: any, rows: any) => {

                    if (rows.length > 0) {

                        fn(error, 1, rows);
                    }else{

                        fn(error, 0);
                    }
                });
            }else{

                fn(error, -1);
            }
        });
    }

    public addFavorite = (email: string, id_product: number, fn: Function) => {

        this.mysqld.connection();

        let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`,
        [email]);

        this.mysqld.pool.query(statement, (error: any, rows: any) => {

            if (rows.length == 1){

                const id_user = rows[0].Id;

                statement = this.mysqld.statement(`
                SELECT COUNT(*) AS Count FROM FAVORITES WHERE USER_ID_USER = ? AND PRODUCT_ID_PRODUCT = ?;`,
                [id_user, id_product]);

                this.mysqld.pool.query(statement, (error: any, rows: any) => {

                    if (rows[0].Count == 0){

                        statement = this.mysqld.statement(`
                        INSERT INTO FAVORITES (USER_ID_USER, PRODUCT_ID_PRODUCT) VALUES (?, ?);`,
                        [id_user, id_product]);
        
                        this.mysqld.pool.query(statement, (error: any) => {
        
                            fn(error, 1);
                        });
                    }else{
        
                        fn(error, 0);
                    }
                });
            }else{

                fn(error, -1);
            }
        }); 
    }

    public removeFavorite = (email: string, id_product: string, fn: Function) => {

        this.mysqld.connection();

        let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`,
        [email]);

        this.mysqld.pool.query(statement, (error: any, rows: any) => {

            if (rows.length == 1){

                const id_user = rows[0].Id;

                statement = this.mysqld.statement(`
                SELECT COUNT(*) AS Count FROM FAVORITES WHERE USER_ID_USER = ? AND PRODUCT_ID_PRODUCT = ?;`,
                [id_user, id_product]);

                this.mysqld.pool.query(statement, (error: any, rows: any) => {
                    
                    if (rows[0].Count == 1){

                        statement = this.mysqld.statement(`
                        DELETE FROM FAVORITES WHERE USER_ID_USER = ? AND PRODUCT_ID_PRODUCT = ?;`,
                        [id_user, id_product]);

                        this.mysqld.pool.query(statement, (error: any) => {

                            fn(error, 1);
                        });

                    }else{
        
                        fn(error, 0);
                    }
                });
            }else{

                fn(error, -1);
            }
        });
    }

    public addToCart = (email: string, id_product: number, fn: Function) => {

        this.mysqld.connection();

        let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`,
        [email]);

        this.mysqld.pool.query(statement, (error: any, rows: any) => {

            if (rows.length == 1){

                const id_user = rows[0].Id;

                statement = this.mysqld.statement(`
                SELECT ID_CART AS Id FROM SHOPPING_CART WHERE USERS_ID_USER = ?;`,
                [id_user]);
        
                this.mysqld.pool.query(statement, (error: any, row: any) => {

                    console.log(id_user);

                    if (row.length == 1){

                        const id_cart = row[0].Id;

                        statement = this.mysqld.statement(`
                        INSERT INTO SHOPPING_CART_has_PRODUCTS (SHOPPING_CART_ID_CART, PRODUCTS_ID_PRODUCT) VALUES (?, ?);`,
                        [id_cart, id_product]);

                        this.mysqld.pool.query(statement, (error: any) => {

                            fn(error, 1);
                        });

                    }else{

                        fn(error, -1);
                    }
                });
            }else{

                fn(error, -1);
            }
        }); 

    }

    public removeToCart = () => {



    }
}

export default userModel;