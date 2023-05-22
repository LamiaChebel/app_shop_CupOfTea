import {pool} from "../../../config/database.js";

const updateImage = async (req,res) => {
    const {title, url} = req.body;

    try {
        const sql = `UPDATE image
                    SET image.title = ?, image.url = ?
                    WHERE image.id = ?`;
        const [result] = await pool.query(sql,[title, url, req.params.id]);
        if(!result){
            return res.status(404).json({msg : `Can't find the image with an ${req.params.id}`});
        }
        console.log(`Update image succeed : ${result.info}`);
        return res.status(200).redirect(301,`/api/v1/cupoftea/images/${req.params.id}`);

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default updateImage;