import { createWebHistory, createRouter } from "vue-router";
import Home from "./Home";
import About from "./About";
import Products from "./Products";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/products",
        name: "Products",
        component: Products
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
