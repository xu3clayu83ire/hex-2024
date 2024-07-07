<script setup>
import { ref } from 'vue';
import ItemType1 from '@/components/common/item/type1.vue';
import img1 from '@/assets/images/home/section3/index1.jpg';
const datas = ref([{
    id: 1,
    imageUrl: img1,
    title: 'Bottle-Recycling',
    titleSub: 'Recycle your used empty bottles and be rewarded!',
    description: 'For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.'
}]);
</script>

<template>
    <section class="section3">
        <div class="container">
            <ul>
                <li v-for=" data in datas" :key="data.id">
                    <ItemType1 :data="data" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
@media (min-width: 992px) {}
</style>