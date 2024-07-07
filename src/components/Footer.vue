<script setup>
import FooterBanner from '@/components/FooterBanner.vue';
</script>
<template>
    <footer>
        <FooterBanner />
        <div class="bg-primary py-4">
            <div class="container">
                <div class="row align-items-center d-flex justify-content-center justify-content-lg-between">
                    <div class="col-12 col-lg-6 d-flex align-items-center">
                        <img class="" src="@/assets/images/logo-w-lg.png" width="128" alt="logo">
                        <p class="ms-4 text-white fs-6">© 2020. All Rights Reserved.</p>
                    </div>
                    <ul class="col text-white fs-5 d-none d-lg-flex">
                        <li class="me-8"><a href="#" class="text-white">Product</a></li>
                        <li class="me-8"><a href="#" class="text-white">Blog</a></li>
                        <li><a href="#" class="text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
@media (min-width: 992px) {}
</style>