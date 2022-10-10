<template>
    <section class="work" id="work">
        <header>
            <h2 class="section__title section__title--work">My Work</h2>
            <p class="section__subtitle section__subtitle--work">
                A selection of my range of work
            </p>
        </header>
        <div class="portfolio">
            <router-link
                :to="{
                    name: 'skill',
                    params: { slug: slugs.vue },
                }"
                class="portfolio__item"
            >
                <TCard
                    class="portfolio__card"
                    header="Vue"
                    bg-color="--color-light-tr"
                    padding="1em"
                    bd-radius="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            :src="getSRC(`${slugs.vue}.png`)"
                            alt="Vue Framework"
                        />
                    </template>
                </TCard>
            </router-link>
            <router-link
                :to="{
                    name: 'skill',
                    params: {
                        slug: slugs.basicFrontEnd,
                    },
                }"
                class="portfolio__item"
            >
                <TCard
                    class="portfolio__card"
                    header="HTML, CSS & JS"
                    bg-color="--color-light-tr"
                    padding="1em"
                    bd-radius="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            :src="getSRC(`${slugs.basicFrontEnd}.png`)"
                            alt="HTML, CSS & JavaScript"
                        />
                    </template>
                </TCard>
            </router-link>
            <router-link
                :to="{
                    name: 'skill',
                    params: { slug: slugs.python },
                }"
                class="portfolio__item"
            >
                <TCard
                    class="portfolio__card"
                    header="Python"
                    bg-color="--color-light-tr"
                    padding="1em"
                    bd-radius="1em"
                    gap="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            :src="getSRC(`${slugs.python}.png`)"
                            alt="Python"
                        />
                    </template>
                </TCard>
            </router-link>
            <router-link
                :to="{
                    name: 'skill',
                    params: { slug: slugs.java },
                }"
                class="portfolio__item"
            >
                <TCard
                    class="portfolio__card"
                    header="Java"
                    bg-color="--color-light-tr"
                    padding="1em"
                    bd-radius="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            :src="getSRC(`${slugs.java}.png`)"
                            alt="Java"
                        />
                    </template>
                </TCard>
            </router-link>
        </div>
    </section>
</template>

<script setup>
import { inject, reactive } from "vue";
import TCard from "./TCard.vue";

const slugs = reactive({
    vue: "vue",
    basicFrontEnd: "html-css-js",
    python: "python",
    java: "java",
});

const getSRC = inject("getSRC");
</script>
