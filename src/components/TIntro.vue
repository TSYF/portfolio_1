<template>
    <section class="intro" id="home">
        <header>
            <h1 class="section__title section__title--intro">
                <slot name="title">
                    Hi, I am <strong>Tomás Yañez</strong>
                </slot>
            </h1>
            <p class="section__subtitle section__subtitle--intro">
                <slot>SOFTWARE DEV</slot>
            </p>
        </header>
        <img
            :src="getSRC(image)"
            :alt="image ? '' : 'a picture of Tomas Yañez smiling'"
            class="intro__img"
            :style="[
                ['png', 'svg'].includes(image.split('.').at(-1))
                    ? {
                          backgroundColor: 'var(--color-light-tr-2)',
                          borderRadius: '1em',
                      }
                    : '',
            ]"
        />
    </section>
</template>

<script setup>
import { useGeneralStore } from "@stores/generalStore";

const { image } = defineProps({
    image: {
        type: String,
        default: "tomas-dev_1.jpeg",
    },
});
const { getSRC } = useGeneralStore();
</script>
