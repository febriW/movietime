<script setup lang="ts">
    const config = useRuntimeConfig() 
    interface Result {
        adult: boolean
        backdrop_path: string
        genre_ids: number[]
        id: number
        original_language: string
        original_title: string
        overview: string
        popularity: number
        poster_path: string
        release_date: string
        title: string
        video: boolean
        vote_average: number
        vote_count: number
    }
    interface Genres {
        id: number,
        name: string
    }
    const props = defineProps<{data: Result}>()
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
    <div class="relative flex flex-col gap-3 h-[383px] w-[220px]">
        <div class="relative h-full group/card flex">
            <div class="absolute px-3 py-1 top-0 right-0 bg-slate-700 bg-opacity-80 text-white font-bold z-10">{{ roundRating(props.data.vote_average) }}</div>
            <img :src="`${config.public.imageUrl}/${props.data.poster_path}`" class="relative w-full h-full object-cover" />
            <div class="group-hover/card:block hidden absolute flex flex-col gap-12 justify-center items-center bg-cardHover w-full h-full z-20 text-white text-lg font-normal">
                <div class="flex flex-col justify-center items-center gap-12 h-full">
                    <div class="flex flex-row gap-2 font-bold text-2xl">
                        <img src="~/assets/icon/Star.svg" class="flex justify-center h-[32px] w-[32px]" />
                        <p>{{ roundRating(props.data.vote_average) }}</p>
                    </div>
                    <p v-if="!pending">{{ getGenreNameById(props.data.genre_ids[0]) }}</p>
                    <button class="flex justify-center bg-buttonCard px-8 py-2 font-bold text-sm rounded-3xl w-[107px]">View</button>
                </div>
            </div>
        </div>
        <div id="title">
            <p class="text-titleCard font-bold text-base line-clamp-1">{{ props.data.original_title }}</p>
            <p class="text-subtitleCard font-thin text-sm">{{ props?.data?.release_date?.match(/\d{4}/)?.[0] }}</p>
        </div>
    </div>
</template>