import {pool} from "../../../config/database.js";

const updateTea = async (req,res) => {
    const {title, subtitle, description, story_tea, created_at, our_favorite, category_id, image_id} = req.body;

    try {
        const sql = `UPDATE tea
                    SET tea.title = ?, tea.subtitle = ?, tea.description = ?, tea.story_tea = ?,
                    tea.created_at = ?, tea.our_favorite = ?, tea.category_id = ?, tea.image_id = ?
                    WHERE tea.id = ?`;
        const [result] = await pool.query(sql,[title, subtitle, description, story_tea, created_at, our_favorite, category_id, image_id, req.params.id]);
        if(!result){
            return res.status(404).json({msg : `Can't find the tea with an ${req.params.id}`});
        }
        console.log(`Update tea succeed : ${result.info}`);
        return res.status(200).redirect(301,`/api/v1/cupoftea/teas/${req.params.id}`);

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default updateTea;