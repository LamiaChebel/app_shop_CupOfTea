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

export default packagingsView;