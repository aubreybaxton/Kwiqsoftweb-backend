import mongoose from "mongoose";

const dbconnection = async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(" DB is connected Successfully ")
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

export default dbconnection;