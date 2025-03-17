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
    const {email, password}= req.body;
    if(!email || !password){
        throw new ErrorHandler(400,"Missing input fields")
    }
    const userExists=await UserModel.findOne({email});
    if(!userExists){
        throw new ErrorHandler(400,"User don't exists")
    }
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    if(!isPasswordValid){
        throw new ErrorHandler(400,"Password is incorrect")
    }
    //generate jwt token if password matches
    const token = jwt.sign({id:userExists._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES});
    res.status(200).json({
        success:true,
        data:{
            token,
            user:userExists
        }
    })
})

const postLogOut=ErrorWrapper(async(req,res,next)=>{
    res.setCookie("token","");
    res.json({
        message:"Log out successful"
    });
})

export {postSignUp,postLogIn,postLogOut};