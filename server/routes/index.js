import { Router } from 'express';

import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import postRouter from "./postRoutes.js";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(postRouter);

export default router;
