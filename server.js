require('dotenv').config()
const express=require('express');
const app=express();
const mongoose=require('mongoose')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser:true })
const db=mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log("Connected to Database"))

app.use(express.json())

const scoreboardRouter=require('./routes/scoreboard')
app.use('/scoreboard',scoreboardRouter)


app.listen(process.env.PORT || 3000,()=>console.log('Server Started'))