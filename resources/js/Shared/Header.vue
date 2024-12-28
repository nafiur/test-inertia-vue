<template>
    <header class="header-area bg-white mb-4 rounded-bottom-15" id="header-area">
        <div class="row align-items-center">
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
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add any specific styling for header here */
</style>
