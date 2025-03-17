import {Router} from "express";
import { postUploadResource } from "../controllers/resource.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router=Router();
router.post('/upload-resource',upload.single('resource'),postUploadResource);
export default router;