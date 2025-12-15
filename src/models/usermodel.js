
import mongoose, {Schema} from "mongoose";

const Userschema = new Schema({

    email:{
        type: String,
        required: true,
        unique: true,
        trim:true,
        index:true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"]
    }, name:{
        type: String,
        required: true,
        trim:true
    }, phone_number:{
        type: String,
        required: true,
        unique: true,
        trim:true
    }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", Userschema)

export {User};
