import { Router } from "express";

import packagingsView , { packagingDetailView }from "../controllers/admin/Read/packagings.js";
import createPackaging from "../controllers/admin/Create/packaging.js";
import updatePackaging from "../controllers/admin/Update/packaging.js";
import removePackaging from "../controllers/admin/Delete/packaging.js";

const packagingRouter = Router();

/*********************************************CRUD packagings****************************************************/

 //Read
 packagingRouter.get("/api/v1/cupoftea/packagings", packagingsView);
 packagingRouter.get("/api/v1/cupoftea/packagings/:id", packagingDetailView);
 
 //Create
 packagingRouter.post("/api/v1/cupoftea/packagings", createPackaging);
 
 //Update
 packagingRouter.put("/api/v1/cupoftea/packagings/:id", updatePackaging);
 
 //Delete
 packagingRouter.delete("/api/v1/cupoftea/packagings/:id", removePackaging);

 export default packagingRouter;
