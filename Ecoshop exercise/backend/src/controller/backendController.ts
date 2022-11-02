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

    public async getProducts(req: Request, res: Response){
        
        const products = await productsModel.find();
        res.json(products);
    }

    public async getProductByTitle(req: Request, res: Response){

        const {title} = req.params;
        
        const products = await productsModel.find({ $text: { $search: title } });
        res.json(products);

    }

    public async getProductByPrice(req: Request, res: Response){

        const {low, upper} = req.params;

        const products = await productsModel.find({'price' : {$gte : low, $lte : upper}});
        res.json(products);

    }

    public async getImage(req: Request, res: Response){
        
        const {id} = req.params;

        const product = await productsModel.findOne({'id' : id});
        res.json(product['image']);
    }

    public async postProduct(req: Request, res: Response){

        const product = productsModel(req.body);
        product.save().then((data: any) => res.json(data));
    }
}

export default Controller;