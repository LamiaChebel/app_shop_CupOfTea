import { Router } from "express";

//Read Controllers
import adminView from "../controllers/admin/adminController.js";
import teasView from "../controllers/admin/Read/teas.js";
import categoriesView from "../controllers/admin/Read/categories.js";
import packagingsView from "../controllers/admin/Read/packagings.js";
import packsTeasView from "../controllers/admin/Read/packsTeas.js";
import imagesView from "../controllers/admin/Read/images.js";

//Create Controllers
import createTea from "../controllers/admin/Create/tea.js";
// import createCategory from "../controllers/admin/Create/category.js";
// import createPackaging from "../controllers/admin/Create/packaging.js";
// import createPackTea from "../controllers/admin/Create/packTea.js";
// import createImage from "../controllers/admin/Create/image.js";

//Upadet Controllers
// import updateTea from "../controllers/admin/Update/tea.js";
// import updateCategory from "../controllers/admin/Update/category.js";
// import updatePackaging from "../controllers/admin/Update/packaging.js";
// import updatePackTea from "../controllers/admin/Update/packTea.js";
// import updateImage from "../controllers/admin/Update/image.js";


//Delete Controllers
// import removeTea from "../controllers/admin/Delete/tea.js";
// import removeCategory from "../controllers/admin/Delete/category.js";
// import removePackaging from "../controllers/admin/Delete/packaging.js";
// import removePackTea from "../controllers/admin/Delete/packTea.js";
// import removeImage from "../controllers/admin/Delete/image.js";


const adminRouter = Router();

/*******************************************CRUD Page Admin*************************************************/

//Read dashboard's admin route

adminRouter.get("/admin", adminView);

/*********************************************CRUD teas****************************************************/

//Read
adminRouter.get("/admin/api/v1/cupoftea/teas", teasView);

//Create
adminRouter.post("/admin/api/v1/cupoftea/teas", createTea);

//Update
// adminRouter.put("/admin/api/v1/cupoftea/teas/:id", updateTea);

//Delete
// adminRouter.delete("/admin/api/v1/cupoftea/teas/:id", removeTea);


/*********************************************CRUD categories****************************************************/
 
//Read
adminRouter.get("/admin/api/v1/cupoftea/categories", categoriesView);

//Create
// adminRouter.post("/admin/api/v1/cupoftea/categories", createCategory);

//Update
// adminRouter.put("/admin/api/v1/cupoftea/categories/:id", updateCategory);

//Delete
// adminRouter.delete("/admin/api/v1/cupoftea/categories/:id", removeCategory);


/*********************************************CRUD packagings****************************************************/

 //Read
adminRouter.get("/admin/api/v1/cupoftea/packagings", packagingsView);

//Create
// adminRouter.post("/admin/api/v1/cupoftea/packagings", createPackaging);

//Update
// adminRouter.put("/admin/api/v1/cupoftea/packagings/:id", updatePackaging);

//Delete
// adminRouter.delete("/admin/api/v1/cupoftea/packagings/:id", removePackaging);

/*********************************************CRUD packsTeas****************************************************/

 //Read
adminRouter.get("/admin/api/v1/cupoftea/packsTeas", packsTeasView);

//Create
// adminRouter.post("/admin/api/v1/cupoftea/packsTeas", createPackTea);

//Update
// adminRouter.put("/admin/api/v1/cupoftea/packsTeas/:id", updatePackTea);

//Delete
// adminRouter.delete("/admin/api/v1/cupoftea/packsTeas/:id", removePackTea);


/*********************************************CRUD images****************************************************/

 //Read
adminRouter.get("/admin/api/v1/cupoftea/images", imagesView);

//Create
// adminRouter.post("/admin/api/v1/cupoftea/images", createImage);

//Update
// adminRouter.put("/admin/api/v1/cupoftea/images/:id", updateImage);

//Delete
// adminRouter.delete("/admin/api/v1/cupoftea/images/:id", removeImage);


export default adminRouter;