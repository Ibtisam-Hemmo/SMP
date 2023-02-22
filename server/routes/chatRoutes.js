import { Router } from 'express';
import { createChat, getChat, userChats } from '../controllers/index.js'

const chatRouter = Router();

chatRouter.post('/', createChat);
chatRouter.get('/:userId', userChats);
chatRouter.get('/find/:firstId/:secondId', getChat);

export default chatRouter;
