<script setup>
const props = defineProps(['data'])
const data = props.data;
</script>

<template>
    <div class="row">
        <div class="col align-items-center d-flex justify-content-center px-lg-0">
            <div class="text-area mt-1 mt-lg-0">
                <h2 class="fs-2 fw-bold">{{ data.title }}</h2>
                <p class="fs-5 mb-1 mb-lg-3">{{ data.titleSub }}</p>
                <p class="fs-6">{{ data.description }}</p>
                <p class="mt-1 mt-lg-3"><a class="link-primary fs-6 fw-bold" href="#">查看更多</a></p>
            </div>
        </div>
        <div class="img-order col-12 col-lg-6 px-lg-0">
            <div class="text-center">
                <img class="img-setting" :src="data.imageUrl" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-setting {
    object-fit: cover;
    max-width: 345px;
    width: 100%;
    height: 350px;
}

.text-area {
    max-width: 350px;
    width: 100%;
}

.img-order {
    order: -1;
}

@media (min-width: 992px) {
    .img-setting {
        object-fit: cover;
        max-width: 555px;
        width: 100%;
        height: 555px;
    }

    .img-order {
        order: 0;
    }
}
</style>