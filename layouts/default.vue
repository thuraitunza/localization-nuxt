<script setup lang="ts">
    const localePath = useLocalePath()
</script>

<template>
    <Body>
      <header>
        <nav>
          <NuxtLink :to="localePath('/')">
            <img src="/img/brand-logo.svg" alt="Andorable logo"/>
            {{ $t("app_title") }}
          </NuxtLink>
  
          <ul>
            <li><NuxtLink to="/">{{ $t("nav_shows") }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/blog')">{{ $t("nav_blog") }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/about')">{{ $t("nav_about") }}</NuxtLink></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <slot />
      </main>
    </Body>
  </template>
  