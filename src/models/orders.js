import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    UserID:{
        type: String,
        required: true
    },
    UserName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    ProductID: {
        type: String,
        require: true
    },
    Price:{
        type: Number,
        require: true
    },
    ProductName: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    }
})

const Order = mongoose.model("order", orderSchema)
export default Order