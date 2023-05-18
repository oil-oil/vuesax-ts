<template>
    <main class="Page">
        <header class="page-header">
            <div class="page-header-back" :style="{
                position: pageHeaderTrigger ? 'fixed' : '',
                top: pageHeaderTrigger ? '58px' : ''
            }">
                <a href="/">
                    <i class="bx bx-left-arrow-alt"></i>
                </a>
            </div>
            <div class="page-header-content" :style="{
                position: pageHeaderTrigger ? 'fixed' : 'absolute',
                transform: pageHeaderTrigger ? 'translateY(0px)' : 'translateY(50%)',
                padding: pageHeaderTrigger ? '10px 100%' : '0px',
                top: pageHeaderTrigger ? '70px' : `calc(50% + ${pageHeaderDelta}px)`,
                backgroundColor: pageHeaderTrigger ? 'var(--vs-theme-bg)' : '',
                width: pageHeaderTrigger ? '100%' : '',
                transition: pageHeaderTrigger ? 'background-color 0.1s ease-out' : ''
            }">
                <div ref="pageHeaderContentTitleRef" class="h1">
                    {{ page.title }}
                </div>
                <ul ref="titleul" class="interactive-links">
                    <!-- <li title="Copy Link">
              <a target="_blank" href="">
                <i class="bx bx-link"></i>
              </a>
            </li> -->

                    <li title="Share">
                        <button>
                            <i class="bx bx-share-alt"></i>
                            <ul class="options">
                                <li class="tw">
                                    <a target="_blank"
                                        :href="`https://twitter.com/intent/tweet?url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&text=@vuesax+framework+components+for+vuejs+/+${page.title}&hashtags=${page.title},framework,components,vuejs,vuesax,lusaxweb,design,developer,frontend`">
                                        <i class="bx bxl-twitter"></i>
                                    </a>
                                </li>
                                <li class="f">
                                    <a target="_blank"
                                        :href="`https://www.facebook.com/sharer.php?u=https%3A%2F%2Flusaxweb.github.io%2Fvuesax%2F`">
                                        <i class="bx bxl-facebook-square"></i>
                                    </a>
                                </li>
                                <li class="in">
                                    <a target="_blank"
                                        :href="`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&title=Vuesax+Framework&summary=framework+components+for+vuejs.&source=Vuesax`">
                                        <i class="bx bxl-linkedin-square"></i>
                                    </a>

                                </li>
                                <li class="redit">
                                    <a target="_blank"
                                        :href="`https://www.reddit.com/submit?url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&title=Vuesax+Framework+components+for+vuejs`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <g>
                                                <circle cx="9.67" cy="13" r="1.001" />
                                                <path
                                                    d="M14.09 15.39C13.483 15.826 12.746 16.041 12 16c-.744.034-1.479-.189-2.081-.63-.099-.081-.242-.081-.342 0-.115.095-.132.265-.037.38.71.535 1.582.808 2.471.77.887.038 1.76-.234 2.47-.77v.04c.109-.107.111-.285.006-.396C14.377 15.284 14.2 15.282 14.09 15.39zM14.299 12.04c-.552 0-.999.448-.999 1.001 0 .552.447.999.999.999l-.008.039c.016.002.033 0 .051 0 .551-.021.979-.487.958-1.038C15.3 12.488 14.853 12.04 14.299 12.04z" />
                                                <path
                                                    d="M12,2C6.479,2,2,6.477,2,12c0,5.521,4.479,10,10,10s10-4.479,10-10C22,6.477,17.521,2,12,2z M17.86,13.33 c0.011,0.146,0.011,0.293,0,0.439c0,2.241-2.61,4.062-5.83,4.062c-3.221,0-5.83-1.82-5.83-4.062c-0.012-0.146-0.012-0.293,0-0.439 c-0.145-0.066-0.275-0.155-0.392-0.264c-0.587-0.553-0.614-1.477-0.063-2.063c0.552-0.588,1.477-0.616,2.063-0.063 c1.152-0.781,2.509-1.209,3.899-1.23L12.45,6.24c0-0.001,0-0.002,0-0.004C12.487,6.069,12.652,5.964,12.82,6l2.449,0.49 c0.16-0.275,0.441-0.458,0.758-0.492c0.55-0.059,1.042,0.338,1.102,0.888c0.059,0.549-0.338,1.042-0.889,1.101 c-0.548,0.059-1.041-0.338-1.102-0.887L13,6.65l-0.649,3.12c1.375,0.029,2.712,0.457,3.85,1.23 c0.259-0.248,0.599-0.393,0.957-0.406c0.807-0.029,1.483,0.6,1.512,1.406C18.679,12.562,18.363,13.08,17.86,13.33z" />
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </button>
                    </li>
                    <li class="divider" />
                    <li title="Package NPM">
                        <a target="_blank" href="https://www.npmjs.com/package/vuesax">
                            <i class="bx bx-package"></i>
                        </a>
                    </li>
                    <li title="View Code Github">
                        <a target="_blank" href="https://github.com/oil-oil/vuesax-ts">
                            <i class="bx bx-code-alt"></i>
                        </a>
                    </li>
                    <li title="Edit Page">
                        <a target="_blank" href="">
                            <i class="bx bx-edit"></i>
                        </a>
                    </li>
                    <li title="Report a Bug">
                        <a target="_blank"
                            :href="`https://github.com/oil-oil/vuesax-ts/issues/new?title=[${page.title}] - Your Bug Name&amp;body=**Steps to Reproduce**%0A1. Do something%0A2. Do something else.%0A3. Do one last thing.%0A%0A**Expected**%0AThe ${page.title} should do this%0A%0A**Result**%0AThe ${page.title} does not do this%0A%0A**Testcase**%0A(fork this to get started)%0Ahttp://jsfiddle.net/exmple-bug/1/`">
                            <i class="bx bx-bug"></i>
                        </a>
                    </li>
                </ul>
                <div :class="{ 'shadow': pageHeaderTrigger === false, 'shadow-active': pageHeaderTrigger === true }">
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
@media (max-width: 1240px) {
    .back-link {
        display: none;
    }
}

