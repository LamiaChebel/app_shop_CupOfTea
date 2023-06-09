import express from "express";
import "dotenv/config";

import { LOCAL_PORT } from "./config/const.js";

import adminRouter from "./routers/admin.routers.js";

/*************************************Déclaration de nos variables********************************************** */

const PORT = process.env.PORT || LOCAL_PORT;

const app = express();

/************************************Actions sur le serveur****************************************************/

app.use(express.urlencoded({extended : true}))
    .use(express.json())
    .use(adminRouter);


/************************************Ecoute du serveur************************************************/
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})



