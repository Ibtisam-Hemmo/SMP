import { Router } from 'express';
import { register } from '../controllers/auth/index.js';

const authRouter = Router();

authRouter.post('/api/v1/auth/register', register);

export default authRouter;
