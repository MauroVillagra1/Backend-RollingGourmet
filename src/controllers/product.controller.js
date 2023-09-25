import { validationResult } from "express-validator"
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
        const errors = validationResult(req)

        if(!errors.isEmpty())
        {
            return res.status(400).json({
                errors : errors.array()
            })
        }

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

export const editProduct  = async (req, res) => {
    try{
        console.log(req.params.id)
        await Product.findByIdAndUpdate(req.params.id,req.body)
        
        res.status(200).json({
            message: "The product was edited successfully"
        }
        )
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            message: "The product could not be edited"
        })
    }
}

export const deleteProduct  = async (req, res) => {
    try{
        console.log(req.params.id)
        await Product.findByIdAndDelete(req.params.id)
        
        res.status(200).json({
            message: "The product was deleted successfully"
        }
        )
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            message: "The product could not be deleted"
        })
    }
}

export const getProduct  = async (req, res) => {
    try{
        console.log(req.params.id)
        const searchedProduct = await Product.findById(req.params.id)
        
        res.status(200).json(searchedProduct)
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            message: "The product could not be geted"
        })
    }
}