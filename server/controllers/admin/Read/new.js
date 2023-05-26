import { pool } from "../../../config/database.js";

const newView = async(req,res) => {

    try {
        const sql = `SELECT tea.id AS teaId, tea.title AS teaTitle, 
                    tea.description AS teaDescription, 
                    tea.created_at, 
                    image.title AS imageTitle, image.url, 
                    packaging_tea.price FROM tea
                    JOIN image ON image.id = tea.image_id
                    JOIN packaging_tea ON packaging_tea.tea_id = tea.id
                    JOIN packaging ON packaging_tea.packaging_id = packaging.id
                    GROUP BY tea.id
                    ORDER BY tea.created_at DESC LIMIT 1`;

        const [result] = await pool.query(sql);
        
        if(!result.length) {
            console.log('Problem on the request SQL');
            res.status(204).json({message : error.message});
        }
        res.status(200).json({datas : result });

    } catch (error) {
        
        res.status(400).json(error);
    }
}

export default newView;