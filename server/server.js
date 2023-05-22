import express from "express";
import "dotenv/config";

import { LOCAL_PORT } from "./config/const.js";

import adminRouter from "./routers/admin.routers.js";
import categoryRouter from "./routers/categories.routes.js";
import imageRouter from "./routers/images.routes.js";
import packagingRouter from "./routers/packagings.routes.js";
import packTeaRouter from "./routers/packagingsTeas.routes.js";
import teaRouter from "./routers/teas.routes.js";

/*************************************Déclaration de nos variables********************************************** */

const PORT = process.env.PORT || LOCAL_PORT;

const app = express();

/************************************Actions sur le serveur****************************************************/

app.use(express.urlencoded({extended : true}))
    .use(express.json())
    .use(adminRouter)
    .use(categoryRouter)
    .use(imageRouter)
    .use(packagingRouter)
    .use(packTeaRouter)
    .use(teaRouter);


/************************************Ecoute du serveur************************************************/
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})



