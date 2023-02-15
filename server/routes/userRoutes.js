import { Router } from 'express';
import { getUser, updateUser } from '../controllers/index.js';

const userRouter = Router();

userRouter.get('/:id', getUser);
userRouter.put('/:id', updateUser);

export default userRouter;
