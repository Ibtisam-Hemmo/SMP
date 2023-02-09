import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5050;
app.set('port', port);

app.use([
    bodyParser.json({ limit: '30mb', extended: true }),
    bodyParser.urlencoded({ limit: '30mb', extended: true }),
]);
app.get('/', (req, res) => {
    res.send('Hello there!')
})
app.use(router);

export default app;
