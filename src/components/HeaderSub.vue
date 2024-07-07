<script setup>
import { ref } from 'vue'

const items = ref([
    'CHANEL', 'Jo Malone', 'Curology', 'Dior', 'Chloe', 'ZARA'
])
</script>

<template>
    <section class="header-sub bg-primary">
        <div class="container">
            <ul class="d-flex py-3">
                <li v-for=" (item, index) in items" :key="index" class="">
                    <a href="#" class="text-white fs-5"> {{ item }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.header-sub li:not(:last-child) {
    margin-right: 28px;
}

@media (min-width: 992px) {}
</style>