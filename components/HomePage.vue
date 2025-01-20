<template>
    <div class="body__wrapper">
        <div class="body__wrapper--bg"></div>
        <div class="body__wrapper__container">
            <div class="body__wrapper__container--navigation">
                <hr />
                <div class="body__wrapper__container--navigation__2">
                    <p>Discover Movies</p>
                    <div class="body__wrapper__container--navigation__2--button">
                        <button :class="{ active: activeButton === 0 }" @click="setActiveButton(0)" >Popularity</button>
                        <button :class="{ active: activeButton === 1 }" @click="setActiveButton(1)">Release Date</button>
                    </div>
                </div>
            </div>
            <div class="body__wrapper__container--listMovie">
                <Card 
                    v-for="movie in movies?.results"
                    :key="movie.id"
                    :data="movie"
                />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    const activeButton = ref<number | null>(null)
    const setActiveButton = (index: number) => {
        activeButton.value = index
    }

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
    const { pending, data: movies } = await useLazyFetch<{ results: Result[] }>('/api/movies/get?page=1')
</script>