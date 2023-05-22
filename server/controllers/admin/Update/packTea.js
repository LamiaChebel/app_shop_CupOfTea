import {pool} from "../../../config/database.js";

const updatePacksTeas = async (req,res) => {
    const {packaging_id, tea_id, ref, price , stock } = req.body;
    const {p_id, t_id } = req.params;
console.log(req.body, req.params);
    try {
        const sql = `UPDATE packaging_tea
                    SET packaging_tea.ref = ?, packaging_tea.price = ?, 
                    packaging_tea.stock = ?
                    WHERE packaging_tea.packaging_id = ? AND packaging_tea.tea_id = ?`;
        const [result] = await pool.query(sql,[ref, price , stock, p_id, t_id]);
        if(!result){
            return res.status(404).json({msg : `Can't find the packaging_tea with the id (${p_id}, ${t_id}).`});
        }
        console.log(`Update packaging_tea succeed : ${result.info}`);
        return res.status(200).redirect(301,`/api/v1/cupoftea/packsteas/packaging/${p_id}/tea/${t_id}`);

    } catch (error) {
        res.status(400).json(error); 
        console.log(`Error request`, error);
    }
};

export default updatePacksTeas;