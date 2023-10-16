import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: 'string',
        require: true,
    }
}, {
    timestamps : true,
});

export default mongoose.model('ProductModel', productSchema);