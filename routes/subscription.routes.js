import {Router} from "express";
import authorize from "../middlewares/auth.middleware.js";
import { CreateSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'GET all subscriptions'});
});

subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:'GET  subscription details'});
});

subscriptionRouter.post('/',authorize,CreateSubscription);

subscriptionRouter.put('/',(req,res)=>{
    res.send({title:'UPDATE subscription'});
});

subscriptionRouter.delete('/',(req,res)=>{
    res.send({title:'DELETE subscription'});
});

subscriptionRouter.get('/user:id',authorize,getUserSubscriptions);

subscriptionRouter.put('/user:id',(req,res)=>{
    res.send({title:'CANCEL user subscriptions'});
});

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title:'GET upcoming renewals'});
});

export default subscriptionRouter;