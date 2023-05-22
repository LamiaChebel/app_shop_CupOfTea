import {pool} from "../../../config/database.js";

const createCategory = async (req,res) => {

    console.log(Object.values(req.body));
        try {
            const sql = `INSERT INTO category (category.title, category.description,
                        category.image_id)
                        VALUES (?) `;
            const [categoryResult] = await pool.query(sql, [Object.values(req.body)]);
            console.log(`Creating ${categoryResult.affectedRows} line with category's id ${categoryResult.insertId}`);
            res.status(201).json({category : categoryResult});
    
        } catch (error) {
            res.status(400).json(error); 
            console.log(`Error request`, error);
        }
    };
    
    export default createCategory;