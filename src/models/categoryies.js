import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
    Category:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 30,
        unique: true
    }
})

const Category = mongoose.model("category", categorySchema)
export default Category