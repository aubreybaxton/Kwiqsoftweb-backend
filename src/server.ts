import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { corsOptions } from './constants/cors.config.ts';
import cookieParser from 'cookie-parser';
import dbconnection from './db/connection.db.ts';
import { userRouter } from './routes/user.routes';

const app = express();

const PORT = process.env.PORT || 14000;
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));



app.get('/', (req, res) => {
    res.send('Hello from MyApp Backend!');
})

app.use('/api/user', userRouter);

dbconnection().then(() => {
    app.listen(PORT, () => {
        console.log(`MyApp Backend is running on port ${PORT}`);
    })
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
})