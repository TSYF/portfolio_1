<template>
    <section class="work" id="work">
        <header>
            <h2 class="section__title section__title--work">My Work</h2>
            <p class="section__subtitle section__subtitle--work">
                A selection of my range of work
            </p>
        </header>
        <div class="portfolio">
            <a href="#" class="portfolio__item">
                <TCard
                    class="portfolio__card"
                    header="Vue"
                    bg-color="--color-light-tr"
                    padding="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            src="@img/vuejs.png"
                            alt="Vue Framework"
                        />
                    </template>
                </TCard>
            </a>
            <a href="#" class="portfolio__item">
                <TCard
                    class="portfolio__card"
                    header="Vue"
                    bg-color="--color-light-tr"
                    padding="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            src="@img/vuejs.png"
                            alt="Vue Framework"
                        />
                    </template>
                </TCard>
            </a>
            <a href="#" class="portfolio__item">
                <TCard
                    class="portfolio__card"
                    header="Vue"
                    bg-color="--color-light-tr"
                    padding="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            src="@img/vuejs.png"
                            alt="Vue Framework"
                        />
                    </template>
                </TCard>
            </a>
            <a href="#" class="portfolio__item">
                <TCard
                    class="portfolio__card"
                    header="Vue"
                    bg-color="--color-light-tr"
                    padding="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            src="@img/vuejs.png"
                            alt="Vue Framework"
                        />
                    </template>
                </TCard>
            </a>
        </div>
    </section>
</template>

<script setup>
import TCard from "./TCard.vue";
</script>
