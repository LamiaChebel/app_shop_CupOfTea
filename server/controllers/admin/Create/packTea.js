import {pool} from "../../../config/database.js";

const createpackTea = async (req,res) => {

        try {
            const sql = `INSERT INTO packaging_tea (packaging_id, tea_id, 
                        ref, price, stock)
                        VALUES (?) `;
            const [packTeaResult] = await pool.query(sql, [Object.values(req.body)]);
            console.log(`Creating ${packTeaResult.affectedRows} line with tea's id ${packTeaResult.insertId}`);
            res.status(201).json({packTea : packTeaResult});
    
        } catch (error) {
            res.status(400).json(error); 
            console.log(`Error request`, error);
        }
    };
    
    export default createpackTea;