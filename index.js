const express = require('express')
const assortmentRouter=require('./routes/assortment.routes')
const orderRouter=require('./routes/order.routes')
const PORT = process.env.PORT || 8080

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use(express.json())
app.use('/api/order',orderRouter)
app.use('/api/assortment',assortmentRouter)

app.listen(PORT,()=>console.log(`Server start,PORT - ${PORT}`))