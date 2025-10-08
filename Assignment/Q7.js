const express= require("express")
const app= express()
app.use(express.json())
app.post("/add-user",(req,res)=>{
    const {name,age}= req.body
    res.json({
        message: "User added successfully",
        user: {
            name: name,
            age: age
        }
    });
})
app.listen(4000)