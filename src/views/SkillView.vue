<template>
    <main>
        <TIntro :image="`${slug}.png`">
            <template #title>
                {{ slug.toUpperCase() }}
            </template>
            {{ technologies[slug].subtitle }}
        </TIntro>
        <section class="highlights">
            <h2 class="section__title section__title--highlights">
                Highlights
            </h2>
            <p class="section__subtitle section__subtitle--highlights">
                What I'm proud of!
            </p>
            <TProjects :projects="technologies[slug].projects" />
        </section>
    </main>
</template>

<script setup>
import TIntro from "@components/TIntro.vue";
import TProjects from "@components/TProjects.vue";
import { reactive } from "vue";

const { slug } = defineProps({
    slug: { type: String, required: true },
});

const technologies = reactive({
    vue: {
        subtitle: "Front End!",
        projects: [
            {
                title: "Cursos Alfaweb",
                image: "projects/cursos-alfaweb_project.png",
                description: "Vue + Firebase online course app",
                link: "https://vue-fb-desafio-latam.web.app",
                download: false,
            },
            {
                title: "E-Library",
                image: "projects/e-library_project.png",
                description: "Vue + Firebase online library app",
                link: "https://vuefire-vite.web.app",
                download: false,
            },
        ],
    },
    "html-css-js": {
        subtitle: "The main pillars!",
        projects: [
            /* {
                title: "Suricata",
                image: "notyet",
                description: "Bootstrap 5 restaurant themed website",
                link: "#",
                download: false,
            }, */
        ],
    },
    python: {
        subtitle: "King of data!",
        projects: [
            /* {
                title: "Table renamer",
                image: "notyet",
                description: "Table renamer for Oracle SQL Developer",
                link: "#",
                download: true,
            }, */
        ],
    },
    java: {
        subtitle: "Mine and craft!",
        projects: [],
    },
});
</script>
