import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://Web72:Caohung1311@cluster0.hasa2kf.mongodb.net/BT_Database')
        .then( () => {
            console.log('conected db')
        })
    } catch (error) {
        console.log(error)
    }
}
