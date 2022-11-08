import {Request, Response} from "express";
import productModel from "../model/productModel";

class productController{

    private model: productModel;

    constructor(){

        this.model = new productModel();
    }

    public getTotalProducts = (req: Request, res: Response) => {

        this.model.getTotalPages((row: JSON) => {

            res.json(row);
        });

    }

    public getProducts = (req: Request, res: Response) => {
        
        const {page} = req.params;

        this.model.getProducts(parseInt(page), (row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            }else {

                return res.status(404).json({ error: false, message: 'No hay productos para esta página!' });
            }
        });
    }

    public getLimitPrice = (req: Request, res: Response) => {

        this.model.getLimitPrice((row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            }else {

                return res.status(404).json({ error: false, message: 'No hay productos en la base de datos!' });
            }
        });
    }

    public getTotalProductsByName = (req: Request, res: Response) => {

        const {name} = req.params;

        this.model.getTotalProductsByName(name, (row: JSON) => {

            res.json(row);
        });
    }

    public getProductsByName = (req: Request, res: Response) => {

        const {name, page} = req.params;
        
        this.model.getProductsByName(name, parseInt(page), (row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'No hay productos que coincidan con su búsqueda en esta página!' });
            }
        });
    }

    public getTotalProductsByPrice = (req: Request, res: Response) => {

        const {low, upper} = req.params;

        this.model.getTotalProductsByPrice(parseInt(low), parseInt(upper), (row: JSON) => {

            res.json(row);
        });
    }

    public getProductsByPrice = (req: Request, res: Response) => {

        const {low, upper, page} = req.params;

        this.model.getProductsByPrice(parseInt(low), parseInt(upper), parseInt(page), (row: JSON) => {

            if (Object.keys(row).length != 0){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'No se encuentraron productos en ese rango de precios en esta página!' });
            }
        });
    }

    public getProductById = (req: Request, res: Response) => {
        
        const {id} = req.params;

        this.model.getProductById(parseInt(id), (row: JSON) => {

            if (row != null){

                res.json(row);
            } else{

                return res.status(404).json({ error: false, message: 'No hubo coincidencias de productos con ese id!' });
            }
        });
    }

    public getProductImage = (req: Request, res: Response) => {
        
        const {id} = req.params;

        this.model.getProductImage(parseInt(id), (row: string) => {

            if (row != ''){

                res.download(row);
            } else{

                return res.status(404).json({ error: false, message: 'No hubo coincidencias de productos con ese id!' });
            }
        });
    }
}

export default productController;