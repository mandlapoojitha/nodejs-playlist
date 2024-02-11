const express = require('express')
const router = express.Router();

router.use(express.json());

router.get('/',(req,res)=>{
    res.send("hello world")
})

router.post('/test',(req,res)=>{
    const {username} = req.body;
    res.send(`hello ${username}`)
})


module.exports=router