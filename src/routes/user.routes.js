import {Router} from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { postSignUp, postLogIn, postLogOut } from '../controllers/user.controller.js';
const router=Router();
router.post('/sign-up',upload.single('coverImage'),postSignUp);
router.post('/log-in',postLogIn);
router.post('/log-out',postLogOut);
export default router;