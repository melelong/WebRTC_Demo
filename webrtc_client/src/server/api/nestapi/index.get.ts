export default defineEventHandler(async (event) => {
  // 请求后端接口
  const res = await $fetch('http:127.0.0.1:4000')
  return res || {
    code: '123'
  }
})