import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { corsOptions } from './constants/config.ts';
import cookieParser from 'cookie-parser';

const app = express();

const PORT = process.env.PORT || 14000;
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/user',userRouter)

app.get('/', (req, res) => {
    res.send('Hello from MyApp Backend!');
})

app.listen(PORT, () => {
    console.log(`MyApp Backend is running on port ${PORT}`);
})