// const express= require('express')
import express from 'express'
const app = express();

app.get('/',(req,res)=>{
    res.send("hello poojitha")
})
app.listen(3000,(req,res)=>{
    console.log("app listening at port 3000")
})