<template>
    <main>
        <TIntro :image="`${slug}.png`">
            <template #title>
                {{ slug.toUpperCase() }}
            </template>
            {{ texts[slug].subtitle }}
        </TIntro>
    </main>
</template>

<script setup>
import TIntro from "@components/TIntro.vue";
import { reactive } from "vue";

const { slug } = defineProps({
    slug: { type: String, required: true },
});

const texts = reactive({
    vue: {
        subtitle: "Front End!",
    },
    "html-css-js": {
        subtitle: "The main pillars!",
    },
    python: {
        subtitle: "King of data!",
    },
    java: {
        subtitle: "Mine and craft!",
    },
});
</script>
