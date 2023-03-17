import { Router } from 'express';
import {
    getUser,
    updateUser,
    followUser,
    getAllUsers,
} from '../controllers/index.js';

const userRouter = Router();

userRouter.get('/:id', getUser);
userRouter.get('/', getAllUsers);
userRouter.put('/:id', updateUser);
userRouter.put('/:id/follow', followUser);

export default userRouter;
