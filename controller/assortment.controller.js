const db = require('../db')

class AssortmentController{
    async setAlco(req,res){
        try{
            const {title,type_alco,description,price,availability,URL_PHOTO,auth} = req.body
            if(auth === 'auth4Shop163ChapShop'){
                const alco = await db.query(`INSERT INTO ALCO (TITLE,TYPE_ALCO,DESCRIPTION,PRICE,AVAILABILITY,URL_PHOTO) values ($1,$2,$3,$4,$5,$6) RETURNING *`,[title,type_alco,description,price,availability,URL_PHOTO])
                res.json(alco.rows[0])
            }
            else{
                res.json('Неверный ключ!')
            }
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async check(req,res){
        try{
            res.json('Запрос долетел')
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async getFullAlco(req,res){
        try{
            const alco = await db.query(`SELECT * FROM ALCO`)
            res.json(alco.rows)
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async getVodkaAlco(req,res){
        try{
            const alco = await db.query(`SELECT * FROM ALCO where type_alco = 'Водка'`)
            res.json(alco.rows)
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async getWhiskeyAlco(req,res){
        try{
            const alco = await db.query(`SELECT * FROM ALCO where type_alco = 'Виски'`)
            res.json(alco.rows)
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async getBeerAlco(req,res){
        try{
            const alco = await db.query(`SELECT * FROM ALCO where type_alco = 'Пиво'`)
            res.json(alco.rows)
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async getWineAlco(req,res){
        try{
            const alco = await db.query(`SELECT * FROM ALCO where type_alco = 'Вино'`)
            res.json(alco.rows)
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async getNonalcoholicAlco(req,res){
        try{
            const alco = await db.query(`SELECT * FROM ALCO where type_alco = 'Безалкогольное'`)
            res.json(alco.rows)
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async getSnacksAlco(req,res){
        try{
            const alco = await db.query(`SELECT * FROM ALCO where type_alco = 'Закуски'`)
            res.json(alco.rows)
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async getOtherAlco(req,res){
        try{
            const alco = await db.query(`SELECT * FROM ALCO where type_alco = 'Другое'`)
            res.json(alco.rows)
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async updateAlcoFullInfo(req,res){
        try{
            const {alco_id,title,type_alco,description,price,availability,auth,URL_PHOTO} = req.body
            if(auth === 'auth4Shop163ChapShop'){
                const alco = await db.query(`UPDATE ALCO set TITLE=$1,TYPE_ALCO=$2,DESCRIPTION=$3,PRICE=$4,AVAILABILITY=$5,URL_PHOTO=$6 where ALCO_ID=$7 RETURNING *`,[title,type_alco,description,price,availability,URL_PHOTO,alco_id])
                res.json(alco.rows[0])
            }
            else{
                res.json('Неверный ключ!')
            }
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async updateAlcoAvailability(req,res){
        try{
            const {alco_id,availability,auth} = req.body
            if(auth === 'auth4Shop163ChapShop'){
                const alco = await db.query(`UPDATE ALCO set AVAILABILITY=$1 where ALCO_ID=$2 RETURNING *`,[availability,alco_id])
                res.json(alco.rows[0])
            }
            else{
                res.json('Неверный ключ!')
            }
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
    async deleteAlco(req,res){
        try{
            const alco_id = req.params.id
            const alco = await db.query(`DELETE FROM ALCO where ALCO_ID=$1`,[alco_id])
        }
        catch(e){
            res.json('Ошибка сервера - catch')
        }
    }
}
module.exports=new AssortmentController()