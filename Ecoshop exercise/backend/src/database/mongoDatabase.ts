import mongoose from "mongoose";

class mongo{

    public async connect(){
        await mongoose.connect(process.env.MongoDB!).then(() => {
            console.log("Connected to MongoDB Atlas");
        });
    }
}

export default mongo;