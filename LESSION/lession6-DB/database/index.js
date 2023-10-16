import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.API_URL)
        .then(
            () => console.log('Connected DB!')
        )
    } catch (error) {
        console.log(error)
    }
}