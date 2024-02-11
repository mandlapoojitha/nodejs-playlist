const express = require("express")
const app= express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/test',(req,res)=>{

    const {username} = req.body
    res.send(`hello ${username}`)
})

app.listen(3000,()=>{
    console.log("app is listening at 3000")
})