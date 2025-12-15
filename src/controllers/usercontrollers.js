
import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/usermodel.js";

const addUser = asyncHandler(async(req, res) => {
    // get user details from frontend
    const {name, email, phone_number} = req.body

    // validation - not empty
    if(!name || !email || !phone_number){
        throw new ApiError(400, "All fields are required")
    }

    // check if email is unique
    const existeduser = await User.findOne({email})
    if(existeduser){
        throw new ApiError(409, "User with email already exists")
    }
    // phone number must be 10 characters long only
    if (phone_number.length !== 10) {
    throw new ApiError(400, "Phone number must have 10 digits")
    }
    // create user object and Save user to database
    const user = await User.create({
        name, email, phone_number
    })

    // Send success response
    return res.status(201).json({
        success: true,
        message:"User created successfully",
        data: user
    })
}
)

const getAllUsers = asyncHandler(async(req,res)=>{
    const users = await User.find()

    if(!users || users.length === 0){
        throw new ApiError(404, "No users found")
    }

    return res.status(200).json({
        success:true,
        message:"Users fetched successfully",
        data: users
    })
})

const getUserbyID = asyncHandler(async(req, res) => {
    const {id} = req.params
    const userexists = await User.findById(id)
    if(!userexists){
        throw new ApiError(404, "User not found")
    }

    return res.status(200).json({
        success:true,
        message:"User fetched successfully",
        data:userexists
    })
})

const deleteUser = asyncHandler(async(req, res) => {
    const {id} = req.params
    const userexists = await User.findById(id)

    if(!userexists){
        throw new ApiError(404, "UserID doesn't exist, cannot delete")
    }

    await User.findByIdAndDelete(id)

    return res.status(200).json({
        success:true,
        message:"User deleted successfully",
    })
})

const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, email, phone_number } = req.body;

    const userExists = await User.findById(id);

    if (!userExists) {
        throw new ApiError(404, "UserID doesn't exist, cannot update");
    }

    // Build update object only with provided fields
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone_number) updateData.phone_number = phone_number;

    if (Object.keys(updateData).length === 0) {
        throw new ApiError(400, "No fields provided to update");
    }

    const updatedUser = await User.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true
        }
    );

    return res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updatedUser
    });
});

export {addUser, getAllUsers, getUserbyID, deleteUser, updateUser}