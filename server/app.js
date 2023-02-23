import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import url from 'url';

import router from './routes/index.js';
import { errorMiddleware } from './middlewares/index.js'
dotenv.config();

const app = express();

const port = process.env.PORT || 5050;
app.set('port', port);

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use('/images/', express.static(path.join(__dirname, 'public/images')));

app.use([
    bodyParser.json({ limit: '30mb', extended: true }),
    bodyParser.urlencoded({ limit: '30mb', extended: true }),
    cors(),
    express.json(),
]);


app.use(errorMiddleware)
app.use('/api/v1', router);

export default app;
