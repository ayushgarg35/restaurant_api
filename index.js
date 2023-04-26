const mongoose= require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect(require("../restaurantsAPIs/configs/dbConfigs").url)
const db=mongoose.connection

db.once("open",()=>{
    console.log('successfully connected to DB')
    //this dbConfig folder has the URL for the dataBase and we can change this Url whenever we like without touching our code
    console.log(require("../restaurantsAPIs/configs/dbConfigs").url)
})

db.on('error',(err)=>{
    console.log('connection error '+err)
    process.exit()
})

require("../restaurantsAPIs/routes/allRoutes")(app)
app.listen(require("../restaurantsAPIs/configs/serverConfig").PORT)