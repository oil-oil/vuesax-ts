<template>
    <div class="page1">
        <div class="title-part">
            <div class="title-content">
                <h1 v-if="frontmatter.hero.name && frontmatter.hero.text"><b style="margin-right: 10px;">{{
                    frontmatter.hero.name }}</b>{{
        frontmatter.hero.text }}<a target="_blank" href="https://vuejs.org/"
                        style="margin-left: 10px;">VueTS</a></h1>
                <h1 v-else>{{ site.title }}</h1>
                <p v-if="frontmatter.hero.text">{{ frontmatter.hero.tagline }}</p>
                <p v-else>{{ site.description }}</p>
                <div class="button-content">
                    <VsButton v-for="(action, index) in frontmatter.hero.actions" :key="action.text"
                        :active="active === index" @click.prevent="actionClickEvent(action.link, action.target)">
                        {{ action.text }}</VsButton>

                </div>
            </div>
        </div>
        <div class="features-part">

        </div>
    </div>
</template>

<script setup lang='ts'>
import { useData, useRouter } from 'vitepress';
import { ref } from 'vue'
import { VsButton } from 'vuesax/src/components';
const { site, frontmatter } = useData()
const router = useRouter()
const active = ref(0)
const actionClickEvent = (link: string, target?: string) => {
    if (target) {
        window.open(link)
        console.log("触发了open")

    } else {
        router.go(link)
    }
}
</script>

<style scoped>
h1 {
    font-weight: normal;
    color: black;
}

a {
    text-decoration: underline;
    color: black;
}

.page1 {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-part {
    width: 40%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

}

.title-content {
    padding: 10%;
}



.button-content {
    display: flex;
    align-items: center;
    justify-content: start;
}

.button-content button {
    padding: 5px 15px;
    border-radius: 15px;
}

.features-part {
    width: 60%;
    height: 100vh;
}
</style>