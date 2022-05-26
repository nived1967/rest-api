const mongoose=require('mongoose')

const scoreboardSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('Scoreboard',scoreboardSchema)