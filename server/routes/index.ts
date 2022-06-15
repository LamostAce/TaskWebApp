import { json, Router } from "express";
import Task from "../models/tasks";
const router = Router();

router.get("/tasks", async (req,res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.send(tasks);
});
router.post("/tasks", async (req,res) => {
    console.log(req.body);
    const {title, description }=req.body
    const task = new Task({title, description});
    await task.save();
    console.log(task);
    res.send(task);
});
router.get("/tasks/:id", async (req,res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({message: "Task not found"});
        res.send(task);
    } catch (error) {
        console.log("Cannot get object by ID: BAD ID REQUEST")
        return res.status(500).send(error)
    }
});
router.delete("/tasks/:id", async (req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({message: "Task not found"}); 
        return res.json(task);
    } catch (error) {
        return res.status(500).send(error);
    }
});
router.put("/tasks/:id", async (req,res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(updatedTask);
});
export default router