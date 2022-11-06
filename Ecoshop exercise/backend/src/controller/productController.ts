import {Request, Response} from "express";
import productModel from "../model/productModel";

class productController{

    private model: productModel;

    constructor(){

        this.model = new productModel();
    }

    public getProducts = (req: Request, res: Response) => {
        
        const {page} = req.params;

        this.model.getProducts(parseInt(page), (row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            }else {

                return res.status(404).json({ error: false, message: 'There are no products for that page!' });
            }
        });
    }

    public getLimitPrice = (req: Request, res: Response) => {

        this.model.getLimitPrice((row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            }else {

                return res.status(404).json({ error: false, message: 'There are no products in database!' });
            }
        });
    }

    public getProductsByName = (req: Request, res: Response) => {

        const {name, page} = req.params;
        
        this.model.getProductsByName(name, parseInt(page), (row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'There are no products that match with your search in that page!' });
            }
        });
    }

    public getProductsByPrice = (req: Request, res: Response) => {

        const {low, upper, page} = req.params;

        this.model.getProductsByPrice(parseInt(low), parseInt(upper), parseInt(page), (row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'Products not found in that price range in that page' });
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