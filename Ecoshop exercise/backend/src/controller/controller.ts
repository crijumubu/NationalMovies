import {Request, Response} from "express";
import Model from "../model/model";

class Controller{

    private model: Model;

    constructor(){

        this.model = new Model();
    }

    public index(req: Request, res: Response){
        
        res.send("Welcome to Ecoshop backend!");
    }
}

export default Controller;