import {pool} from "../../../config/database.js";

const categoriesView = async (req,res) => {

    try {
        const sql = `SELECT id, title, description, image_id from category`;
        const [categoriesResult] = await pool.query(sql);
        console.log(categoriesResult);
        res.status(200).json({categories : categoriesResult});

    } catch (error) {
        res.status(400).json(error);
    }
};

export const categoryDetailView = async (req,res) => {

    try {
        const sql = `SELECT id, title, description, image_id from category
                    WHERE id = ? `;
        const [categoryResult] = await pool.query(sql,[req.params.id]);
        console.log("Display succeed");
        res.status(200).json({category : categoryResult});

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default categoriesView;