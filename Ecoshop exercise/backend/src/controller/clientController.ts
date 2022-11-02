import { Request, Response } from "express";

export default class ClientController {

    public index = (req: Request, res: Response) => {

        res.send("Welcome to Ecoshop backend!");
    }

    public error = (req: Request, res: Response) => {

        return res.status(404).json({ error: true, message: 'Path not found' });
    }
}