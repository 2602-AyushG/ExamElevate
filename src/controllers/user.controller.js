import UserModel from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";

const postSignUp=ErrorWrapper(async(req,res,next)=>{
    const {username,email,password,fullName}=req.body;
    if(!username || !email || !password || !fullName){
        throw new ErrorHandler(400,"Missing input fields")
    }
    const userExists=await UserModel.findOne({email});
    if(userExists){
        throw new ErrorHandler(400,"User already exists")
    }

    let cloudinaryUrl;
    if(req.file){

        const {path}=req.file;
        console.log(path);
        
        const response=await uploadOnCloudinary(path);
        console.log(response);
        
        if(!response){
            throw new ErrorHandler(500,"Image upload failed")
        }
        cloudinaryUrl=response.secure_url;
    }


    const user=await UserModel.create({
        username:username.toLowerCase(),
        email,
        password,
        fullName,
        coverImage:cloudinaryUrl || "",
    })

    const createdUser=await UserModel.findById(user._id).select("-password -refreshToken");

    if(!createdUser){
        throw new ErrorHandler(500,"User could not be created")
    }
    return res.status(201).json({
        success:true,
        data:createdUser
    })
})

const postLogIn=ErrorWrapper(async(req,res,next)=>{
    
})

const postLogOut=ErrorWrapper(async(req,res,next)=>{
    const {id}=req.body;
    if(!id){
        throw new ErrorHandler(400,"Missing Id")
    }

    const user=await UserModel.findById(id);
    if(!user){
        throw new ErrorHandler(404,"User not found")
    }
    user.refreshToken=null;
    await user.save();
    res
    .status(200)
    .cookie("refreshToken","",{httpOnly:true})
    .cookie("accessToken","",{httpOnly:true})
    .json({
        success:true,
        message:"User logged out successfully"
    })
})

export {postSignUp,postLogIn,postLogOut};