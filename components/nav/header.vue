<template>
    <div id="nav-header" class="flex justify-between px-5 py-3 bg-slate-950 text-slate-200 items-center">
        <div id="logo" class="text-3xl font-bold font-sans">
            <nuxt-link to="/">App</nuxt-link>
        </div>
        <div id="navegaciones" class="flex gap-5">
            <nuxt-link to="/about"><div>About</div></nuxt-link>
            <nuxt-link to="/chat"><div>Chat</div></nuxt-link>
        </div>
    </div>
</template>