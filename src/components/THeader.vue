<template>
    <header class="header">
        <div class="logo">
            <span>&lt;dev-tom&gt;</span>
        </div>
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
