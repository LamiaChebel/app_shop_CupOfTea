import {pool} from "../../../config/database.js";

const teasView = async (req,res) => {
    try {
        const sql = `SELECT tea.id, tea.title, tea.subtitle, tea.description, tea.story_tea,
                    tea.created_at, tea.our_favorite, tea.category_id, tea.image_id from tea`;
        const [teasResult] = await pool.query(sql);
        console.log("Display teas succeed");
        res.status(200).json({teas : teasResult});

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export const teaDetailView = async (req,res) => {

    try {
        const sql = `SELECT tea.id, tea.title, tea.subtitle, tea.description, tea.story_tea,
                    tea.created_at, tea.our_favorite, tea.category_id, tea.image_id from tea
                    WHERE tea.id = ? `;
        const [teaResult] = await pool.query(sql,[req.params.id]);
        console.log("Display tea succeed");
        res.status(200).json({tea : teaResult});

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default teasView;