<script setup lang="ts">
const config = useRuntimeConfig() 

interface Data {
  backdrop_path: string
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  adult: boolean
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface Genres {
    id: number,
    name: string
}

const props = defineProps<{data: Data}>()
const roundRating = (num: number) => {
    return Math.round(num*10) /10
}

const { pending, data: genreList } = await useLazyFetch<{ genres: Genres[] }>('/api/movies/genre')
const getGenreNameById = (id: any) => {
    const genre = genreList?.value?.genres?.find(genre => genre.id === id)
    return genre ? genre.name : 'Unknown' 
}

</script>
<template>
    <div id="card-carousel" class="carousel__wrapper">
        <img :src="`${config.public.imageUrl}/${data.poster_path}`" />
        <div class="wrapper__content">
            <div class="wrapper__content__right">
                <div class="wrapper__content__right__grid">
                    <p></p>
                    <div class="py-[25.74px]">
                        <div class="wrapper__content__right__grid--rating">
                            <span class="star">★</span>
                            <span class="rating">{{ roundRating(data.vote_average) }}</span>
                        </div>
                        <h2 class="title">{{ data.title }}</h2>
                        <p class="subtitle">{{ data?.release_date?.match(/\d{4}/)?.[0] }} • {{ getGenreNameById(data?.genre_ids[0]) }}</p>
                        <p class="description line-clamp-[11]">{{ data.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>