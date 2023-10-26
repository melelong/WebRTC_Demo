<!--
 * 2023-10-26 17:12:59
 * @Github: https://github.com/melelong
 * custom_string_obkoro1~custom_string_obkoro100都可以输出自定义信息
 * @Author: melelong
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 * @LastEditors: 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <h1>{{dataRef}}</h1>
  <div>{{ title }}</div>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const title = ref('首页');
const dataRef = ref<any>(null)
definePageMeta({
  title: '首页',
  layout: 'default',
  name: '首页',
});
const { data } = await useFetch('/api/nuxtapi');
dataRef.value = data?.value?.data;
console.log(data.value);
</script>
