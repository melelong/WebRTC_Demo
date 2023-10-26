export default defineEventHandler(async(event) => {
  // const { req, res } = event.node
  // console.log(req);
  // 本地模拟接口
  return {
    code: 200,
    msg: '',
    data: 'nuxt的请求',
  }
})