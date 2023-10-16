import ProductModel from "../models/ProductModel.js";

const getAllProducts = async(req, res) => {
    try {
        const data = await ProductModel.find({})
        return  res.send({ hihi:  data })

    } catch (error) {
        
    }
}

export {
    getAllProducts,
}