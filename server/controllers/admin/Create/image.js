import {pool} from "../../../config/database.js";

const createImage = async (req,res) => {

        try {
            const sql = `INSERT INTO image (image.title, image.url)
                        VALUES (?) `;
            const [imageResult] = await pool.query(sql, [Object.values(req.body)]);
            console.log(`Creating ${imageResult.affectedRows} line with image's id ${imageResult.insertId}`);
            res.status(201).json({image : imageResult});
    
        } catch (error) {
            res.status(400).json(error); 
            console.log(`Error request`, error);
        }
    };
    
    export default createImage;