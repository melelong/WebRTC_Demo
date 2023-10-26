/*
 * 2023-10-26 22:07:44
 * @Github: https://github.com/melelong
 * custom_string_obkoro1~custom_string_obkoro100都可以输出自定义信息
 * @Author: melelong
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 * @LastEditors: 可以输入预定的版权声明、个性签名、空行等
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.gif' {
  const value: string
  export default value
}
