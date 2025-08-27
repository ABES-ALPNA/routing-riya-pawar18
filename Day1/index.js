// console.log("Hello")
// const data=require("fs")
// data.writeFileSync("eg.txt","Hello!")

// const readData= data.readFileSync("eg.txt","utf-8")
// console.log(readData)

// const data=require("os")
// console.log(data.platform())

// Local Module

// function sum(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// module.exports={         // Used to make custom module
//     sum,sub
// }

// const data=require("chalk")
// console.log(data.green("Hello!"))
// console.log(data.red("Node"))

const data=require("fs")
data.writeFileSync("hello.txt","Hello Node.js")
const readData= data.readFileSync("hello.txt","utf-8")
console.log(readData)
data.appendFileSync("hello.txt"," Practice makes perfect!")