.h1 {
    font-size: 33px;
    margin: 0;
    font-weight: 600;
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

.page-header-back {
    position: absolute;
    left: 40px;
    top: 90px;
    font-size: 1.4rem;
    margin: 15px;
    display: block;
    transition: background .25s ease, box-shadow .25s ease, transform .25s ease;
    border-radius: 25px 10px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    padding-top: 2px;
    padding-left: 8px;
    z-index: 50;
}

.page-header-back:hover {
    background: var(--vs-theme-layout);
    box-shadow: 0px 6px 10px -5px rgba(0, 0, 0, .1);
    transform: translate(0, -3px);
}

.page-header-back i {
    transform: translateY(4px);
    cursor: pointer;
    color: var(--vs-theme-color);
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
    z-index: 10;
}

.page-header-content .shadow {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    height: 100%;
    z-index: 11;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .1);
}

.page-header-content .shadow-active {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 110%;
    height: 100%;
    z-index: 11;
    box-shadow: 0 25px 20px -20px rgba(0, 0, 0, .1);
    transition: all 1.5s ease;
}

.interactive-links {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0px;
    z-index: 50;
}

.interactive-links .divider {
    position: relative;
    width: 1.5px;
    height: 25px;
    background: var(--vs-theme-color);
    margin: 0px 10px;
}

.interactive-links li button {
    border: 0px;
    padding: 0px;
    position: relative;
    background: transparent;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    color: var(--vs-theme-color);
}

.interactive-links li button:hover ul {
    opacity: 1;
    visibility: visible;
    transform: translate(0, calc(100% - 20px));
}

.interactive-links li button ul {
    list-style: none;
    padding: 0px;
    bottom: 0px;
    position: absolute;
    transform: translate(0, calc(100% - 15px));
    background: var(--vs-theme-layout);
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s ease;
}

.interactive-links li button ul li a {
    padding: 5px;
    opacity: 0.7;
}

.interactive-links li button ul li a:hover {
    opacity: 1;
}

.interactive-links li a {
    padding: 4px 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin: 0px 1px;
    transition: all 0.25s ease;
}

.interactive-links li a:hover {
    background: var(--vs-theme-layout);
    transform: translate(0, -2px);
    box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
}

.interactive-links li box-icon,
.interactive-links li svg {
    fill: var(--vs-theme-color);
    max-width: 18px;
}

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