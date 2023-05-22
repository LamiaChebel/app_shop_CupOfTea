import {pool} from "../../../config/database.js";

const packagingsView = async (req,res) => {

    try {
        const sql = `SELECT id, weight from packaging`;
        const [packagingsResult] = await pool.query(sql);
        console.log(packagingsResult);
        res.status(200).json({packagings : packagingsResult});

    } catch (error) {
        res.status(400).json(error);
    }
};

export const packagingDetailView = async (req,res) => {

    try {
        const sql = `SELECT id, weight from packaging
                    WHERE id = ? `;
        const [packagingResult] = await pool.query(sql,[req.params.id]);
        console.log("Display succeed");
        res.status(200).json({packaging : packagingResult});

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default packagingsView;