import {pool} from "../../../config/database.js";

const teasView = async (req,res) => {
    try {
        const sql = `SELECT tea.id, tea.title, tea.subtitle, tea.description, tea.story_tea,
                    tea.created_at, tea.our_favorite, tea.category_id, tea.image_id from tea`;
        const [teasResult] = await pool.query(sql);
        console.log(teasResult);
        res.status(200).json({teas : teasResult});

    } catch (error) {
        res.status(500).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default teasView;