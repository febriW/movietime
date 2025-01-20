<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

 interface Result {
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

const { pending, data: movies } = await useLazyFetch<{ results: Result[] }>('/api/movies/trending')

const config = {
    autoplay: 4000,
    height: 531,
    itemsToShow: 3,
    itemsToScroll: 1,
    gap: 34,
    wrapAround: true
}
</script>

<template>
  <Carousel v-bind="config" class="bg-baseColor2">
    <Slide v-for="movie in movies?.results.slice(0, 6)" :key="movie.id">
      <CardCarousel
        :data=movie 
      />
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>