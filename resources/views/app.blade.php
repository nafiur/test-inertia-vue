<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Links Of CSS Files -->
    <link rel="stylesheet" href="{{ asset('backend/assets/css/sidebar-menu.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/simplebar.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/apexcharts.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/prism.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/rangeslider.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/quill.snow.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/google-icon.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/remixicon.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/swiper-bundle.min.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/fullcalendar.main.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/jsvectormap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/lightpick.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/assets/css/style.css') }}">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/images/favicon.png">

    <!-- Inertia.js -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>
<body class="boxed-size">
    @inertia

    <!-- Scripts -->
    <script src="{{ asset('backend/assets/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/sidebar-menu.js') }}"></script>
    <script src="{{ asset('backend/assets/js/dragdrop.js') }}"></script>
    <script src="{{ asset('backend/assets/js/rangeslider.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/quill.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/data-table.js') }}"></script>
    <script src="{{ asset('backend/assets/js/prism.js') }}"></script>
    <script src="{{ asset('backend/assets/js/clipboard.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/feather.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/simplebar.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/apexcharts.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/echarts.js') }}"></script>
    <script src="{{ asset('backend/assets/js/swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/fullcalendar.main.js') }}"></script>
    <script src="{{ asset('backend/assets/js/jsvectormap.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/world-merc.js') }}"></script>
    <script src="{{ asset('backend/assets/js/moment.min.js') }}"></script>
    <script src="{{ asset('backend/assets/js/lightpick.js') }}"></script>
    <script src="{{ asset('backend/assets/js/custom/apexcharts.js') }}"></script>
    <script src="{{ asset('backend/assets/js/custom/echarts.js') }}"></script>
    <script src="{{ asset('backend/assets/js/custom/custom.js') }}"></script>
</body>
</html>
