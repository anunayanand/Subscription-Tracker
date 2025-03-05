import express from "express";
import {PORT} from './config/env.js'
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.routes.js";
import workflowRouter from "./routes/workflow.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);
app.use('/api/v1/workflow',workflowRouter);

app.use(errorMiddleware);
app.use(arcjetMiddleware);

app.get("/",(req,res)=>{
    res.send("Welocme to the subscription tracker");
});

app.listen(PORT,async ()=>{
    console.log(`Subscription Tracker is running at http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;