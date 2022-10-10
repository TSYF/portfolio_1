import { createRouter, createWebHistory } from "vue-router";

import MainView from "@views/MainView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: MainView,
    },
    {
        path: "/skill/:slug",
        name: "skill",
        props: true,
        component: () => import("@views/SkillView.vue"),
    },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
