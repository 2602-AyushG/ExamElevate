import ResourceModel from "../models/resource.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";

export const postUploadResource = ErrorWrapper(async (req, res, next) => {
    //extract data from request
    const {name,exam,subject,type,userId}=req.body;
    const {path}=req.file;
    if(!req.file){
        throw new ErrorHandler(400,"Please upload a file")
    }

    //upload file to cloudinary
    const cloudinaryResult=await uploadOnCloudinary(path);
    if(!cloudinaryResult){
        throw new ErrorHandler(500,"File upload failed")
    }

    //now create a resource to the database
    const resource=await ResourceModel.create({
        name,
        exam,
        subject,
        type,
        path:cloudinaryResult.secure_url,
        uploader:userId
    })
    res.status(201).json({
        success:true,
        data:resource
    })
});