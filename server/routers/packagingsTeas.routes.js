import { Router } from "express";

import packsTeasView , { packTeaDetailView }from "../controllers/admin/Read/packsTeas.js";
import createPackTea from "../controllers/admin/Create/packTea.js";
import updatePackTea from "../controllers/admin/Update/packTea.js";
import removePackTea from "../controllers/admin/Delete/packTea.js";


const packTeaRouter = Router();

/*********************************************CRUD packsTeas****************************************************/

 //Read
 packTeaRouter.get("/api/v1/cupoftea/packsteas", packsTeasView);
 packTeaRouter.get("/api/v1/cupoftea/packsteas/packaging/:p_id/tea/:t_id", packTeaDetailView);
 
 //Create
 packTeaRouter.post("/api/v1/cupoftea/packsteas", createPackTea);
 
 //Update
 packTeaRouter.put("/api/v1/cupoftea/packsteas/packaging/:p_id/tea/:t_id", updatePackTea);
 
 //Delete
 packTeaRouter.delete("/api/v1/cupoftea/packsTeas/packaging/:p_id/tea/:t_id", removePackTea);

 export default packTeaRouter;