import mongoose from "mongoose";
import product from "./schema/productSchema";

class mongo{

    private uri : string;
    public model: any;

    constructor(){

        this.uri = `${process.env.MONGODB}`;
        this.model = product;
    }

    public connect = () => {

        mongoose.connect(this.uri)
        .then(() => {

            console.log("Connected to MongoDB Atlas");
        })
        .catch(error => {

            console.error('Error connecting to MongoDB Atlas: ', error);
            return process.exit(1);
        });
    }
}

export default mongo;