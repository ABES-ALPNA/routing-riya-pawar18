const express= require("express")
const app= express()
app.get("/greet",(req,res)=>{
    res.send("<h3>Hello,World!</h3>")
    res.end()
})
app.listen(4000)