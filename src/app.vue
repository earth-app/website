<template>
   <div id="app">
        <NavBar />
        <Body />
   </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Body from './components/Body.vue'

useHead({
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'application-name', content: SITE_NAME },
        { name: 'description', content: SITE_DESCRIPTION },
        { name: 'keywords', content: 'Earth, App, Explore' },
        { name: 'author', content: 'Gregory Mitchell' },
        { name: 'theme-color', content: THEME_COLOR },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'msapplication-TileColor', content: THEME_COLOR },
        { name: 'msapplication-TileImage', content: '/favicon.png' }
    ]
})

useSeoMeta({
    title: SITE_NAME,
    ogTitle: SITE_NAME,
    description: SITE_DESCRIPTION,
    ogDescription: SITE_DESCRIPTION,
    ogImage: 'https://cdn.earth-app.com/earth-app.png',
    twitterCard: 'summary_large_image',
})
</script>