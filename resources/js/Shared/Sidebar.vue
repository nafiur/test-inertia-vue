<script setup>
import { Link } from '@inertiajs/vue3';
</script>
<template>

    <!-- Start Sidebar Area -->
    <div class="sidebar-area" id="sidebar-area">
        <div class="logo position-relative">
            <Link :href="route('dashboard')" class="d-block text-decoration-none position-relative">
                <img src="assets/images/logo-icon.png" alt="logo-icon" />
                <span class="logo-text fw-bold text-dark">HR-M & Admin</span>
            </Link>
            <button
                class="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
                id="sidebar-burger-menu">
                <i data-feather="x"></i>
            </button>
        </div>

        <aside id="layout-menu" class="layout-menu menu-vertical menu active" data-simplebar>
            <ul class="menu-inner">
                <li class="menu-title small text-uppercase">
                    <span class="menu-title-text">MAIN</span>
                </li>

                <li class="menu-item">
                    <Link :href="route('dashboard')" class="menu-link">
                    <span class="material-symbols-outlined menu-icon">dashboard</span>
                    <span class="title">Dashboard</span>
                    </Link>
                </li>
                <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle active">
                        <span class="material-symbols-outlined menu-icon">note_stack</span>
                        <span class="title">Front Pages</span>
                    </a>
                    <ul class="menu-sub">
                        <li class="menu-item">
                            <a href="landing-page.html" class="menu-link"> Home </a>
                        </li>
                        <li class="menu-item">
                            <a href="features.html" class="menu-link"> Features </a>
                        </li>
                        <li class="menu-item">
                            <a href="our-team.html" class="menu-link"> Our Team </a>
                        </li>
                        <li class="menu-item">
                            <a href="faqs.html" class="menu-link"> FAQ’s </a>
                        </li>
                        <li class="menu-item">
                            <a href="contact.html" class="menu-link"> Contact </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-title small text-uppercase">
                    <span class="menu-title-text">APPS</span>
                </li>


                <li class="menu-item">
                    <a href="to-do-list.html" class="menu-link">
                        <span class="material-symbols-outlined menu-icon">format_list_bulleted</span>
                        <span class="title">To Do List</span>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="contacts.html" class="menu-link">
                        <span class="material-symbols-outlined menu-icon">contact_page</span>
                        <span class="title">Contacts</span>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="chat.html" class="menu-link">
                        <span class="material-symbols-outlined menu-icon">chat</span>
                        <span class="title">Chat</span>
                    </a>
                </li>


                <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle active">
                        <span class="material-symbols-outlined menu-icon">group_add</span>
                        <span class="title">Users</span>
                    </a>
                    <ul class="menu-sub">
                        <li class="menu-item">
                            <a href="team-members.html" class="menu-link"> Team Members </a>
                        </li>
                        <li class="menu-item">
                            <a href="users-list.html" class="menu-link"> Users List </a>
                        </li>
                        <li class="menu-item">
                            <a href="add-user.html" class="menu-link"> Add User </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle active">
                        <span class="material-symbols-outlined menu-icon">account_circle</span>
                        <span class="title">Profile</span>
                    </a>
                    <ul class="menu-sub">
                        <li class="menu-item">
                            <a href="user-profile.html" class="menu-link"> User Profile </a>
                        </li>
                        <li class="menu-item">
                            <a href="teams-2.html" class="menu-link"> Teams </a>
                        </li>
                        <li class="menu-item">
                            <a href="my-projects.html" class="menu-link"> Projects </a>
                        </li>
                    </ul>
                </li>


                <li class="menu-item">
                    <a href="notification.html" class="menu-link">
                        <span class="material-symbols-outlined menu-icon">notifications</span>
                        <span class="title">Notification</span>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="members.html" class="menu-link">
                        <span class="material-symbols-outlined menu-icon">group</span>
                        <span class="title">Members</span>
                    </a>
                </li>

                <li class="menu-title small text-uppercase">
                    <span class="menu-title-text">OTHERS</span>
                </li>

                <li class="menu-item">
                    <a href="my-profile.html" class="menu-link">
                        <span class="material-symbols-outlined menu-icon">account_circle</span>
                        <span class="title">My Profile</span>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle active">
                        <span class="material-symbols-outlined menu-icon">settings</span>
                        <span class="title">Settings</span>
                    </a>
                    <ul class="menu-sub">
                        <li class="menu-item">
                            <a href="account-settings.html" class="menu-link">
                                Account Settings
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="change-password.html" class="menu-link">
                                Change Password
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="connections.html" class="menu-link"> Connections </a>
                        </li>
                        <li class="menu-item">
                            <a href="connections.html" class="menu-link"> Connections </a>
                        </li>
                        <li class="menu-item">
                            <a href="privacy-policy.html" class="menu-link">
                                Privacy Policy
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="terms-conditions.html" class="menu-link">
                                Terms & Conditions
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle active">
                        <span class="material-symbols-outlined menu-icon">keyboard_arrow_down</span>
                        <span class="title">Multi Level Menu</span>
                    </a>
                    <ul class="menu-sub">
                        <li class="menu-item after-sub-menu menu-level">
                            <a href="javascript:void(0);" class="menu-link menu-toggle">
                                <span class="title">Level One</span>
                            </a>
                            <ul class="menu-sub">
                                <li class="menu-item">
                                    <a href="#" class="menu-link"> Level Three </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="menu-item">
                    <Link :href="route('logout')" method="post" as="button" class="menu-link">
                        <span class="material-symbols-outlined menu-icon">logout</span>
                        <span class="title">Logout</span>
                    </Link>
                </li>

            </ul>
        </aside>
    </div>
    <!-- End Sidebar Area -->
</template>

<script>
export default {};
</script>

<style scoped>
/* Add any specific styling for sidebar here */
</style>
