import { Router } from 'express';

import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import postRouter from "./postRoutes.js";
import uploadRouter from './uploadRoute.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/upload', uploadRouter);

export default router;
