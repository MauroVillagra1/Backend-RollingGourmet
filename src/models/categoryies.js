import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
    Category:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 30
    }
})

const Category = mongoose.model("category", categorySchema)
export default Category