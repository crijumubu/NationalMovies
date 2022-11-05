import { Request, Response } from "express";
import userModel from "../model/userModel";

class userController{

    private model: userModel;

    constructor(){

        this.model = new userModel();
    }

    public getUser = (req: Request, res: Response) => {

        const { id } = req.params;

        this.model.getUser(id, (error: any, row: any) => {
            
            if (error) {

                console.error(error);
                return res.json({ error: true, message: 'e101' });
            }            
            if (row) {

                return res.json(row);
            } else {
                
                return res.status(404).json({ error: false, message: 'User not found' });
            }
        });
        
    }

}

export default userController;