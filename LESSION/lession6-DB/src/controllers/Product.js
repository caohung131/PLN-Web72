import Product from "../model/Product";
import joi from "joi"

export const getAllProduct = async (req, res) => {
    try {
        const data = await Product.find({})
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
            name: error.name
        });
    }
}

export const createProduct = async (req, res) => {
    try {
        //cach 1
        // const data = await Product.create(req.body);
        // if(!data) {
        //     res.status(404).json({
        //         message: 'Khong the tao san pham'
        //     });
        // }
        // console.log(data)
        
        // Cach 2

        const productSchema = joi.object({
            name: joi.string().required().min(3).max(32).messages({
                "string.min": "Tên phải có 3 kí tự trở lên",
                "string.max": "Tên phải bé hơn 32 kí tự",
                "any.required": "Tên không được trống",
                "string.base": "Tên phải là kiểu dữ liệu string",
            }),
            price: joi.number().required().messages({
                "any.required": "Giá tiền không được bỏ trống",
            }),
            quantity: joi.number().messages({
                "any.required": "Giá tiền không được bỏ trống",

            }),
            image: joi.string().messages({
                "any.required": "Giá tiền không được bỏ trống",

            })
          
        }).unknown(true);


        const { name, price, quantity, image} = req.body;

        const validate = productSchema.validate({name, price, quantity, image});
        if(validate.error) {
            console.log(validate.error)
            return res.status(400).json({error: validate.error})
        }

      
        const newProduct = await Product.create({name, price, quantity, image});

        if(!newProduct) {
                res.status(404).json({
                    message: 'Khong the tao san pham'
                });
            }

        return res.status(201).json({
            message: 'Them moi san pham thanh cong',
            "data" : newProduct
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
            name: error.name
        });
    }
}

const updateProduct = async (req, res) => {
   try {
    const id = req.params.id;
    const { name, price, quantity, image} = req.body;
    
    const product = await Product.findOneAndUpdate({_id : id}, {
        name,
        price,
        quantity,
        image
    }, {new: true});

    return res.status(200).json({message: "Update sản phẩm thành công", product})
   } catch (error) {
    return res.status(400).json({
        error: error.message || "Failed"
    })
   }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findOneAndDelete({ _id : id})
        return res.status(200).json({message: "Xóa sản phẩm thành công"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            error: error.message || "Failed"
        })
    }
};

const getPagingProduct = async (req, res) => {
    try {
        const pageSize = req.query.pageSize || 5;  // Số lượng phần tử 1 trang
        const pageIndex = req.query.pageIndex || 1 ; // Số trang nào

        const product = await Product.find({}).skip(pageSize * pageIndex - pageSize).limit(pageSize);
        const count = await Product.countDocuments();

        const totalPage = Math.ceil(count / pageSize)

        return res.status(200).json({product, count, totalPage})
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            error: error.message || "Failed"
        })
    }
}

export {
    updateProduct,
    deleteProduct,
    getPagingProduct
}