const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("hello world with type script day 4")
})

app.listen(3000,(req,res)=>{
    console.log("server listening at 3000")
})