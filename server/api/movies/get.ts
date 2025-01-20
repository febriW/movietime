export default defineEventHandler(async (event) => { 
    const query = getQuery(event)
    const config = useRuntimeConfig() 
    const response = await $fetch(`${config.public.apiBaseUrl}/discover/movie?page=${query.page}`, { 
        headers: { Authorization: `Bearer ${ config.apiKey }` } 
    }) 
    return response 
})