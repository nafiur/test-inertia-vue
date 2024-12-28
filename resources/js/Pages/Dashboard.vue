<template>
    <MainLayout>
        <!-- Start Main Content -->
        <div class="main-content-container">
            <div class="row align-items-center">
                <!-- Left Header Content -->
                <div class="col-lg-4 col-sm-6">
                    <div class="left-header-content">
                        <ul
                            class="d-flex align-items-center ps-0 mb-0 list-unstyled justify-content-center justify-content-sm-start">
                            <li>
                                <button class="header-burger-menu bg-transparent p-0 border-0" id="header-burger-menu">
                                    <span class="material-symbols-outlined">menu</span>
                                </button>
                            </li>
                            <li>
                                <form class="src-form position-relative">
                                    <input type="text" class="form-control" placeholder="Search here....." />
                                    <button type="submit"
                                        class="src-btn position-absolute top-50 end-0 translate-middle-y bg-transparent p-0 border-0">
                                        <span class="material-symbols-outlined">search</span>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Additional content for the dashboard can be added here -->
        </div>
        <!-- End Main Content -->
    </MainLayout>
</template>

<script>
import MainLayout from '@/Layouts/MainLayout.vue';

export default {
    components: {
        MainLayout,
    },
};
</script>

<style scoped>
/* Add any custom styling for the dashboard page */
.main-content-container {
    padding: 20px;
}

.src-form input {
    width: 250px;
}

.src-form button {
    cursor: pointer;
}
</style>
