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
                <li v-for=" (item, index) in items" :key="index" class="fs-5 text-white">{{ item }}</li>
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