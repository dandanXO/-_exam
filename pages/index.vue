<script setup>
// TODO...
import { useInfiniteScroll } from "@vueuse/core";
definePageMeta({
  keepalive: true, // 设置为keepAlive
});
const imgRef = ref(null);
const diplayData = ref([]);
const page = ref(1);

const repoData = await $fetch(
  `/api/getRepo?repoUser=nodejs&page=${page.value}`,
);

diplayData.value = repoData.data;
useInfiniteScroll(
  imgRef,
  async () => {
    page.value++;
    const repoData = await $fetch(
      `/api/getRepo?repoUser=nodejs&page=${page.value}`,
    );
    diplayData.value.push(...repoData.data);
  },
  { distance: 10 },
);
</script>

<template>
  <div
    ref="imgRef"
    class="container"
    style="height: 100vh !important; overflow: scroll"
  >
    <div v-for="(repo, idx) in diplayData" :key="repo" class="container__item">
      <p>{{ idx + 1 }}</p>
      <p>Repo Url: {{ repo.url }}</p>
      <p>Created Time: {{ new Date(repo.created_at) }}</p>
      <p>description: {{ repo.description }}</p>
      <!-- <NuxtImg :src="img.src" loading="lazy" quality="80" :placeholder="img.placeholder" :alt="img.title" /> -->
    </div>
  </div>
</template>

<style>
body {
  overflow: hidden;
}

.container {
  font-family: "Noto Sans TC", "Noto Sans JP", "Noto Sans Thai";
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.container__item {
  width: calc(50% - 16px);
  padding: 8px;
  min-height: 200px;
}

img {
  width: 100%;
}
</style>
