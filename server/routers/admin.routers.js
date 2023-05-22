import { Router } from "express";

//Read Controllers
import adminView from "../controllers/admin/adminController.js";
import apiView from "../controllers/admin/apiController.js";

const adminRouter = Router();

/*******************************************CRUD Page Admin*************************************************/

//Read dashboard's admin route

adminRouter.get("/admin", adminView);

// Read database

adminRouter.get("/api/v1/cupoftea", apiView);


export default adminRouter;