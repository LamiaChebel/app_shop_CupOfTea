import {pool} from "../../../config/database.js";

const removeTea = async (req,res) => {
    try {
        const sql = `DELETE from tea WHERE id = ?`;
        const [result] = await pool.query(sql, [req.params.id]);
        if(!result){
            return res.status(404).json({msg : `Can't find the tea with an ${req.params.id}`});
        }

        console.log("Delete succeed");
        return res.status(200).json({tea : result});

    } catch (error) {
        res.status(500).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default removeTea;