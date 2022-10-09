import { indexModel } from "./model/indexModel.js";
import { indexView } from "./view/indexView.js";
import { indexController } from "./controller/indexController.js";
const index = new indexController(new indexModel(), new indexView());
