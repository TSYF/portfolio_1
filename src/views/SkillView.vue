<template>
    <main>
        <TIntro :image="`${slug}.png`">
            <template #title>
                {{ slug.toUpperCase() }}
            </template>
            {{ texts[slug].subtitle }}
        </TIntro>
        <section class="highlights">
            <h2 class="section__title section__title--highlights">
                Highlights
            </h2>
            <p class="section__subtitle section__subtitle--highlights">
                What I'm proud of!
            </p>
            <TProjects :projects="projects[slug]" />
        </section>
    </main>
</template>

<script setup>
import TIntro from "@components/TIntro.vue";
import TProjects from "@components/TProjects.vue";
import { useGeneralStore } from "@stores/generalStore.js";

const { slug } = defineProps({
    slug: { type: String, required: true },
});

const { projects, texts } = useGeneralStore();
</script>
