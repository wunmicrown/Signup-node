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

