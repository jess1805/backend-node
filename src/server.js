
import {app} from './app.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5050;

connectDB();

const server = app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
})

server.on('error', (err)=>{
    console.log("Server connection failed due to:", err);
})