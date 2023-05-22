import {pool} from "../../../config/database.js";

const packsTeasView = async (req,res) => {

    try {
        const sql = `SELECT packaging_id, tea_id, ref, price, stock from packaging_tea`;
        const [packsTeasResult] = await pool.query(sql);
        console.log("Display packagings_teas succeed");
        res.status(200).json({packsTeas : packsTeasResult});

    } catch (error) {
        res.status(400).json(error);
    }
};

export const packTeaDetailView = async (req,res) => {

    try {
        const sql = `SELECT packaging_id, tea_id, ref, price, stock from packaging_tea
                    WHERE packaging_id = ? AND tea_id = ? `;
        const [packTeaResult] = await pool.query(sql,[req.params.p_id, req.params.t_id]);
        console.log("Display packaging_tea succeed");
        res.status(200).json({packTea : packTeaResult});

    } catch (error) {
        res.status(400).json(error); //revoir code erreur
        console.log(`Error request`, error);
    }
};

export default packsTeasView;