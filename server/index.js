import app from './app.js';
import mongoose from 'mongoose';

const port = app.get('port');

mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(port, () =>
            console.log(`Server is listening at http://localhost:${port}`)
        )
    )
    .catch((error) => console.log(error))

mongoose.set('strictQuery', false);
