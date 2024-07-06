<script setup>
import HomeBanner from '@/components/home/banner.vue';
import HomeSection1 from '@/components/home/section1.vue';

</script>

<template>
  <main>
    <HomeBanner />
    <HomeSection1 />
  </main>
</template>

<style>
.section1 ul>li:nth-child(2) div.img-order {
  order: -1;
}

.section1 ul>li:nth-child(3) img.img-type1 {
  object-position: 20%;
}
</style>
