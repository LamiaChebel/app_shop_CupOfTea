import {pool} from "../../../config/database.js";

const createTea = async (req,res) => {

    try {
        const sql = `INSERT INTO tea (tea.title, tea.subtitle, tea.description, tea.story_tea,
                    tea.created_at, tea.our_favorite, tea.category_id, tea.image_id)
                    VALUES (?) `;
        const [teaResult] = await pool.query(sql, [Object.values(req.body)]);
        console.log(`Creating ${teaResult.affectedRows} line with tea's id ${teaResult.insertId}`);
        res.status(201).json({tea : teaResult});

    } catch (error) {
        res.status(400).json(error); 
        console.log(`Error request`, error);
    }
};

export default createTea;