import generarJWT from "../helpers/token-sign.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";
export const listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    console.log(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error when searching for users",
    });
  }
};

export const createUsers = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    let user = await User.findOne({ Email: req.body.Email });
    if (!user) {
      const newUsers = new User(req.body);
      const salt = bcrypt.genSaltSync(10);
      newUsers.Password = bcrypt.hashSync(Password, salt);
      await newUsers.save();
      res.status(201).json({
        message: "The Users was created successfully",
        UserName: newUsers.Name,
        _id: newUsers._id,
      });
    }
    res.status(400).json({
      message: "The user exists",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "The users could not be created",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    let user = await User.findOne({ Email });
    if (!user) {
      return res.status(400).json({
        message: "Email or Password Incorrect",
      });
    }
    const validPassword = bcrypt.compareSync(Password, user.Password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Email or Password Incorrect",
      });
    }
    if(user.State === "Suspended")
    {
      return res.status(400).json({
        message: "User Suspended",
      });
    }
    if (user.Role === "Admin")
    {
      const token = await generarJWT(user._id, user.Name, user.Role)
      res.status(200).json({
        message: "The user is correct",
        uid: user._id,
        name: user.Name,
        token: token,
        rol: user.Role,
        img: user.ProfilePicture
    })
    }
    else{
      res.status(200).json({
        message: "The user is correct",
        uid: user._id,
        name: user.Name,
        token: "",
        rol: user.Role,
        img: user.ProfilePicture

    })
    }
    
  } catch (error) {
    res.status(400).json({
      message: "Email or Password incorrect",
    });
  }
};

export const editUser  = async (req, res) => {
  try{
      console.log(req.params.id)
      await User.findByIdAndUpdate(req.params.id,req.body)
      
      res.status(200).json({
          message: "The User was edited successfully"
      }
      )
  }
  catch(error){
      console.log(error)
      res.status(400).json({
          message: "The User could not be edited"
      })
  }
}