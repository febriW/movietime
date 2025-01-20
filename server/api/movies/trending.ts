export default defineEventHandler(async (event) => { 
    const config = useRuntimeConfig() 
    const response = await $fetch(`${config.public.apiBaseUrl}/trending/movie/week`, { 
        headers: { Authorization: `Bearer ${ config.apiKey }` } 
    }) 
    return response 
})