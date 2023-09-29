import { validationResult } from "express-validator"
import Category from "../models/categoryies.js"

export const listCategories = async (req, res) => {
    try{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const categories = await Category.find()
        res.status(200).json(categories)
        console.log(categories)
    }
    catch(error){
        console.log(error)
        res.status(404).json({
            message: "Error when searching for Categories"
        })
    }
}

export const createCategories  = async (req, res) => {
    try{
        console.log(req.body)
        const newCategories = new Category(req.body)
        await newCategories.save()
        res.status(201).json({
            message: "The Category was created successfully"
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