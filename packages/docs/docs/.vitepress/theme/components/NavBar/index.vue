<template>
    <div class="Nav">
        <NavBarTitle class="NavBarTitle">
            <template #nav-bar-title-before>
                <slot name="nav-bar-title-before" />
            </template>
            <template #nav-bar-title-after>
                <slot name="nav-bar-title-after" />
            </template>
        </NavBarTitle>
        <!-- <div class="content">
            <div class="content-body">
                <slot name="nav-bar-content-before" />

                <NavBarMenu class="menu" />
                <VPNavBarTranslations class="translations" />
                <VPNavBarAppearance class="appearance" />
                <VPNavBarSocialLinks class="social-links" />
                <VPNavBarSearch class="search" />
                <VPNavBarExtra class="extra" />
                <slot name="nav-bar-content-after" />
            </div>
        </div> -->
    </div>
</template>

<script setup lang='ts'>
import NavBarTitle from './NavBarTitle.vue'
// import NavBarMenu from './NavBarMenu.vue'
</script>

<style scoped>
.Nav {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 70px;
    width: 100%;
}

.NavBarTitle {
    width: 150px;
}
</style>