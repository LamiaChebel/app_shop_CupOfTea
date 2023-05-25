import { pool } from "../../config/database.js";

const apiView = async(req,res) => {

    try {
        const sql = `SELECT tea.id AS teaId, tea.title AS teaTitle, 
                    tea.subtitle, tea.description AS teaDescription, 
                    tea.story_tea, tea.created_at, tea.our_favorite, 
                    tea.category_id, tea.image_id, category.id AS 
                    categoryId, category.title AS categoryTitle, 
                    category.description AS categoryDescription,
                    category.image_id AS categoryImage, image.id AS imageId,
                    image.title AS imageTitle, image.url, packaging.id AS packagingId,
                    packaging.weight, packaging_tea.packaging_id AS packaging_idTea, 
                    packaging_tea.tea_id AS tea_idPackaging, packaging_tea.ref, 
                    packaging_tea.price, packaging_tea.stock FROM tea
                    JOIN category ON category.id = tea.category_id
                    JOIN image ON image.id = tea.image_id
                    JOIN packaging_tea ON packaging_tea.tea_id = tea.id
                    JOIN packaging ON packaging_tea.packaging_id = packaging.id`;

        const [result] = await pool.query(sql);
        // const [teaList] = await pool.query(teas);
        // const [categoryList] = await pool.query(categories);
        // const [imageList] = await pool.query(images);
        // const [packList] = await pool.query(packagings);
        // const [packTeaList] = await pool.query(packsTeas);
        if(!result.length) {
            console.log('Problem on the request SQL');
            res.status(204).json({message : error.message});
        }
        res.status(200).json({datas : result });

    } catch (error) {
        
        res.status(400).json(error);
    }
}

export default apiView;