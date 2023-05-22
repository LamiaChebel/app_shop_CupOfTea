import {pool} from "../../../config/database.js";

const updatePackaging = async (req,res) => {
    const {title, weight} = req.body;

    try {
        const sql = `UPDATE packaging
                    SET packaging.title = ?, packaging.weight = ?
                    WHERE packaging.id = ?`;
        const [result] = await pool.query(sql,[title, weight, req.params.id]);
        if(!result){
            return res.status(404).json({msg : `Can't find the packaging with an ${req.params.id}`});
        }
        console.log(`Update packaging succeed : ${result.info}`);
        return res.status(200).redirect(301,`/api/v1/cupoftea/packagings/${req.params.id}`);

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default updatePackaging;