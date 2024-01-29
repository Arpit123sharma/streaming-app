import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
        console.log("db connected successfully!!!",process.env.DBNAME);
    } catch (error) {
        console.error("error in connecting with your localdb: ",error);
    }
}

export {connectDB}