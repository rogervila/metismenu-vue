<template>
    <a
        :class="{'has-arrow': item.hasArrow}"
        @click.prevent="handleClick"
        :aria-expanded="item.active"
        :href="item.href ? item.href : '#'"
        v-text="item.text"
    ></a>
</template>

<script>
export default {
    name: "metismenu-link",
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleClick(e) {
            this.$parent.$emit("mmclick", {
                item: this.item,
                event: e
            });
        }
    }
};
</script>
