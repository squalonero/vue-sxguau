import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Game2 from "../views/Game2.vue";

import Conditions from "../views/player/Conditions.vue";
import Dices from "../views/player/Dices.vue";
import DicesHistory from "../views/player/DicesHistory.vue";
import Stats from "../views/player/Stats.vue";

const routes = [
    { path: '/', name: "Home", component: Home, },
    { path: '/test', name: "Test", component: Test, },
    { path: '/game2/:hero', name: "game2", component: Game2, },
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
    { path: '/game/stats/:hero', name: "PlayerStats", component: Stats, },
    { path: '/game/conditions', name: "PlayerConditions", component: Conditions, },
    { path: '/game/dices', name: "PlayerDices", component: Dices, },
    { path: '/game/dices-history', name: "PlayerDicesHistory", component: DicesHistory, },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;