import mongoose from "mongoose";

// const productSchema = new mongoose.Schema( {
//     name: {
//         type: 'String',
//         required: true
//     },
//     price: {
//         type: 'Number',
//         required: true
//     },
//     desc : {
//         type: 'String',
//     },
// },
// {
//     versionKey: false,
//     timestamps: true,
// });

const product = mongoose.Schema({
    name: {
        type : String,
        require: true,
    },
    price : {
        type: Number,
        required: true
    },
    quantity : {
        type: Number,
        default: 0
    },
    image: {
        type: String,

    }
}, {
    timestamps: true,
})

export default mongoose.model('Product', product);