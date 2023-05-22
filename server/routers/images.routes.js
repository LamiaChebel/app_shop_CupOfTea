import { Router } from "express";

import imagesView , { imageDetailView }from "../controllers/admin/Read/images.js";
import createImage from "../controllers/admin/Create/image.js";
import updateImage from "../controllers/admin/Update/image.js";
import removeImage from "../controllers/admin/Delete/image.js";

const imageRouter = Router();

/*********************************************CRUD images****************************************************/

 //Read
 imageRouter.get("/api/v1/cupoftea/images", imagesView);
 imageRouter.get("/api/v1/cupoftea/images/:id", imageDetailView);
 
 //Create
 imageRouter.post("/api/v1/cupoftea/images", createImage);
 
 //Update
 imageRouter.put("/api/v1/cupoftea/images/:id", updateImage);
 
 //Delete
 imageRouter.delete("/api/v1/cupoftea/images/:id", removeImage);
 
 export default imageRouter;