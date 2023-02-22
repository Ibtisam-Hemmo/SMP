import { Router } from 'express';

import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import postRouter from "./postRoutes.js";
import uploadRouter from './uploadRoute.js';
import chatRouter from './chatRoutes.js';
import msgRouter from './msgRoutes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/upload', uploadRouter);
router.use('/chat', chatRouter);
router.use('/msg', msgRouter);

export default router;
