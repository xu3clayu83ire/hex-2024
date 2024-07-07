<script setup>
import HomeBanner from '@/components/home/banner.vue';
import HomeSection1 from '@/components/home/section1.vue';
import HomeSection2 from '@/components/home/section2.vue';
import HomeSection3 from '@/components/home/section3.vue';
</script>

<template>
  <main class="mb-9 mb-lg-13">
    <HomeBanner />
    <HomeSection1 class="mt-9 mt-lg-13" />
    <HomeSection2 class="mt-9 mt-lg-13" />
    <HomeSection3 class="mt-9 mt-lg-13" />
  </main>
</template>

<style>
.section1 ul>li:nth-child(2) div.img-order {
  order: -1;
}

.section1 ul>li:nth-child(3) img.img-setting1 {
  object-position: 20%;
}

.section3 ul>li:nth-child(1) div.img-order {
  order: -1;
}

.section3 ul>li:nth-child(1) img.img-setting1 {
  object-fit: cover;
  max-width: 730px;
  width: 100%;
  height: 520px;
}

@media (min-width: 992px) {
  .section3 ul>li:nth-child(1) img.img-setting1 {
    object-fit: cover;
    max-width: 730px;
    width: 100%;
    height: 520px;
  }
}
</style>
