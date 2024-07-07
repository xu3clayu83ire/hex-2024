<script setup>
import { ref } from 'vue';
import productCard2 from '@/components/common/card/product2.vue';

import img1 from '@/assets/images/home/section2/index1.jpg';
import img2 from '@/assets/images/home/section2/index2.jpg';
import img3 from '@/assets/images/home/section2/index3.jpg';

const datas = ref([
    {
        id: 1,
        imageUrl: img1,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,580',
        discountPrice: '1,380'
    },
    {
        id: 2,
        imageUrl: img2,
        name: 'Body Wash',
        brand: 'Curology',
        originPrice: '1,580',
        discountPrice: ''
    },
    {
        id: 3,
        imageUrl: img3,
        name: 'Apple Cider Vinegar Capsule',
        brand: 'Tonik',
        originPrice: '1,580',
        discountPrice: ''
    }
]);
</script>

<template>
    <section class="section2 bg-info">
        <div class="container py-7 py-lg-9">
            <ul class="row row-cols-1 row-cols-lg-3 row-gap-7 row-gap-lg-0 d-flex justify-content-center">
                <li v-for="data in datas" :key="data.id" class="d-flex justify-content-center">
                    <productCard2 :data="data" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
@media (min-width: 992px) {}
</style>