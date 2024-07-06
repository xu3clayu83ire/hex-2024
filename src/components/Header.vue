<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-1">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="@/assets/images/logo-lg.png" width="128" alt="logo">
            </a>
            <button class="navbar-toggler border-0 shadow-none order-1" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a href="#" class="d-lg-none position-relative ms-auto">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#8D8D8D">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    3
                </span>
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link text-secondary fs-5" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
                                fill="#8D8D8D">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
                            </svg>
                            Product
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary fs-5" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
                                fill="#8D8D8D">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            log in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary fs-5" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
                                fill="#8D8D8D">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            Wishlist</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary fs-5" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
                                fill="#8D8D8D">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                            Cart(3)</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>