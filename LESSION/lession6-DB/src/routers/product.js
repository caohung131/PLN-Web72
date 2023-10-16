import express from 'express';
import { createProduct, deleteProduct, getAllProduct , getPagingProduct, updateProduct } from '../controllers/Product';

const routerProduct  = express.Router();

routerProduct.get("/", getAllProduct)
routerProduct.post("/", createProduct)
routerProduct.put("/:id", updateProduct)
routerProduct.delete("/:id", deleteProduct)
routerProduct.get("/get-paging", getPagingProduct)

export default routerProduct;