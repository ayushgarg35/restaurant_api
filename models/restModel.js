const mongoose = require('mongoose')

const restSchema=new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    imageURL: String,
    location: String,
    phone: String,  
    rating: Number,
    createdAt:{
        type:Date,
        default:()=> {return Date.now()},
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:()=> {return Date.now()}
    }
})

module.exports = new mongoose.model('restaurants',restSchema)