const express=require('express');
const app=express();
const cors=require('cors')

app.use(express.json())
app.use(cors())

//route imports 
const bookRouter=require('./routers/bookRoute')

app.use("/api/v1", bookRouter)

module.exports = app;