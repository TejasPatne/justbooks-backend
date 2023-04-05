const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200  }))

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//route imports 
const bookRouter=require('./routers/bookRoute')

app.use("/api/v1", bookRouter)

module.exports = app;