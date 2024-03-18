const express = require("express")

const app=express()
require('dotenv').config()

const PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.send("Home..")
})


app.get("/about",(req,res)=>{
    res.send("About........")
})

app.get("/profile",(req,res)=>{
    res.send("Profile page")
})


app.listen(PORT,()=>{

    console.log("Runnig on 5050")
})