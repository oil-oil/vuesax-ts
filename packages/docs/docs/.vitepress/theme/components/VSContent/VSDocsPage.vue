<template>
    <main class="Page">
        <header class="page-header">
            <div class="page-header-home">
                <a href="/">Home</a>
            </div>
            <div ref="pageHeaderContentRef" class="page-header-content">
                <div class="h1">
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
import { ref } from 'vue';
const { page } = useData()
const pageHeaderContentRef = ref()
console.log('useData', useData())
const scrollEvent = () => {
    const delta = 70 - ~~(window.scrollY * 5)
    if (delta > 10) {
        pageHeaderContentRef.value.style.margin = delta + "px 0px"
    }
    if (delta <= 10) {

    }
}
// window.addEventListener('scroll', scrollEvent)

</script>

<style scoped>
.h1 {
    font-size: 33px;
    margin: 0;
}

.Page {
    position: relative;
    width: 100%;
    background-color: rgb(234, 236, 236);
    overflow: hidden;

}

.page-header {
    position: relative;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: rgb(205, 211, 211);
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
    background-color: rgb(205, 211, 211);
}

.header-effect-corner {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px 30px 0px 0px;
    background-color: rgb(234, 236, 236);
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