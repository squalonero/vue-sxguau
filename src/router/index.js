import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Hero from "../views/Hero.vue";

import Conditions from "../views/player/Conditions.vue";
import Dices from "../views/player/Dices.vue";
import DicesHistory from "../views/player/DicesHistory.vue";
import Stats from "../views/player/Stats.vue";

const routes = [
    { path: '/', name: "Home", component: Home, },
    { path: '/test', name: "Test", component: Test, },
    { path: '/hero/:hero', name: "hero", component: Hero, },
    {
        /**
         * Route level code-splitting
         * this generates a separate chunk (game.[hash].js) for this route
         * which is lazy-loaded when the route is visited.
         */
        path: "/game/:hero",
        name: "Game",
        component: () => import("../views/Game"),

    },
    { path: '/hero/stats/:hero', name: "PlayerStats", component: Hero, },
    { path: '/hero/conditions', name: "PlayerConditions", component: Conditions, },
    { path: '/hero/dices', name: "PlayerDices", component: Dices, },
    { path: '/hero/dices-history', name: "PlayerDicesHistory", component: DicesHistory, },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;