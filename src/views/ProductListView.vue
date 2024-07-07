<script setup>
import { ref } from 'vue';
import HeaderSub from '@/components/HeaderSub.vue';
import Pagination from '@/components/Pagination.vue';
import productCard from '@/components/common/card/product.vue';

import p1 from '@/assets/images/product/p1.jpg';
import p2 from '@/assets/images/product/p2.jpg';
import p3 from '@/assets/images/product/p3.jpg';
import p4 from '@/assets/images/product/p4.jpg';
import p5 from '@/assets/images/product/p5.jpg';
import p6 from '@/assets/images/product/p6.jpg';
import p7 from '@/assets/images/product/p7.jpg';
import p8 from '@/assets/images/product/p8.jpg';
import p9 from '@/assets/images/product/p9.png';
import p10 from '@/assets/images/product/p10.jpg';
import p11 from '@/assets/images/product/p11.jpg';
import p12 from '@/assets/images/product/p12.jpg';

const datas = ref([
    {
        id: 1,
        imageUrl: p1,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,580',
        discountPrice: '1,380'
    },
    {
        id: 2,
        imageUrl: p2,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,580',
        discountPrice: '1,380'
    },
    {
        id: 3,
        imageUrl: p3,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,380',
        discountPrice: ''
    },
    {
        id: 4,
        imageUrl: p4,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,380',
        discountPrice: ''
    },
    {
        id: 5,
        imageUrl: p5,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,580',
        discountPrice: '1,380'
    },
    {
        id: 6,
        imageUrl: p6,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,580',
        discountPrice: '1,380'
    },
    {
        id: 7,
        imageUrl: p7,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,380',
        discountPrice: ''
    },
    {
        id: 8,
        imageUrl: p8,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,380',
        discountPrice: ''
    },
    {
        id: 9,
        imageUrl: p9,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,580',
        discountPrice: '1,380'
    },
    {
        id: 10,
        imageUrl: p10,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,580',
        discountPrice: '1,380'
    },
    {
        id: 11,
        imageUrl: p11,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,380',
        discountPrice: ''
    },
    {
        id: 12,
        imageUrl: p12,
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        originPrice: '1,380',
        discountPrice: ''
    }
])

</script>

<template>
    <main class="product-list mb-9 mb-lg-13">
        <HeaderSub class="d-none d-lg-block" />
        <div class="container mt-9 mt-lg-15">
            <ul class="row row-cols-lg-4 row-cols-2 row-gap-6 row-gap-lg-13">
                <li v-for=" (item, index) in datas" :key="index">
                    <productCard :data="item" />
                </li>
            </ul>
            <Pagination class="mt-9 mt-lg-15" />
        </div>
    </main>
</template>

<style>
.product-list ul>li:nth-child(2) .img-setting {
    object-position: bottom;
}

.product-list ul>li:nth-child(6) .img-setting {
    object-position: left;
}

@media (min-width: 992px) {}
</style>