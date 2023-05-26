import { Router } from "express";

//Read Controllers
import adminView from "../controllers/admin/adminController.js";
import apiView from "../controllers/admin/apiController.js";
import newView from "../controllers/admin/Read/new.js";
import favoriteView from  "../controllers/admin/Read/favorite.js";

const adminRouter = Router();

/*******************************************CRUD Page Admin*************************************************/

//Read dashboard's admin route

adminRouter.get("/admin", adminView);

// Read database

adminRouter.get("/api/v1/cupoftea", apiView);

adminRouter.get("/api/v1/cupoftea/new", newView);

adminRouter.get("/api/v1/cupoftea/favorite", favoriteView);

export default adminRouter;