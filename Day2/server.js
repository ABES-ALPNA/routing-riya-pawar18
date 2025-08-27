const server= require("http")
server.createServer((req,res)=>{
    // res.write("<h1>This is my server</h1>")
    // res.end("")
    if(req.url=="./")
    {
        res.write("This is my first page")
    }
}).listen(4000,()=>{
    console.log("Server has started")
})