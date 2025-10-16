import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import route from './route/authRoute.js';
import { deleteUnverifiedUser } from './deleteUnverifiedUser/deleteUser.js';

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(cors());


// for test
app.get("/",(req,res)=>{
    res.send("Hello");
});

deleteUnverifiedUser();

// for auth
app.use("/auth",route);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
