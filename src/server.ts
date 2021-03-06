import express from 'express';
import 'express-async-errors';
import routers from '@routers/index';
import errorHandler from './app/errors/handler';
import cors from 'cors';
import '@database/connect';
import { IEnv } from '@interfaces/IEnv';

const { HOST, PORT } = process.env as IEnv;

const app = express()

app.use(cors({
    exposedHeaders:['*']
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routers);
app.use(errorHandler);

app.listen(PORT, () => console.log('api', `server ${HOST}:${PORT}`));