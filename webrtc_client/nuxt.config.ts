/*
 * 2023-10-26 16:30:29
 * @Github: https://github.com/melelong
 * custom_string_obkoro1~custom_string_obkoro100都可以输出自定义信息
 * @Author: melelong
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 * @LastEditors: 可以输入预定的版权声明、个性签名、空行等
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "~s": "./src/styles/",
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    },
    rootId: 'app',
    rootTag: 'div',
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    https: false,
  },
  ssr: true,
  srcDir: './src',
  devtools: { enabled: true },
  modules: ['@vant/nuxt']
})
