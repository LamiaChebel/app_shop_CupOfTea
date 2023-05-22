import { Router } from "express";

import teasView, { teaDetailView } from "../controllers/admin/Read/teas.js";
import createTea from "../controllers/admin/Create/tea.js";
import updateTea from "../controllers/admin/Update/tea.js";
import removeTea from "../controllers/admin/Delete/tea.js";

const teaRouter = Router();

/*********************************************CRUD teas****************************************************/

//Read
teaRouter.get("/api/v1/cupoftea/teas", teasView);
teaRouter.get("/api/v1/cupoftea/teas/:id", teaDetailView);


//Create
teaRouter.post("/api/v1/cupoftea/teas", createTea);

//Update
teaRouter.put("/api/v1/cupoftea/teas/:id", updateTea);

//Delete
teaRouter.delete("/api/v1/cupoftea/teas/:id", removeTea);

export default teaRouter;