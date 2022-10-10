<template>
    <THeader />
    <router-view></router-view>
    <TFooter />
</template>

<script setup>
import THeader from "@/components/THeader.vue";
import TFooter from "@/components/TFooter.vue";
import { provide } from "vue";

provide("getSRC", (name) => {
    return new URL(`./assets/img/${name}`, import.meta.url);
});
</script>
