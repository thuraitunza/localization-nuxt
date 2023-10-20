<script setup lang="ts">
const { data: shows } = await useFetch ("/api/shows")
</script>

<template>
  <div>
    <Head>
      <Title>Andorable - Star Wars Shows</Title>
      <Meta
        name="description"
        content="Andorable is a curated list and blog..."
      />
    </Head>

    <h1>Currently Streaming</h1>

    <section>
      <div v-for="show in shows" :key="show.id">
        <NuxtLink :to="`/shows/${show.id}`">
          <img :src="show.img" :alt="`Image for ${show.name}`" />
        
          <h3>{{ show.name }}</h3>
        
          <div>
            <p>{{ show.premieredAt }}</p>
            <p>{{ show.episodeCount }} episodes</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>