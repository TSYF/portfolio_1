<template>
    <div class="card" :style="styleTemplate">
        <slot name="img"></slot>
        <div class="card__body">
            <header class="card__header">
                <slot name="header">
                    <h3 class="card__title">{{ header }}</h3>
                </slot>
            </header>
            <p class="card__text">
                <slot>
                    This slot is meant to be used as a text content inside a
                    paragraph.
                </slot>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    header: {
        required: false,
        type: String,
    },
    bgColor: {
        default: "inherit",
        required: false,
        type: String,
    },
    txtColor: {
        default: "inherit",
        required: false,
        type: String,
    },
    bdRadius: {
        default: "inherit",
        required: false,
        type: String,
    },
    padding: {
        default: "inherit",
        required: false,
        type: String,
    },
    gap: {
        default: "inherit",
        required: false,
        type: String,
    },
});

const { bgColor, txtColor, bdRadius, padding, gap } = props;

const cssVar = (val) =>
    val.charAt(0) + val.charAt(1) === "--" ? `var(${val})` : val;

const styleTemplate = ref(
    `
    --bg-color: ${cssVar(bgColor)};
    --txt-color: ${cssVar(txtColor)};
    --bd-radius: ${cssVar(bdRadius)};
    --pd: ${cssVar(padding)};
    --gap: ${cssVar(gap)};
    `
);
</script>

<style lang="scss" scoped>
.card {
    background-color: var(--bg-color);
    color: var(--txt-color);
    border-radius: var(--bd-radius);
    padding: var(--pd);
}
</style>

<style>
div.card > .card__img {
    margin-bottom: var(--gap);
}
</style>
