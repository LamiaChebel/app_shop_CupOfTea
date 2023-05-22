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

export const imageDetailView = async (req,res) => {

    try {
        const sql = `SELECT id, title, url from image
                    WHERE id = ? `;
        const [imageResult] = await pool.query(sql,[req.params.id]);
        console.log("Display succeed");
        res.status(200).json({image : imageResult});

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default imagesView;