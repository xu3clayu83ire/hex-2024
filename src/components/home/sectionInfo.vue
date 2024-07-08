<script setup>
import { ref } from 'vue';
import ItemRowType from '@/components/common/item/rowType.vue';

import img1 from '@/assets/images/home/section-info/index1.jpg';
import img2 from '@/assets/images/home/section-info/index2.png';
import img3 from '@/assets/images/home/section-info/index3.jpg';
import img4 from '@/assets/images/home/section-info/index4.jpg';

const data1 = ref([
    {
        id: 1,
        imageUrl: img1,
        title: 'Gabrielle CHANEL',
        titleSub: '全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。'
    },
    {
        id: 2,
        imageUrl: img2,
        title: 'Five O’clock Au Gingembre',
        titleSub: '生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。'
    },
    {
        id: 3,
        imageUrl: img3,
        title: 'CHANEL N°5',
        titleSub: 'N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。'
    }
]);

const data2 = ref([
    {
        id: 1,
        title: 'Levels of Preventive Maintenance Compliance',
        description: 'The planned maintenance percentage is the total planned maintenance time in your CMMS software over a date range over the total number of hours of a service performed by the technicians.'
    },
    {
        id: 2,
        title: 'Percentage of Planned Maintenance',
        description: 'The core idea of preventative maintenance is the performance of proactive actions against unscheduled downtime in order to identify potential defects before they evolve into something more severe.'
    },
    {
        id: 3,
        title: 'Critical percentage of planned maintenance',
        description: 'Calculating the critical percentage of planned maintenance will help you prioritize the most important operations that should be performed immediately.'
    }
]);

</script>

<template>
    <section class="section-info">
        <div class="container">
            <ul class="row row-gap-7 row-gap-lg-0 d-flex justify-content-center">
                <li v-for=" data in data1" :key="data.id" class="col-12">
                    <ItemRowType :data="data" />
                </li>
                <li class="col-12">
                    <div class="row">
                        <div class="col-12 col-lg-6 px-0">
                            <div class="text-center">
                                <img class="img-last-setting" :src="img4" alt="" />
                            </div>
                        </div>
                        <div class="col align-items-center d-flex justify-content-center">
                            <ul class="text-area mt-1 mt-lg-0">
                                <li v-for="data in data2" :key="data.id" class="mb-4">
                                    <div>
                                        <h2 class="fs-5 fw-bold">{{ data.id }}.<br>{{ data.title }}</h2>
                                        <p>{{ data.description }}</p>
                                    </div>
                                </li>
                                <li class="mt-10">
                                    <button class="btn btn-outline-dark rounded-5 fs-5 border-2 px-11">Plan a free
                                        online
                                        training</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.img-last-setting {
    object-fit: cover;
    max-width: 345px;
    width: 100%;
    height: 680px;
}

.text-area {
    max-width: 350px;
}

@media (min-width: 992px) {
    .img-last-setting {
        object-fit: cover;
        max-width: 555px;
        width: 100%;
        height: 1080px;
    }
}
</style>