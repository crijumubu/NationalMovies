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

                return res.json({ error: true, message: 'Upss, something went wrong!' });
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

        this.model.signIn(email, password, (error: any, status: number, row: any) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, something went wrong!' });
            }            
            if (status == 1) {

                return res.json({ message: 'Login succesfull!', row });
            } 
            else if (status == 0){

                return res.json({ message: 'Incorrect password!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Couldn\'t found your account!' });
            }
        });
    }

    public signUp = (req: Request, res: Response) => {
        
        const { name, lastname, email, password } = req.body;

        this.model.signUp(name, lastname, email, password, (error: any, status: number) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, something went wrong!' });
            }       
            if (status == 1){

                return res.json({ error: false, message: 'Successfull sign up!' });
            }
            else {

                return res.json({ error: false, message: 'Email already in use!' });
            }
        });
    }
}

export default userController;