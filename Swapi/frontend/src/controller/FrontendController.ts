import { FrontendModel } from "../model/FrontendModel";
import { FrontendView } from "../view/FrontendView";

export class FrontendController {

    public model: FrontendModel;
    public view: FrontendView;

    constructor(model: FrontendModel, view: FrontendView) {
        this.model = model;
        this.view = view;
        this.model.getPeopleByID(1, this.view.fillPeopleTable);
    }
}