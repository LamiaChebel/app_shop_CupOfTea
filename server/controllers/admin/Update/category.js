import {pool} from "../../../config/database.js";

const updateCategory = async (req,res) => {
    const {title, description, image_id} = req.body;

    try {
        const sql = `UPDATE category
                    SET category.title = ?, category.description = ?, category.image_id = ?
                    WHERE category.id = ?`;
        const [result] = await pool.query(sql,[title, description, image_id, req.params.id]);
        if(!result){
            return res.status(404).json({msg : `Can't find the category with an ${req.params.id}`});
        }
        console.log(`Update category succeed : ${result.info}`);
        return res.status(200).redirect(301,`/api/v1/cupoftea/categories/${req.params.id}`);

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default updateCategory;