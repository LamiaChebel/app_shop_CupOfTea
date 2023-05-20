import {pool} from "../../../config/database.js";

const packsTeasView = async (req,res) => {

    try {
        const sql = `SELECT packaging_id, tea_id, ref, price, stock from packaging_tea`;
        const [packsTeasResult] = await pool.query(sql);
        console.log(packsTeasResult);
        res.status(200).json({packsTeas : packsTeasResult});

    } catch (error) {
        res.status(400).json(error);
    }
};

export default packsTeasView;