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

export default categoriesView;