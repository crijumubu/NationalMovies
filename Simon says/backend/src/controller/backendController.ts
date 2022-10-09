import { Request, Response } from "express";
import BackendModel from "../model/backendModel";

class BackendController {

    private model: BackendModel;

    constructor() {
        this.model = new BackendModel();
    }

    public index = (req: Request, res: Response) => {res.render('index.html')};

}

export default BackendController;