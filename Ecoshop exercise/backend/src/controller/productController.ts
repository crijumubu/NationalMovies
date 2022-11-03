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

            if (Object.keys(row).length != 0){

                res.json(row);
            }else {

                return res.status(404).json({ error: false, message: 'There are no products for that page!' });
            }
        });
    }

    public getProductsByName = (req: Request, res: Response) => {

        const {name} = req.params;
        
        this.model.getProductsByName(name, (row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'There are no products that match with your search!' });
            }
        });
    }

    public getProductsByPrice = (req: Request, res: Response) => {

        const {low, upper} = req.params;

        this.model.getProductsByPrice(parseInt(low), parseInt(upper), (row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'Products not found in that price range!' });
            }
        });
    }

    public getProductById = (req: Request, res: Response) => {
        
        const {id} = req.params;

        this.model.getProductById(parseInt(id), (row: JSON) => {

            if (row != null){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'Product not found by id!' });
            }
        });
    }

    public getProductImage = (req: Request, res: Response) => {
        
        const {id} = req.params;

        this.model.getProductImage(parseInt(id), (row: string) => {

            if (row != ''){

                res.download(row);
            } else{

                return res.status(404).json({ error: false, message: 'Product not found by id!' });
            }
        });
    }
}

export default productController;