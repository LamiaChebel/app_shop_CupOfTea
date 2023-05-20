import {pool} from "../../../config/database.js";

const imagesView = async (req,res) => {

    try {
        const sql = `SELECT id, title, url from image`;
        const [imagesResult] = await pool.query(sql);
        console.log(imagesResult);
        res.status(200).json({images : imagesResult});

    } catch (error) {
        res.status(400).json(error);
    }
};

export default imagesView;