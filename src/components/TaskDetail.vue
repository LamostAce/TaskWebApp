<template>
    <div class="col-md-4 offset-md-4">
        <form @submit.prevent="update()" class="card card-body">
            <h3 class="text-center mb-3">Task Detail</h3>
            <input class=" form-control mb-3 " type="text" v-model="currentTask.title">
            <textarea class=" form-control mb-3 " rows="3" v-model="currentTask.description"></textarea>
            <button class="btn btn-success  mb-3" >Update</button>
            <button class="btn btn-danger" @click="handleDelete(), $router.push('/tasks')">Delete</button>
    </form>
    </div>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { defineComponent } from "@vue/runtime-core";
import {getSingleTask, updateTask,deleteTask} from "../services/TaskService"


export default defineComponent({
    data() {
        return{
            currentTask: {} as Task
        }
    },
    methods: {
            async loadTask(id: string){
                const res = await getSingleTask(id);
                console.log(res);
                this.currentTask = res.data
                
            },
            async update(){
                await updateTask(this.currentTask._id,this.currentTask);
            },
            async handleDelete(){
                await deleteTask(this.currentTask._id)
            }
        },
    mounted(){
       if (typeof this.$route.params.id === "string") {
             this.loadTask(this.$route.params.id);
       }
        console.log(this.$route.params.id);
        
    },

})

</script>