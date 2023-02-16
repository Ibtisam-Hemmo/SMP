import { Router } from 'express';
import { createPost,getPost } from '../controllers/index.js';

const postRouter = Router();

postRouter.post('/', createPost)
postRouter.get('/:id', getPost)

export default postRouter;
