<!--
 * 2023-10-26 21:59:27
 * @Github: https://github.com/melelong
 * custom_string_obkoro1~custom_string_obkoro100都可以输出自定义信息
 * @Author: melelong
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 * @LastEditors: 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <h1>{{dataRef}}</h1>
  <div>{{ title }}</div>
  <TsxComponent><div slot="aaa">aaa</div></TsxComponent>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const title = ref('我的');
const dataRef = ref(null);
definePageMeta({
  title: () => title.value,
  layout: 'layout2',
  name: '我的',
});
const { data } = await useFetch('/api/nestapi');
dataRef.value = data?.value?.data;
console.log(data.value);
</script>
