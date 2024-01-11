console.log("hello node class");
const express=require ("express");
// const req = require("express/lib/request");
const app=express()
const port=5000;
const ejs = require("ejs")

app.set("view engine","ejs")

app.listen(port,(error)=>{
    if (error) {
        console.log(`I can't run on port ${port}`);
    } else {
        console.log(`I am runing on port ${port}`);
    }
})
app.get("/",(req,res)=>{
    res.render("index", {car:"Toyota Camry"})

})
app.get("/Welcome", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/login.html")
})
app.get("/signup", (req, res)=>{
    res.sendFile(__dirname + "/login.html")
})
