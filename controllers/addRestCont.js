const Restaurant= require("../models/restModel")

module.exports=async (req,res)=>{
    try{ 
        const restObj={
            name:req.body.name,
            description:req.body.description,
            category: req.body.category,
            imageURL:req.body.imageURL,
            location: req.body.location,
            phone: req.body.phone,
            rating:req.body.rating
        }
        res.status(200).json(await Restaurant.create(restObj))
    }catch(err){
        console.log(err)
        res.status(500).json({"message": 'Some error occurred while creating the Restaurant'})
    }

}