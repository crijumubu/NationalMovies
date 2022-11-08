import mongo from "../database/mongo/mongo";

class productModel{

    private mongo : mongo;
    private itemsPerPage : number;

    constructor(){

        this.mongo = new mongo();
        this.itemsPerPage = parseInt(process.env.DATABASEPAGINATION || '12');
    }

    public getTotalPages = async (fn: Function) => {

        this.mongo.connect();

        const total = await this.mongo.model.count({});
        fn(Math.ceil(total / 12));

    }

    public getProducts = async (page: number, fn: Function) => {

        let initItem = (page - 1) * this.itemsPerPage;

        this.mongo.connect();

        const products = await this.mongo.model.find({}).skip( initItem ).limit( this.itemsPerPage );
        fn(products);
    }

    public getLimitPrice = async(fn: Function) => {

        this.mongo.connect();

        const limits = await this.mongo.model.aggregate([ 
            { "$group": { 
                "_id": null,
                "max": { "$max": "$price" }, 
                "min": { "$min": "$price" } 
            }}
        ]);

        fn(limits);   
    }

    public getTotalProductsByName = async (name: string, fn: Function) => {
        
        this.mongo.connect();

        const total = await this.mongo.model.count({ $text: { $search: name } });
        fn(Math.ceil(total / 12));
    }

    public getProductsByName = async (name: string, page: number, fn: Function) => {

        let initItem = (page - 1) * this.itemsPerPage;

        this.mongo.connect();
        
        const products = await this.mongo.model.find({ $text: { $search: name } }).skip( initItem ).limit( this.itemsPerPage );
        fn(products);
    }

    public getTotalProductsByPrice = async (low: number, upper: number, fn: Function) => {

        this.mongo.connect();

        const total = await this.mongo.model.count({'price' : {$gte : low, $lte : upper}});
        fn(Math.ceil(total / 12));
    }

    public getProductsByPrice = async (low: number, upper: number, page: number, fn: Function) => {

        let initItem = (page - 1) * this.itemsPerPage;

        this.mongo.connect();

        const products = await this.mongo.model.find({'price' : {$gte : low, $lte : upper}}).skip( initItem ).limit( this.itemsPerPage );
        fn(products);
    }

    public getProductById = async (id: number, fn: Function) => {
        
        this.mongo.connect();

        const product = await this.mongo.model.findOne({'id': id});
        fn(product);
    }

    public getProductImage = async (id: number, fn: Function) => {

        this.mongo.connect();
        
        const product = await this.mongo.model.findOne({'id': id});
        let imagePath = '';

        if (product != null){

            imagePath = `./src/resources/${id}.jpg`;
        }

        fn(imagePath);
    }
}

export default productModel;