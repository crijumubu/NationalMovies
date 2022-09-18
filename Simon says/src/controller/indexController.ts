import { indexModel } from "../model/indexModel";
import { indexView } from "../view/indexView";

export class IndexController {

    public model: indexModel;
    public view: indexView;

    constructor(model: indexModel, view: indexView) {
        this.model = model;
        this.view = view;
    }

}