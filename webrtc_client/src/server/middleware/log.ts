export default defineEventHandler((event) => {
  console.log('New request: ' + getRequestURL(event))
  console.log('New query' + JSON.stringify(getQuery(event)));
  console.log('New body' + JSON.stringify(readBody(event)));
})