
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userroutes.js';

const app = express();

app.use(cors()); //change this after fe

app.use(express.json());

app.use("/api/users", userRoutes);

export {app}