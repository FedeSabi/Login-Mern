import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Conexión a MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
}
