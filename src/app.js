import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import userRoutes from '../api/routes/user.route.js';
import authRoutes from '../api/routes/auth.route.js';

const app = express();
app.use(express.json());

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{

    const url = `http://localhost: ${PORT}/`
    console.log(`Listenig on ${url}`)
})

export default app;

