const server= require("http")
server.createServer((req,res)=>{
    res.write("This is a simple server")
    res.end("")
}).listen(4000)
