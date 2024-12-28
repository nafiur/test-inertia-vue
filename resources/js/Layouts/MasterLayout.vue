<script>
import Header from '@/Shared/Header.vue';
import Sidebar from '@/Shared/Sidebar.vue';
import Footer from '@/Shared/Footer.vue';

export default {
    components: {
        Header,
        Sidebar,
        Footer,
    },
};
</script>
<template>
    <div>
        <Sidebar />
        <div class="container-fluid">
            <div class="main-content d-flex flex-column">
                <Header />
                <slot />
                <Footer />
            </div>
        </div>
    </div>
</template>

<!-- <Header />
        <div class="d-flex">
            <Sidebar />
            <main class="flex-grow-1">
                <slot />
            </main>
        </div>
        <Footer /> -->

<style scoped>
.d-flex {
    display: flex;
}

.flex-grow-1 {
    flex-grow: 1;
}
</style>
