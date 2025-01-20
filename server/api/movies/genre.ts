export default defineEventHandler(async (event) => { 
    const config = useRuntimeConfig() 
    const response = await $fetch(`${config.public.apiBaseUrl}/genre/movie/list`, { 
        headers: { Authorization: `Bearer ${ config.apiKey }` } 
    }) 
    return response 
})