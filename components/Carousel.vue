<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import type { IMovieRes, IMovieWithGenre } from '~/types/Movies';
import type { IGenres } from '~/types/Genres';

const { data: movies } = await useLazyFetch<{ results: IMovieRes[] }>('/api/movies/trending')
const { data: genreList } = await useLazyFetch<{ genres: IGenres[] }>('/api/movies/genre')

const moviesUpdated: IMovieWithGenre[] = (movies.value?.results || []).map(movie => ({ 
  ...movie,
  genre_name: movie.genre_ids.map( id => genreList.value?.genres?.find(genre => genre.id === id)?.name || 'Unknown' ) 
}))

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
    <Slide v-for="movie in moviesUpdated.slice(0, 6)" :key="movie.id">
      <CardCarousel
        :data="movie" 
      />
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>