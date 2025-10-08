const express=require("express")
const app=express()
const data=require("./data")

app.use(express.json())

app.get("/users",(req,res)=>{
    //res.send(data.users)
    res.json({
        message:"Data displayed",
        data: data.users,
        time: new Date().toLocaleString()
    })
})

app.post("/users",(req,res)=>{
    const data1= req.body;
    data.users= data1.users;
    res.json({
        message:"Users updated",
        data: data.users

    })
})
app.listen(8001,()=>
{
    console.log("server started")
})