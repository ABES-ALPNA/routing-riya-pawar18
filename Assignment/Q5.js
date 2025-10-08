const server= require("http")
server.createServer((req,res)=>{
    res.write("Welcome to Node.js")
    res.end()
}).listen(3000)