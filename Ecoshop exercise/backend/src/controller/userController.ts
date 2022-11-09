import { Request, Response } from "express";
import userModel from "../model/userModel";
import productModel from "../model/productModel";

class userController{

    private usermodel: userModel;
    private productmodel: productModel;

    constructor(){

        this.usermodel = new userModel();
        this.productmodel = new productModel();
    }

    public getUser = (req: Request, res: Response) => {

        const { id } = req.params;

        this.usermodel.getUser(id, (error: any, row: JSON) => {
            
            if (error) {

                return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
            }            
            if (Object.keys(row).length != 0) {

                return res.json(row);
            } else {

                return res.status(404).json({ error: false, message: 'El usuario no fue encontrado!' });
            }
        });    
    }

    public signIn = (req: Request, res: Response) => {

        const { email, password } = req.body;

        this.usermodel.signIn(email, password, (error: any, status: number, row: any) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
            }            
            if (status == 1) {

                return res.json({ message: 'Inicio de sesión exitóso!', row });
            } 
            else if (status == 0){

                return res.json({ message: 'COntraseña incorrecta!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, no pudimos encontrar tu cuenta!' });
            }
        });
    }

    public signUp = (req: Request, res: Response) => {
        
        const { name, lastname, email, password } = req.body;

        this.usermodel.signUp(name, lastname, email, password, (error: any, status: number) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
            }       
            if (status == 1){

                return res.json({ error: false, message: 'Registro exitóso!' });
            }
            else {

                return res.json({ error: false, message: 'El correo ya se encuentra en uso!' });
            }
        });
    }

    public getTotalFavorites = (req: Request, res: Response) => {

        const { email } = req.params;

        this.usermodel.getTotalFavorites(email, (error: any, status: number, rows: any) => {

            if (error) {
                
                return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
            }
            if (status == 1) {

                return res.json(rows);
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No existe un usuario con ese correo!' });
            }
        });
    }

    public getFavorites = (req: Request, res: Response) => {

        const { page, email } = req.params;

        this.usermodel.getFavorites(parseInt(page), email, async (error: any, status: number, rows: any) => {

            if (error) {
                
                return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
            }
            if (status == 1) {

                let favoritesJson: any[] = []

                for (let i=0; i<rows.length; i++){

                    let id = rows[i].Id_product;

                    await this.productmodel.getProductById(id, (row: JSON) => {

                        favoritesJson.push(row);

                    });
                }

                return res.json(favoritesJson);
            }
            else if (status == 0) {

                return res.json({ error: false, message: 'No se encontraron favoritos en esta página!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No existe un usuario con ese correo!' });
            }
        });
    }

    public addFavorite = (req: Request, res: Response) => {

        const { email, id_product } = req.body;

        this.usermodel.addFavorite(email, id_product, (error: any, status: number) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, algo ha salido mal. El producto puede que no exista!' });
            }       
            if (status == 1){

                return res.json({ error: false, message: 'El producto fue agregado correctamente a la lista de favoritos!' });
            }
            else if (status == 0){

                return res.json({ error: false, message: 'El producto ya se encuentra agregado a la lista de favoritos!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No existe un usuario con ese correo!' });
            }
        });
    }

    public removeFavorite = (req: Request, res: Response) => {

        const { email, id_product } = req.body;

        this.usermodel.removeFavorite(email, id_product, (error: any, status: number) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
            }  
            if (status == 1){

                return res.json({ error: false, message: 'El producto fue eliminado correctamente de la lista de favoritos!' });
            }
            else if (status == 0){

                return res.json({ error: false, message: 'El producto que está intentando eliminar no se encuentra marcado como favorito!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No existe un usuario con ese correo!' });
            }
        });
    }

    public getShoppingCart = (req: Request, res: Response) => {

        const { email } = req.params;

        this.usermodel.getShoppingCart(email, async (error: any, status: number, rows: any, totalRow: any) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
            }       
            if (status == 1){

                let favoritesJson: any[] = []

                for (let i=0; i<rows.length; i++){

                    let id = rows[i].Id_product;
                    let units = rows[i].Units;

                    await this.productmodel.getProductById(id, (row: any) => {

                        row['units'] = units;

                        favoritesJson.push([row, {"units": units}]);

                    });
                }

                favoritesJson.push([{'subtotal': totalRow[0].SUBTOTAL, 'total': totalRow[0].TOTAL}])

                return res.json(favoritesJson);
            }
            if (status == 0){
                
                return res.json({error: false, message: 'No se encontraron productos en el carrito!'})
                
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No hay usuarios o carritos de compras asociados con ese correo electrónico!' });
            }
        });

    }

    public addToCart = async (req: Request, res: Response) => {

        const { email, id_product } = req.body;

        const productPrice = await this.productmodel.GetProductPrice(id_product);

        this.usermodel.addToCart(email, id_product, productPrice, (error: any, status: number) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, algo ha salido mal. El producto puede que ya se encuentre agregado al carrito!' });
            }       
            if (status == 1){

                return res.json({ error: false, message: 'El producto fue agregado correctamente al carrito de compras!' });
            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No hay usuarios o carritos de compras asociados con ese correo electrónico!' });
            }
        });
    }

    public removeToCart = async (req: Request, res: Response) => {

        const { email, id_product } = req.body;

        const productPrice = await this.productmodel.GetProductPrice(id_product);

        this.usermodel.removeToCart(email, id_product, "-" + productPrice, (error: any, status: number) => {

            if (error) {

                return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
            }       
            if (status == 1){

                return res.json({ error: false, message: 'El producto fue removido correctamente del carrito de compras!' });
            }
            else if (status == 0){

                return res.json({ error: false, message: 'El producto que está intentando eliminar no se encuentra en el carrito de compras!' });

            }
            else {

                return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No hay usuarios o carritos de compras asociados con ese correo electrónico!' });
            }
        });

    }
}

export default userController;