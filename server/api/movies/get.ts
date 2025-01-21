export default defineEventHandler(async (event) => { 
    const query = getQuery(event)
    const config = useRuntimeConfig() 
    const response = await $fetch(`${config.public.apiBaseUrl}/discover/movie?page=${query.page}&sort_by=${query.sort_by}`, { 
        headers: { Authorization: `Bearer ${ config.apiKey }` } 
    }) 
    return response 
})