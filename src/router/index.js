import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Game2 from "../views/Game.vue";

const routes = [
    { path: '/', name: "Home", component: Home, },
    { path: '/test', name: "Test", component: Test, },
    { path: '/game2', name: "game2", component: Game2, },
    {
        /**
         * Route level code-splitting
         * this generates a separate chunk (game.[hash].js) for this route
         * which is lazy-loaded when the route is visited.
         */
        path: "/game",
        name: "Game",
        component: () => import("../views/Game"),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;