import { pool } from "../../config/database.js";

const apiView = async(req,res) => {

    try {
        const [teas, categories, images, packagings, packsTeas] = [`SELECT * from tea`, `SELECT * from category`, `SELECT * from image`, `SELECT * from packaging`, `SELECT * from packaging_tea`];

        const [teaList] = await pool.query(teas);
        const [categoryList] = await pool.query(categories);
        const [imageList] = await pool.query(images);
        const [packList] = await pool.query(packagings);
        const [packTeaList] = await pool.query(packsTeas);
    
        res.status(200).json({datas : {teas : teaList, categories : categoryList, images : imageList, packagings : packList, packagings_teas : packTeaList } });

    } catch (error) {
        
        res.status(400).json(error);
    }
}

export default apiView;