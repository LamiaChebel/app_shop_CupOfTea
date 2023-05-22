import { Router } from "express";

import categoriesView , { categoryDetailView }from "../controllers/admin/Read/categories.js";
import createCategory from "../controllers/admin/Create/category.js";
import updateCategory from "../controllers/admin/Update/category.js";
import removeCategory from "../controllers/admin/Delete/category.js";


const categoryRouter = Router();


/*********************************************CRUD categories****************************************************/
 
//Read
categoryRouter.get("/api/v1/cupoftea/categories", categoriesView);
categoryRouter.get("/api/v1/cupoftea/categories/:id", categoryDetailView);

//Create
categoryRouter.post("/api/v1/cupoftea/categories", createCategory);

//Update
categoryRouter.put("/api/v1/cupoftea/categories/:id", updateCategory);

//Delete
categoryRouter.delete("/api/v1/cupoftea/categories/:id", removeCategory);

export default categoryRouter;