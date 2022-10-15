<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item">
                <a @click="navToggle()" href="#home" class="nav__link">Home</a>
            </li>
            <li class="nav__item">
                <a @click="navToggle()" href="#services" class="nav__link"
                    >My Services</a
                >
            </li>
            <li class="nav__item">
                <a @click="navToggle()" href="#about" class="nav__link"
                    >About me</a
                >
            </li>
            <li class="nav__item">
                <a @click="navToggle()" href="#work" class="nav__link"
                    >My Work</a
                >
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useGeneralStore } from "@stores/generalStore";

const { navToggle } = useGeneralStore();
</script>
