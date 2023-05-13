<template>
    <main class="Page">
        <header class="page-header">
            <div class="page-header-home">
                <a href="/">Home</a>
            </div>
            <div class="page-header-content" :style="{
                position: pageHeaderTrigger ? 'fixed' : 'absolute',
                transform: pageHeaderTrigger ? 'translateY(0px)' : 'translateY(50%)',
                padding: pageHeaderTrigger ? '10px 100%' : '0px',
                top: pageHeaderTrigger ? '70px' : `calc(50% + ${pageHeaderDelta}px)`,
                backgroundColor: pageHeaderTrigger ? 'var(--vs-theme-bg)' : '',
                width: pageHeaderTrigger ? '100%' : '',
            }">
                <div ref="pageHeaderContentTitleRef" class="h1">
                    {{ page.title }}
                </div>
                <div class="page-header-iconbox">
                    这是iconBox
                </div>
            </div>
        </header>
        <div class="header-effect">
            <div class="header-effect-corner">

            </div>
        </div>
        <div class="page-docs-content">
            <Content class="page-docs-content-docs" />
        </div>
    </main>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress';
import { ref, onUnmounted } from 'vue';
const { page } = useData()
const pageHeaderContentTitleRef = ref()
const pageHeaderTrigger = ref(false)
const pageHeaderDelta = ref()
const scrollEvent = () => {
    pageHeaderDelta.value = ~~(window.scrollY * 0.55)
    const pageHeaderFontDelta = (window.scrollY * 0.11)
    if (pageHeaderDelta.value >= 85) {
        pageHeaderTrigger.value = true
        pageHeaderContentTitleRef.value.style.fontSize = `20px`
    } else {
        pageHeaderTrigger.value = false
        if (pageHeaderFontDelta >= 15) {
        } else {
            pageHeaderContentTitleRef.value.style.fontSize = `calc(35px - ${pageHeaderFontDelta}px)`
        }
    }
}
window.addEventListener('scroll', scrollEvent)
onUnmounted(() => {
    window.removeEventListener('scroll', scrollEvent)
})
</script>

<style scoped>
.h1 {
    font-size: 33px;
    margin: 0;
}

.Page {
    position: relative;
    width: 100%;
    background-color: var(--vs-theme-bg);
    overflow: hidden;

}

.page-header {
    position: relative;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--vs-theme-bg2);
    z-index: 1;
    border-radius: 0px 0px 0px 30px;
    padding-top: 170px;
    padding-bottom: 100px;
}

.page-header-home {
    position: absolute;
    left: 40px;
    top: 90px;
}

.page-header-content {
    position: absolute;
    top: 50%;
    transform: translateY(50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    max-width: 800px;
    /* transition: all 0.3s ease-out; */

}

.page-header-iconbox {}


.header-effect {
    position: relative;
    width: 100%;
    height: 50px;
    background-color: var(--vs-theme-bg2);
}

.header-effect-corner {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px 30px 0px 0px;
    background-color: var(--vs-theme-bg);
}

.page-docs-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

}

.page-docs-content-docs {
    width: 900px;
    max-width: 900px;
}
</style>