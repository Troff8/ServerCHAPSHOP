const db = require('../db')

class OrderController{
    async setOrder(req,res){
        const {ORDER_ID,PRODUCTS,NAME_CLIENT,NUMBER_CLIENT,STREET_CLIENT,HOUSE_CLIENT,FLAT_CLIENT,DESCRIPTION,PRICE,PAYMENT} = req.body
        const alco = await db.query(`INSERT INTO ORDERBUY (ORDER_ID,PRODUCTS,NAME_CLIENT,NUMBER_CLIENT,STREET_CLIENT,HOUSE_CLIENT,FLAT_CLIENT,DESCRIPTION,PRICE,PAYMENT) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,[ORDER_ID,PRODUCTS,NAME_CLIENT,NUMBER_CLIENT,STREET_CLIENT,HOUSE_CLIENT,FLAT_CLIENT,DESCRIPTION,PRICE,PAYMENT])
        res.json(alco.rows[0])
    }
    async getOrder(req,res){
        const alco = await db.query(`SELECT * FROM ORDERBUY`)
        res.json(alco.rows)
    }
    async deleteOrder(req,res){
        const alco_id = req.params.id
        const alco = await db.query(`DELETE FROM ORDERBUY where ALCO_ID=$1`,[alco_id])
        res.json(alco.rows[0])
    }
}
module.exports=new OrderController()