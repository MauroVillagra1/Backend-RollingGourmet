import Order from "../models/orders.js";

export const listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
    console.log(orders);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error when searching for orders",
    });
  }
};

export const createOrders = async (req, res) => {
  try {
    console.log(req.body);
    const newOrders = new Order(req.body);
    await newOrders.save();
    res.status(201).json({
      message: "The Orders was created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "The product could not be created",
    });
  }
};
export const deleteOrders = async (req, res) => {
  try {
    console.log(req.params.id);
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "The order was deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "The order could not be deleted",
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    console.log(req.params.id);
    const searchedOrder = await Order.findById(req.params.id);

    res.status(200).json(searchedOrder);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "The Order could not be geted",
    });
  }
};

export const editOrders = async (req, res) => {
  try {
    
    console.log(req.params.id);
    await Order.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "The Order was edited successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "The order could not be edited",
    });
  }
};
