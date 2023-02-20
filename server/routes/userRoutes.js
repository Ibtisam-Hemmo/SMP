import { Router } from 'express';
import { getUser, updateUser, deleteUser, followUser, unFollowUser, getAllUsers } from '../controllers/index.js';

const userRouter = Router();

userRouter.get('/:id', getUser);
userRouter.get('/', getAllUsers);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.put('/:id/follow', followUser);
userRouter.put('/:id/unFollow', unFollowUser);

export default userRouter;
