import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import url from 'url';
import cookieParser from 'cookie-parser'
import router from './routes/index.js';
import { errorMiddleware } from './middlewares/index.js'

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
app.set('port', port);

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use('/images/', express.static(path.join(__dirname, 'public/images')));

app.use([
    bodyParser.json({ limit: '30mb', extended: true }),
    bodyParser.urlencoded({ limit: '30mb', extended: true }),
    cors(),
    express.json(),
    cookieParser()
]);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
}

app.use('/api/v1', router);
app.use(errorMiddleware)

export default app;
