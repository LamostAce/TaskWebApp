import { RouteRecordRaw, createRouter, createWebHistory} from "vue-router";

///Rutas
const routes: RouteRecordRaw[] = [{
    //Ruta #1
    path: "/",
    alias: "/tasks",
    name: "tasks",
    component: () => import("@/components/TaskList.vue")
},
{
    //Ruta #1
    path: "/tasks/new",
    name: "tasks-new",
    component: () => import("@/components/TaskForm.vue")
},
{
    //Ruta #1
    path: "/tasks/:id",
    name: "tasks-details",
    component: () => import("@/components/TaskDetail.vue")
},

]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router;