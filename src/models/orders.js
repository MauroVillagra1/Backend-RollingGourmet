import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    Order:{
        type: Array,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    Adress:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    }
})

const Order = mongoose.model("order", orderSchema)
export default Order