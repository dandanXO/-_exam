import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async(event) => {
  const query = getQuery(event)
  let repoUser = (query?.repoUser) || 'schacon'
  let page = (query?.page) || 1
  console.log(repoUser, page)
  const data = await $fetch(`https://api.github.com/users/${repoUser}/repos?page=${page}&per_page=10`)
  
  return {
    data,
  }
})
