<template>
    <header>
        <div class="logo">
            <span>&lt;dev-tom&gt;</span>
        </div>
        <button class="nav-toggle" aria-label="toggle navigation">
            <span class="hamburger"></span>
        </button>
        <TNavbar />
    </header>
</template>

<script setup>
import TNavbar from "./TNavbar.vue";
</script>

<style lang="scss" scoped>
.logo {
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
}
</style>
