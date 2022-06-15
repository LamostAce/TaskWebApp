<template>

        <ul class="list-group">
        <li 
        style="cursor: pointer "
        class="list-group-item list-group-item-action"
        v-for="(task, index) in taskList" 
        :key="index" 
        @click="$router.push('/tasks/'+task._id)"
        >
            {{index+1 +"-"}}
            {{task.title}}
        </li>
    </ul>
 
</template>

<script lang="ts">
import { getTask } from "../services/TaskService";
import { Task } from "../interfaces/Task";
import { defineComponent } from "vue";


export default defineComponent({
    data() {
        return {
            taskList: [] as Task[]
        };
    },
    methods:{
        async loadTasks() {
            const res = await getTask();
            this.taskList = res.data
            console.log(this.taskList);
            
        }
    },
    mounted(){
        this.loadTasks()
    }
})
</script>