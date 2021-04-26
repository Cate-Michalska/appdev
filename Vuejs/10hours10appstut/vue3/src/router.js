import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros"; 
import Home from "./pages/Home"; 
import Chats from "./pages/Chats"; 

const routes = [
    { path: "/", component: Home }, 
    { path: "/dc-heros", component: DcHeros},
    { path: "/chats", component: Chats}
]

const router = createRouter({
    history: createWebHistory(),  
    routes,
}); 

export default router; 