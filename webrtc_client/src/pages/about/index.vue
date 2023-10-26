<template>
  <div>{{ title }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const title = ref('关于');
definePageMeta({
  title: () => title.value,
  layout: 'layout1',
  name: '关于',
});
</script>
