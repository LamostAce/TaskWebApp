import axios  from "./axios"
import { Task } from "../interfaces/Task";
import { AxiosResponse } from "axios";

export const getTask =async (): Promise<AxiosResponse<Task[]>> => await axios.get("/tasks") 

export const getSingleTask =async (id: string): Promise<AxiosResponse<Task>> => await axios.get("/tasks/"+id) 

export const updateTask =   async (id:string, task: Task)=> await axios.put("/tasks/"+id,task)
export const deleteTask =   async(id:string) => await axios.delete("/tasks/"+id);

export const createTask =async (taskIn: Task) => await axios.post("/tasks",taskIn);
    
