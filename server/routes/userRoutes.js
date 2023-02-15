import { Router } from 'express';
import { getUser, updateUser, deleteUser, followUser, unFollowUser } from '../controllers/index.js';

const userRouter = Router();

userRouter.get('/:id', getUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.put('/:id/follow', followUser);
userRouter.put('/:id/unFollow', unFollowUser);

export default userRouter;
