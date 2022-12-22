const { response } = require("express")
const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.write("<h1>this is home page</h1>")
})
app.get('/login',(req,res)=>{
    res.write("<h1>this is login page</h1>")
})
app.listen(2000,()=>{console.log("server started at 2000")})