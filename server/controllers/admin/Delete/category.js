import {pool} from "../../../config/database.js";

const removeCategory = async (req,res) => {
    try {
        const sql = `DELETE from category WHERE id = ?`;
        const [result] = await pool.query(sql, [req.params.id]);
        if(!result){
            return res.status(404).json({msg : `Can't find the category with an ID ${req.params.id}`});
        }

        console.log(`Delete category succeed !`);
        return res.status(200).json({msg : `The category with the id ${req.params.id} is removed on the API Cup of Tea.`});

    } catch (error) {
        res.status(500).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default removeCategory;