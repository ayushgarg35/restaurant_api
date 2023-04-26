const { Mongoose, default: mongoose } = require("mongoose")
const Restaurant=require("../models/restModel")

exports.getCat = async (req,res)=>{
    try{
        res.status(200).json(await Restaurant.distinct('category'))
    }catch(err){
        console.log(err)
        res.status(500).json({"message": "Some error occurred while fetching Categories"})
    }
}

exports.getByCat = async (req,res)=>{
    try{
        res.status(200).json(await Restaurant.find({category:req.params.categoryName}))
    }catch(err){
        console.log(err)
        res.status(500).json({"message": "Some error occured while fetching the Restaurant."    })
    }
}

exports.getById = async (req,res)=>{
    try{
        const restaurant =await Restaurant.findById(new mongoose.Types.ObjectId(req.params.id))
        if(!restaurant)
            res.status(404).json({"message":"not found"})
        else    res.status(200).json(restaurant)
    }catch(err){
        console.log(err)
        res.status(500).json({"message": "Some error occured while fetching the Restaurant."    })
    }
}

exports.getByRatings = async (req,res)=>{
    try{
        res.status(200).json(await Restaurant.find({rating:{$gte:parseInt(req.params.ratingValue)}}))
    }catch(err){
        console.log(err)
        res.status(500).json({"message": "Some error occured while fetching the Restaurant."})
    }
}