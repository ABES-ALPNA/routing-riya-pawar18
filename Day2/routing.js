const server= require("http")
server.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write("This is my first page")
    }
    else if(req.url==="/about")
    {
        res.write("This is my about page")
    }
    else if(req.url==="/contact")
    {
        res.write("This is contact page")
    }
    else{
        res.write("404! Page Not Found")
    }
    res.end()
}).listen(4001,()=>{
    console.log("Server has started")
})