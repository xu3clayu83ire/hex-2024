<script setup>
const props = defineProps(['data'])
const data = props.data;
</script>

<template>
    <div class="product-card">
        <div class="product-img-wrapper">
            <img class="img-setting" :src="data.imageUrl" alt="" />
            <div class="img-mask">
                <span>商品詳情</span>
            </div>
        </div>
        <div>
            <h3 class="mt-1">{{ data.name }}</h3>
            <p class="mb-2">{{ data.brand }}</p>
            <p class="product-price">
                <span v-show="data.discountPrice">
                    NT${{ data.discountPrice == '' ? data.originPrice : data.discountPrice }}</span>
                <span :class="data.discountPrice ? 'discount-price-active' : ''" class="order-first">
                    NT${{ data.originPrice }}</span>
            </p>
        </div>
    </div>
</template>

<style scoped>
.product-card {
    max-width: 344px;
    width: 100%;
}

.product-card h3 {
    font-size: 20px;
    font-weight: 600;
}

.product-card .img-setting {
    object-fit: cover;
    max-width: 344px;
    width: 100%;
    height: 350px;
}

.product-card .product-img-wrapper {
    position: relative;
    cursor: pointer;
    text-align: center;
}

.product-card .product-img-wrapper .img-mask {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(101, 101, 101, 0.5);
    color: #ffffff;
    font-weight: bold;
    opacity: 0;
    width: 100%;
    height: 100%;
}

.product-card .product-img-wrapper:hover .img-mask {
    opacity: 1;
}

.product-card .product-img-wrapper .img-mask>span {
    line-height: 350px;
}

@media (min-width: 992px) {
    .product-card {
        max-width: 344px;
    }

    .product-card h3 {
        font-size: 24px;
    }

    .product-card .img-setting {
        max-width: 350px;
        height: 540px;
    }

    .product-card .product-img-wrapper .img-mask>span {
        line-height: 540px;
    }
}
</style>