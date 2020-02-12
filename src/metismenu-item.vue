<template>
    <!-- //NOSONAR --><li :class="{'mm-active' : item.active}">
        <metismenu-link :item="item" />
        <ul v-if="item.children">
            <metismenu-item
                v-for="(child, childIndex) in item.children"
                :item="child"
                :level="level + 1"
                :key="'metismenu-' + level + '-' + childIndex"
            />
        </ul>
    </li>
</template>

<script>
import MetismenuLink from "./metismenu-link";

export default {
    name: "metismenu-item",
    components: {
        "metismenu-link": MetismenuLink
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        level: {
            type: Number,
            required: true
        }
    },
    mounted() {
        this.$on("mmclick", e => {
            this.$parent.$emit("mmclick", e);
        });
    }
};
</script>
