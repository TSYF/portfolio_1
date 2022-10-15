<template>
    <THeader />
    <router-view></router-view>
    <TFooter />
</template>

<script setup>
import THeader from "@/components/THeader.vue";
import TFooter from "@/components/TFooter.vue";
</script>
