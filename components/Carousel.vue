<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
}));

const config = {
    autoplay: 90000,
    height: 531,
    itemsToShow: 3,
    itemsToScroll: 1,
    gap: 34,
    wrapAround: true
}
</script>

<template>
  <Carousel v-bind="config" class="bg-baseColor2">
    <Slide v-for="image in images" :key="image.id">
      <CardCarousel />
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>