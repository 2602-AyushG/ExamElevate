import {Router} from "express";
import { postUploadResource,getAllResources,updateResource,deleteResource } from "../controllers/resource.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router=Router();
router.post('/upload-resource',upload.single('resource'),postUploadResource);
router.get('/get-all-resource', getAllResources);
router.put('/update-resource/:id',upload.single('resource'),updateResource);
router.delete("/delete-resource/:id",deleteResource);
export default router;