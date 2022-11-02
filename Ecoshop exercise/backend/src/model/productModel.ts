import mongo from "../database/mongo/mongo";
import IProduct from "src/database/mongo/interface/IProduct";

class productModel{

    private mongo : mongo;

    constructor(){

        this.mongo = new mongo();
    }

    public getProducts = async (page: number, fn: Function) => {
        
        this.mongo.connect();

        let low = ((page - 1) * 12) + 1;
        let upper = (page * 12);

        const products = await this.mongo.model.find({'id' : {$gte : low, $lte : upper}});
        fn(products);
    }

    public getProductById = async (id: number, fn: Function) => {
        
        this.mongo.connect();

        const products = await this.mongo.model.find({'id': id});
        fn(products);
    }

    public getProductByName = async (name: string, fn: Function) => {

        this.mongo.connect();
        
        const products = await this.mongo.model.find({ $text: { $search: name } });
        fn(products);
    }

    public getProductByPrice = async (low: number, upper: number, fn:Function) => {

        this.mongo.connect();

        const products = await this.mongo.model.find({'price' : {$gte : low, $lte : upper}});
        fn(products);
    }

    public getProductImage = async (id: number, fn: Function) => {

        this.mongo.connect();

        const product = await this.mongo.model.findOne({'id' : id});
        fn(product['image']);
    }
}

export default productModel;