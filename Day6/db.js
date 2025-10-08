const mongoose= require("mongoose")
async function connectDB()
{
    try
    {
       await mongoose.connect("mongodb+srv://riyapawar941:riyaDB@cluster1.w6u39lp.mongodb.net/mernDB?retryWrites=true&w=majority&appName=Cluster1")
        console.log("database connected")
    }
    catch(err)
    {
        console.log(err)
    }
}
module.exports= {connectDB};