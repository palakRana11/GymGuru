const mongoose=require('mongoose');

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    calories:{
        type:Number,
        required:true
    },
    protein:{
        type:Number,
        required:true
    },
    carbohydrates:{
        type:Number,
        required:true
    },
    fat:{
        type:Number,
        required:true
    },
    fiber:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

const foodModel = mongoose.model('Food', foodSchema, 'Food'); 
// Explicitly map to 'Food' collection

module.exports=foodModel;