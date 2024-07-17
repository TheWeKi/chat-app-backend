import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDatabase;