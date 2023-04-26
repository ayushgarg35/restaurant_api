const { default: mongoose } = require('mongoose')
const Restaurant = require('../models/restModel') 

exports.updateById= async (req,res)=>{
    try{
        if(!(await Restaurant.findById(new mongoose.Types.ObjectId(req.params.id))))
            res.status(200).json({"message":"No Restaurant found for given ID"})
        else{
            const restObj= {
                name:req.body.name,
                description:req.body.description,
                category:req.body.category,
                imageURL:req.body.imageURL,
                location:req.body.location,
                phone:req.body.phone,
                rating:req.body.rating
            }
            if(Object.values(restObj).includes(undefined))
                res.status(400).json({"message":"Restaurant Data is required"})
            else{ 
                await Restaurant.findByIdAndUpdate(new mongoose.Types.ObjectId(req.params.id),restObj)
                res.status(200).json({"message":"Restaurant updated successfully"})
        }
    }
    }catch(err){
        console.log(err)
        res.status(500).json({"message":"Some error occured while fetching the Restaurant."})
    }
}

exports.deleteById = async (req,res) =>{
    try{
        res.status(200).json({
            "restaurant":await Restaurant.findByIdAndDelete(new mongoose.Types.ObjectId(req.params.id)),
            "message":"Restaurant deleted successfully"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({"message":"Some error occured while deleting the Restaurant."})
    }
}

exports.delete = async (req,res)=>{
    try{
        res.status(200).json({
            "restaurants":await Restaurant.deleteMany({}),
            "message":"Restaurants deleted successfully"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({"message":"Some error occured while deleting the Restaurant."})
    }
}