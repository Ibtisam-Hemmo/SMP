import { Router } from 'express';
import { addMsg, getMsg } from '../controllers/index.js';

const msgRouter = Router();

msgRouter.post('/', addMsg);
msgRouter.get('/:chatId', getMsg);

export default msgRouter