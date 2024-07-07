<script setup></script>

<template>
    <section class="pagination">
        <div class="d-flex justify-content-center w-100">
            <ul class="fs-5 d-flex">
                <li class="active">
                    <a href="#">1</a>
                </li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.pagination li.active>a {
    color: #AC8A46;
}

.pagination li.active {
    border-bottom: 2px #AC8A46 solid;
}

.pagination li:not(:last-child) {
    margin-right: 20px;
}

@media (min-width: 992px) {}
</style>