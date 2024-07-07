<template>
    <section class="footer-banner">
        <div>
            <img src="@/assets/images/footer-banner.jpg" alt="" />
        </div>
        <div class="text-area-wrap container d-flex align-items-center">
            <div class="text-area">
                <h2 class="fw-bold text-secondary mb-4">記得<br>訂閱以獲取更多資訊！</h2>
                <div class="border border-2 border-primary d-flex rounded-2">
                    <form class="d-flex w-100">
                        <input class="form-control py-3 px-5 rounded-end-0 me-0 w-100" type="text"
                            placeholder="Your email addresss" aria-label="Search">
                        <button class="btn btn-primary py-3 px-4 rounded-start-0" type="submit">Subscribe</button>
                    </form>
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