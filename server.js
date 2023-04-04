require('dotenv').config({path: "config/config.env"})
const app=require('./app');
const connectDatabase=require('./config/database')
const cors=require('cors')

connectDatabase();
// app.use(cors())
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})