import { Router } from 'express';
import { createPost, deletePost, getPost, updatePost, likePost, feed } from '../controllers/index.js';

const postRouter = Router();

postRouter.post('/', createPost)
postRouter.get('/:id', getPost)
postRouter.put('/:postId', updatePost)
postRouter.delete('/:postId', deletePost)
postRouter.put('/:postId/like', likePost)
postRouter.get('/:id/feed', feed)

export default postRouter;
