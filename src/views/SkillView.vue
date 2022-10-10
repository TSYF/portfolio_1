<template>
    <main>
        <TIntro :image="`${slug}.png`">
            <template #title>
                {{ slug.toUpperCase() }}
            </template>
            A JavaScript framework for Front-End development.
        </TIntro>
    </main>
</template>

<script setup>
import TIntro from "@components/TIntro.vue";
const { slug } = defineProps({
    slug: { type: String, required: true },
});
</script>
