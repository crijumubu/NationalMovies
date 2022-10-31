import {Request, Response} from "express";
import backendModel from "../model/backendModel";
const productsModel = require("../model/productModel");

class Controller{

    private model: backendModel;

    constructor(){

        this.model = new backendModel();
    }

    public index(req: Request, res: Response){
        
        res.send("Welcome to Ecoshop backend!");
    }

    public async postProduct(req: Request, res: Response){

        const product = productsModel(req.body);
        product.save().then((data: any) => res.json(data));
    }

    public async getProducts(req: Request, res: Response){
        
        const data = await productsModel.find();
        res.json(data);
    }
}

export default Controller;