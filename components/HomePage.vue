<script setup lang="ts">
    import type { IMovieRes, IMovieWithGenre } from '~/types/Movies'
    import { ref } from 'vue'
    const requestFetch = useRequestFetch()
    const activeButton = ref<number | null>(0)
    const movies = ref<IMovieRes[]>()
    const filter = ref<string>("sort_by=popularity.desc")
    const setActiveButton = (index: number) => {
        activeButton.value = index
        filter.value = index === 0 ? "sort_by=popularity.desc" : "sort_by=primary_release_date.desc";
    }
    const { data } = await useLazyFetch<{ results: IMovieRes[] }>(`/api/movies/get?page=1&${filter.value}`)
    movies.value = data.value?.results || []

    const { data: reFetch } = await useAsyncData<{ results: IMovieRes[] }>(
        'movies',
        () => requestFetch(`/api/movies/get?page=1&${filter.value}`),
        {
            watch: [filter]
        }
    )
    
    watchEffect(() => { 
        if (reFetch.value) { 
            movies.value = reFetch.value.results 
        } 
    })

</script>
<template>
    <div class="body__wrapper">
        <div class="body__wrapper--bg"></div>
        <div class="body__wrapper__container">
            <div class="body__wrapper__container--navigation">
                <hr />
                <div class="body__wrapper__container--navigation__2">
                    <p>Discover Movies</p>
                    <div class="body__wrapper__container--navigation__2--button">
                        <button :class="{ active: activeButton === 0 }" @click="setActiveButton(0)">Popularity</button>
                        <button :class="{ active: activeButton === 1 }" @click="setActiveButton(1)">Release Date</button>
                    </div>
                </div>
            </div>
            <div class="body__wrapper__container--listMovie">
                <Card 
                    v-for="movie in movies"
                    :key="movie.id"
                    :data="movie"
                />
            </div>
        </div>
    </div>
</template>