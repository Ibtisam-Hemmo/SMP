import { Router } from 'express';
import { register, login } from '../controllers/auth/index.js';

const authRouter = Router();

authRouter.post('/api/v1/auth/register', register);
authRouter.post('/api/v1/auth/login', login);

export default authRouter;
