import { Request, Response } from "express";
import BackendModel from "../model/backendModel";

class BackendController {

    private model: BackendModel;

    constructor() {
        this.model = new BackendModel();
    }

    public score = (req: Request, res: Response) => {res.send(this.model.score)};

    public newScore = (req: Request, res: Response) => {
        
        const score : {name: string, level: string, score: number} = req.body;
        this.model.newScore(score);

        res.send('Success!');

    };
}

export default BackendController;