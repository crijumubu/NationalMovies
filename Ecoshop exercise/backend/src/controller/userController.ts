import { Request, Response } from "express";
import userModel from "../model/userModel";

class userController{

    private model: userModel;

    constructor(){

        this.model = new userModel();
    }

    public getUser = (req: Request, res: Response) => {

        const { id } = req.params;

        this.model.getUser(id, (error: any, row: JSON) => {
            
            if (error) {

                return res.json({ error: true, message: 'Upss, something went!' });
            }            
            if (Object.keys(row).length != 0) {

                return res.json(row);
            } else {

                return res.status(404).json({ error: false, message: 'User not found!' });
            }
        });    
    }

    public signIn = (req: Request, res: Response) => {

        const { email, password } = req.body;

        this.model.signIn(email, password, (error: any, row: JSON) => {

            if (error) {

                console.log(error);
                return res.json({ error: true, message: 'Upss, something went!' });
            }            
            if (Object.keys(row).length != 0) {

                return res.json(row);
            } else {

                return res.status(404).json({ error: false, message: 'Incorrect user or password!' });
            }
        });
    }

    public signUp = (req: Request, res: Response) => {
        
        const { name, lastname, email, password } = req.body;

        this.model.signUp(name, lastname, email, password, (error: any, row: any) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, something went!' });
            }      
            
            if (row.inUse){

                return res.json({ error: false, message: 'Email already in use!' });
            }

            if (Object.keys(row).length != 0) {

                return res.json(row);
            } else {

                return res.status(404).json({ error: false, message: 'Incorrect user or password!' });
            }
        });
    }

}

export default userController;