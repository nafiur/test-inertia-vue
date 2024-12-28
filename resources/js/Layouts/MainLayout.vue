<template>
    <div class="boxed-size">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main Content Area -->
      <div class="container-fluid">
        <div class="main-content d-flex flex-column">
          <!-- Header -->
          <Header />

          <!-- Page Content -->
          <slot></slot>

          <!-- Footer -->
          <Footer />
        </div>
      </div>
    </div>
  </template>

  <script>
  import Sidebar from '@/Shared/Sidebar.vue';
  import Header from '@/Shared/Header.vue';
  import Footer from '@/Shared/Footer.vue';

  export default {
    components: {
      Sidebar,
      Header,
      Footer
    }
  };
  </script>

  <style scoped>
  /* Add any custom styles for the overall layout here */
  </style>
