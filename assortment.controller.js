const db = require('../db')

class AssortmentController{
    async setAlco(req,res){
        const {alco_id,title,type_alco,description,price,availability} = req.body
        const alco = await db.query(`INSERT INTO ALCO (ALCO_ID,TITLE,TYPE_ALCO,DESCRIPTION,PRICE,AVAILABILITY) values ($1,$2,$3,$4,$5,$6) RETURNING *`,[alco_id,title,type_alco,description,price,availability])
        res.json(alco.rows[0])
    }
    async getAlco(req,res){
        const alco = await db.query(`SELECT * FROM ALCO`)
        res.json(alco.rows)
    }
    async updateAlcoFullInfo(req,res){
        const {alco_id,title,type_alco,description,price,availability} = req.body
        const alco = await db.query(`UPDATE ALCO set TITLE=$1,TYPE_ALCO=$2,DESCRIPTION=$3,PRICE=$4,AVAILABILITY=$5 where ALCO_ID=$6 RETURNING *`,[title,type_alco,description,price,availability,alco_id])
        res.json(alco.rows[0])
    }
    async updateAlcoAvailability(req,res){
        const {alco_id,availability} = req.body
        const alco = await db.query(`UPDATE ALCO set AVAILABILITY=$1 where ALCO_ID=$2 RETURNING *`,[availability,alco_id])
        res.json(alco.rows[0])
    }
    async deleteAlco(req,res){
        const alco_id = req.params.id
        const alco = await db.query(`DELETE FROM ALCO where ALCO_ID=$1`,[alco_id])
    }
}
module.exports=new AssortmentController()