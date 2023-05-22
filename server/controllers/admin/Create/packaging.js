import {pool} from "../../../config/database.js";

const createPackaging = async (req,res) => {

        try {
            const sql = `INSERT INTO packaging (packaging.weight)
                        VALUES (?) `;
            const [packagingResult] = await pool.query(sql, [Object.values(req.body)]);
            console.log(`Creating ${packagingResult.affectedRows} line with packaging's id ${packagingResult.insertId}`);
            res.status(201).json({packaging : packagingResult});
    
        } catch (error) {
            res.status(400).json(error); 
            console.log(`Error request`, error);
        }
    };
    
    export default createPackaging;