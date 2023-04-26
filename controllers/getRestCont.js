module.exports=async (req,res)=>{
    try{
        res.status(200).json(await require("../models/restModel").find())
    }catch(err){
        console.log(err)
        res.status(500).json({"message": 'Some error occurred while fetching Restaurants'})
    }
}