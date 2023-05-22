import {pool} from "../../../config/database.js";

const removepackTea = async (req,res) => {

    try {
        const sql = `DELETE from packaging_tea WHERE packaging_id = ? AND tea_id= ? `;
        const [result] = await pool.query(sql, [req.params.p_id, req.params.t_id ]);
        if(!result){
            return res.status(404).json({msg : `Can't find the packTea with an ID (${req.params.p_id},${req.params.t_id})`});
        }

        console.log(`Delete packTea succeed !`);
        return res.status(200).json({msg : `The packTea with the id (${req.params.p_id},${req.params.t_id})  is removed on the API Cup of Tea.`});

    } catch (error) {
        res.status(500).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default removepackTea;