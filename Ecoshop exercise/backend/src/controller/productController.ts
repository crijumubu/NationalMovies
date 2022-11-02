import {Request, Response} from "express";
import productModel from "../model/productModel";

class productController{

    private model: productModel;

    constructor(){

        this.model = new productModel();
    }

    public getProducts = (req: Request, res: Response) => {
        
        const {page} = req.params;

        this.model.getProducts(parseInt(page), (row: any) => {

            res.json(row);
        });
    }

    public getProductsByName = (req: Request, res: Response) => {

        const {name} = req.params;
        
        this.model.getProductsByName(name, (row: any) => {

            if (row){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'Product not found!' });
            }
        });
    }

    public getProductsByPrice = (req: Request, res: Response) => {

        const {low, upper} = req.params;

        this.model.getProductsByPrice(parseFloat(low), parseFloat(upper), (row: any) => {

            if (row){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'Products not found in that range!' });
            }
        });
    }

    public getProductById = (req: Request, res: Response) => {
        
        const {id} = req.params;

        this.model.getProductById(parseInt(id), (row: any) => {

            res.json(row);
        });
    }

    public getProductImage = (req: Request, res: Response) => {
        
        const {id} = req.params;

        this.model.getProductImage(parseInt(id), (row: any) => {

            if (row){

                res.download(row);
            } else{

                return res.status(404).json({ error: false, message: 'Product not found by id!' });
            }
        });
    }
}

export default productController;