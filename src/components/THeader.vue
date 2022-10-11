<template>
    <header class="header">
        <router-link :to="{ name: 'home' }" class="logo">
            &lt;dev-tom&gt;
        </router-link>
        <button
            @click="navOpen()"
            class="nav-toggle"
            aria-label="toggle navigation"
        >
            <span class="hamburger"></span>
        </button>
        <TNavbar />
    </header>
</template>

<script setup>
import TNavbar from "./TNavbar.vue";

const navOpen = () => document.body.classList.toggle("nav-open");
</script>
