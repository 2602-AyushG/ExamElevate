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

export const getAllResources = ErrorWrapper(async (req, res, next) => {
    try{
        const resources = await ResourceModel.find();
        res.status(200).json({
            success:true,
            data:resources
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
});

export const updateResource = ErrorWrapper(async (req, res, next) => {
    try{
        //extract data from request
        const {id} = req.params;
        const {name,exam,subject,type,userId}=req.body;
        const {path}=req.file;

        const resources = await ResourceModel.findById(id);

        if(!resources){
            return res.status(400).json({
                success:false,
                message:"Resource not found"
            })
        }
        
        //for new file upload
        if(req.file){
            //upload file to cloudinary
            const cloudinaryResult=await uploadOnCloudinary(path);
            if(!cloudinaryResult){
                throw new ErrorHandler(500,"File upload failed")
            }
            resources.path=cloudinaryResult.secure_url;
        }

        resources.name = name;
        resources.exam = exam;
        resources.subject = subject;
        resources.type = type;
        resources.uploader = userId;

        await resources.save();

        res.status(200).json({
            success:true,
            data:resources
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
});

export const deleteResource = ErrorWrapper( async (req, res, next) => {
    try{
        const {id} = req.params;
        const resources = await ResourceModel.findById(id);
        if(!resources){
            res.status(400).json({
                success:false,
                message:"Resource not found"
            })
        }
        await resources.remove();
        res.status(200).json({
            success:true,
            message:"Resource deleted successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
});

export{postUploadResource,getAllResources,updateResource,deleteResource};