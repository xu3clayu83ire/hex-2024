<script setup>
import HomeBanner from '@/components/home/banner.vue';
import HomeSectionInfo from '@/components/home/sectionInfo.vue';
import HomeSectionProduct from '@/components/home/sectionProduct.vue';
import HomeSectionIntro from '@/components/home/sectionIntro.vue';
</script>

<template>
  <main class="mb-9 mb-lg-13">
    <HomeBanner />
    <HomeSectionInfo class="mt-9 mt-lg-13" />
    <HomeSectionProduct class="mt-9 mt-lg-13" />
    <HomeSectionIntro class="mt-9 mt-lg-13" />
  </main>
</template>

<style>
.section-info ul>li:nth-child(2) div.img-order {
  order: -1;
}

.section-info ul>li:nth-child(3) img.img-setting1 {
  object-position: 20%;
}

.section-intro ul>li:nth-child(1) div.img-order {
  order: -1;
}

.section-intro ul>li:nth-child(1) img.img-setting1 {
  object-fit: cover;
  max-width: 730px;
  width: 100%;
  height: 520px;
}

@media (min-width: 992px) {
  .section-intro ul>li:nth-child(1) img.img-setting1 {
    object-fit: cover;
    max-width: 730px;
    width: 100%;
    height: 520px;
  }
}
</style>
