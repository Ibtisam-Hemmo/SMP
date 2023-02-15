import { Router } from 'express';

import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import postRouter from "./postRoutes.js";

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use(postRouter);

export default router;
