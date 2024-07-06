<script setup></script>

<template>
    <section class="banner">
        <div class="position-ralative">
            <img src="@/assets/images/home/banner.jpg" alt="" />
        </div>
        <div
            class="text-area-wrap container end-0 position-absolute start-0 d-flex align-items-center justify-content-center justify-content-lg-end">
            <div class="text-area text-white">
                <h1 class="fw-bold">Perfume your day</h1>
                <p class="fs-4 mb-3">A perfume is like a piece of clothing, a message, a way of presenting oneself a
                    costume
                    that
                    according to the person who wears it.</p>
                <button class="btn btn-outline-light fs-3 rounded-5 w-100">Shop now</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.banner img {
    object-fit: cover;
    width: 100%;
    height: 480px;
}

.banner .text-area-wrap {
    height: 480px;
    top: 56px;
}

.banner .text-area {
    max-width: 445px;
}

@media (min-width: 992px) {
    .banner img {
        object-fit: cover;
        width: 100%;
        height: 870px;
    }

    .banner .text-area-wrap {
        height: 870px;
    }
}
</style>