<template>
    <section class="footer-banner">
        <div>
            <img src="@/assets/images/footer-banner.jpg" alt="" />
        </div>
        <div class="text-area-wrap container d-flex align-items-center">
            <div class="text-area">
                <h2 class="fw-bold text-secondary mb-4">記得<br>訂閱以獲取更多資訊！</h2>
                <div class="border border-2 border-primary d-flex rounded-2">
                    <div class="bg-white w-100 text-secondary py-3 px-5 rounded-start-2">
                        Your email addresss
                    </div>
                    <div class="bg-primary text-white py-3 px-4">
                        Subscribe
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.footer-banner {
    position: relative;
}

.footer-banner img {
    object-fit: cover;
    width: 100%;
    height: 600px;
}

.footer-banner .text-area-wrap {
    height: 600px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
}

.footer-banner .text-area {
    max-width: 345px;
    width: 100%;
}

@media (min-width: 992px) {
    .footer-banner img {
        object-fit: cover;
        width: 100%;
        height: 600px;
    }
}
</style>