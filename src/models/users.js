import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    Name:{
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
    Password:{
        type: String,
        required: true,
        minLength: 8,
        maxLength: 20
    },
    State:{
        type: String,
        required: true
    },
    ProfilePicture:{
        type: String,
        required: true,
        minLength: 10,
        maxLength: 2000
    },
    Role:{
        type: String,
        required: true
    }
})

const User = mongoose.model("user", userSchema)
export default User