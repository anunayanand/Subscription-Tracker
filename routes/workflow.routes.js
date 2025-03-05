import { Router } from "express";

const workflowRouter = Router();

workflowRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to workflow" });
});

export default workflowRouter;