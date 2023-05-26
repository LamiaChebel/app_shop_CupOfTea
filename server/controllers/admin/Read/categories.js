import {pool} from "../../../config/database.js";

const categoriesView = async (req,res) => {

    try {
        const sql = `SELECT category.id, category.title, category.description, 
                    image.title AS imageTitle, image.url AS img from category
                    JOIN image ON category.image_id = image.id`;
                    
        const [categoriesResult] = await pool.query(sql);
        console.log("Display categories succeed");
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
        console.log("Display category succeed");
        res.status(200).json({category : categoryResult});

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default categoriesView;