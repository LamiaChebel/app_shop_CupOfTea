import {pool} from "../../../config/database.js";

const createTea = async (req,res) => {

    const {title, subtitle, description, storyTea, createdAt, ourFavorite, categoryId, imageId } = req.body;

    try {
        const sql = `INSERT INTO tea (tea.title, tea.subtitle, tea.description, tea.story_tea,
                    tea.created_at, tea.our_favorite, tea.category_id, tea.image_id)
                    VALUES (?,?,?,?,NOW(),?,?,?) `;
        const [teaResult] = await pool.query(sql, [title, subtitle, description, storyTea, createdAt, ourFavorite, categoryId, imageId]);
        console.log(teaResult);
        res.status(200).json({tea : teaResult});

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default createTea;