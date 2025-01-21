<script setup lang="ts">
import type { IMovieWithGenre } from '~/types/Movies'

const config = useRuntimeConfig() 
defineProps<{data: IMovieWithGenre}>()
</script>
<template>
    <div id="card-carousel" class="carousel__wrapper">
        <img :src="`${config.public.imageUrl}/original/${data.poster_path}`" />
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
                        <p class="subtitle">{{ data?.release_date?.match(/\d{4}/)?.[0] }} • {{ data.genre_name[0] }}</p>
                        <p class="description line-clamp-[11]">{{ data.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>