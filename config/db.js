const mongoose = require('mongoose')

require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }catch(err){
        console.error("MongpDB connection failed:", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;