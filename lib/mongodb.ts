import mongoose from "mongoose";

const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
    throw new Error("Invalid environment variable: MONGODB_URI");
}

export const connectToMongoDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI)

        if (connection.readyState === 1) {
            return Promise.resolve(true)
        }

    } catch (error) {
        return Promise.reject(error)
    }
}
