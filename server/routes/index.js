import { Router } from 'express';

import authRouter from "./authRoutes";
import userRouter from "./userRoutes";
import postRouter from "./postRoutes";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(postRouter);

export default router;
