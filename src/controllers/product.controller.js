import Product from "../models/products.js"

export const listProducts = async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)
        console.log(products)
    }
    catch(error){
        console.log(error)
        res.status(404).json({
            message: "Error when searching for products"
        })
    }
}

export const createProduct  = async (req, res) => {
    try{
        console.log(req.body)
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(201).json({
            message: "The product was created successfully"
        }
        )
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            message: "The product could not be created"
        })
    }
}