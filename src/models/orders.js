import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    UserID:{
        type: String,
        required: true
    },
    UserName:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 20
    },
    Email:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 320
    },
    ProductID: {
        type: String,
        require: true
    },
    Price:{
        type: Number,
        require: true,
        min: 100,
        max: 100000
    },
    ProductName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    Image: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 2000
    }
})

const Order = mongoose.model("order", orderSchema)
export default Order