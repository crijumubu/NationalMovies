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

    public getFavorites = (req: Request, res: Response) => {

        const { email } = req.params;

        this.model.getFavorites(email, (error: any, status: number, rows: any) => {

            if (error) {
                
                return res.json({ error: true, message: 'Upss, something went wrong!' });
            }
            if (status == 1) {

                return res.json(rows);
            }
            else if (status == 0) {

                return res.json({ error: false, message: 'There are no favorites products yet!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, something went wrong. The are no users with that email!' });
            }
        });
    }

    public addFavorite = (req: Request, res: Response) => {

        const { email, id_product } = req.body;

        this.model.addFavorite(email, id_product, (error: any, status: number) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, something went wrong. The product may not exist!' });
            }       
            if (status == 1){

                return res.json({ error: false, message: 'Product successfully added to favorites list!' });
            }
            else if (status == 0){

                return res.json({ error: false, message: 'Product already add to favorites list!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, something went wrong. The are no users with that email!' });
            }
        });
    }

    public removeFavorite = (req: Request, res: Response) => {

        const { email, id_product } = req.body;

        this.model.removeFavorite(email, id_product, (error: any, status: number) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, something went wrong!' });
            }  
            if (status == 1){

                return res.json({ error: false, message: 'Product successfully removed from favorites list!' });
            }
            else if (status == 0){

                return res.json({ error: false, message: 'The product you are trying to remove is not marked as a favorite!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, something went wrong. The are no users with that email!' });
            }

        });

    }
}

export default userController;