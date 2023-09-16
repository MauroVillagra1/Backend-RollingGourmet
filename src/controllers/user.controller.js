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
      message: "The product could not be created",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    let user = await User.findOne({ Email: req.body.Email });
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
    res.status(200).json({
        message: "The user is correct"
    })
  } catch (error) {
    res.status(400).json({
      message: "Email or Password incorrect",
    });
  }
};
