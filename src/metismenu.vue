<template>
    <ul :id="id" :class="{'metismenu': true}">
        <metismenu-item
            :level="level + 1"
            v-for="(item, index) in menu"
            :item="item"
            :key="'metismenu-' + level + '-' + index"
        />
    </ul>
</template>

<script>
import MetisMenu from "metismenujs";
import "metismenujs/dist/metismenujs.min.css";
import MetismenuItem from "./metismenu-item";

export default {
    name: "metismenu",
    components: {
        "metismenu-item": MetismenuItem
    },
    props: {
        id: {
            type: String,
            require: true
        },
        menu: {
            type: Array,
            required: true
        },
        options: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            level: 0,
            selector: "#" + this.id,
            mm: null
        };
    },
    watch: {
        menu() {
            this.$nextTick(() => {
                this.mm.dispose();
                this.mm.update();
            });
        }
    },
    methods: {
        load() {
            const opts =
                "undefined" === typeof this.options ? {} : this.options;

            this.$nextTick(() => {
                this.mm = new MetisMenu(this.selector, opts);
            });
        }
    },
    mounted() {
        this.load();
    }
};
</script>
