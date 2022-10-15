<template>
    <header class="header">
        <router-link :to="{ name: 'home' }" class="logo">
            &lt;dev-tom&gt;
        </router-link>
        <button
            @click="navToggle()"
            class="nav-toggle"
            aria-label="toggle navigation"
        >
            <span class="hamburger"></span>
        </button>
        <TNavbar />
    </header>
</template>

<script setup>
import { useGeneralStore } from "@stores/generalStore";
import TNavbar from "./TNavbar.vue";

const { navToggle } = useGeneralStore();
</script>
