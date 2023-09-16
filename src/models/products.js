import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    NameProduct:{
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 50
    },
    State:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true,
        min: 100,
        max: 100000
    },
    Details:{
        type: String,
        required: true,
        minLength: 20,
        maxLength: 500
    },
    CategoriesID: {
        type: Array,
        required: true
    },
    Image: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 2000
    },
    Stock:{
        type: Number,
        required: true,
        min: 1,
        max: 100
    }

})

const Product = mongoose.model("product", productSchema)
export default Product