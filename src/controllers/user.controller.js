import User from "../models/users.js"

export const listUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
        console.log(users)
    }
    catch(error){
        console.log(error)
        res.status(404).json({
            message: "Error when searching for users"
        })
    }
}

export const createUsers  = async (req, res) => {
    try{
        console.log(req.body)
        const newUsers = new User(req.body)
        await newUsers.save()
        res.status(201).json({
            message: "The Users was created successfully"
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