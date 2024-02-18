require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose');
const dbConnect = require('./dbconnect');
const userModel = require('./models/usermodel');

app.get('/userdetails',async(req,res)=>{
    res.send("user details")
})
app.post('/userdetails',async(req,res)=>{
    const {firstname}= req.body;
    await dbConnect();
    try {
    const user = new userModel.create({firstname});
    console.log("++++++++++++++++user",user);
    res.status(200).json({message : "user added successfully",user})
        
    } catch (error) {
        console.log("Error in adding user details");
        
    }
    
})

app.listen(3000,()=>{
    console.log('server listening at 3000')
})