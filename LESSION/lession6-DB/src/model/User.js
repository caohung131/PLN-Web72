

import mongoose from "mongoose";


const User = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "customer"
    },
    name:{
        type: String,
    },
    age: {
        type: Number,
    }

})

export default mongoose.model("Users", User)