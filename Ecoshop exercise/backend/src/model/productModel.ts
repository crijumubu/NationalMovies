import mongo from "../database/mongo/mongo";

class productModel{

    private mongo : mongo;

    constructor(){

        this.mongo = new mongo();
    }

    public getProducts = async (page: number, fn: Function) => {

        let low = ((page - 1) * 12) + 1;
        let upper = (page * 12);

        this.mongo.connect();

        const products = await this.mongo.model.find({'id' : {$gte : low, $lte : upper}});
        fn(products);
    }

    public getProductsByName = async (name: string, fn: Function) => {

        this.mongo.connect();
        
        const products = await this.mongo.model.find({ $text: { $search: name } });
        fn(products);
    }

    public getProductsByPrice = async (low: number, upper: number, fn:Function) => {

        this.mongo.connect();

        const products = await this.mongo.model.find({'price' : {$gte : low, $lte : upper}});
        fn(products);
    }

    public getProductById = async (id: number, fn: Function) => {
        
        this.mongo.connect();

        const products = await this.mongo.model.findOne({'id': id});
        fn(products);
    }

    public getProductImage = (id: number, fn: Function) => {

        this.mongo.connect();
        
        const product = `./src/resources/${id}.jpg`;
        fn(product);
    }
}

export default productModel;