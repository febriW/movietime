<script setup lang="ts">
    import type { IMovieRes, IMovieWithGenre } from '~/types/Movies'
    import type { IGenres } from '~/types/Genres'
    import { ref } from 'vue'

    const requestFetch = useRequestFetch()
    const activeButton = ref<number | null>(0)
    const movies = ref<IMovieWithGenre[]>()
    const filter = ref<string>("sort_by=popularity.desc")

    const setActiveButton = (index: number) => {
        activeButton.value = index
        filter.value = index === 0 ? "sort_by=popularity.desc" : "sort_by=primary_release_date.desc";
    }
    const { status, data } = await useLazyFetch<{ results: IMovieRes[] }>(`/api/movies/get?page=1&${filter.value}`)
    const { data: genreList } = await useLazyFetch<{ genres: IGenres[] }>('/api/movies/genre')

    const updatedMoviesList = (movies: IMovieRes[]): IMovieWithGenre[] => { 
        return movies.map((movie: IMovieRes) => ({ 
            ...movie, 
            genre_name: movie.genre_ids.map((id: number) => genreList.value?.genres?.find((genre: IGenres) => genre.id === id)?.name || 'Unknown') })) 
        }

    movies.value = updatedMoviesList(data.value?.results || [])

    const { status: statusReFetch, data: reFetch } = await useAsyncData<{ results: IMovieRes[] }>(
        'movies',
        () => requestFetch(`/api/movies/get?page=1&${filter.value}`),
        {
            watch: [filter]
        }
    )
    
    watchEffect(() => { 
        if (reFetch.value) { 
            movies.value = updatedMoviesList(reFetch.value.results)
        } 
    })

    const combinedStatus = computed(() => 
        [status.value, statusReFetch.value].includes('pending') ? 'pending' : 
        [status.value, statusReFetch.value].includes('error') ? 'error' :
        (status.value === 'success' && statusReFetch.value === 'success') ? 'success' : 
        'idle' 
    )

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
                <CardSkeleton v-for="t in 14" :key="t" v-if="combinedStatus !== 'success'" />
                <Card
                    v-if="combinedStatus === 'success'"
                    v-for="movie in movies"
                    :key="movie.id"
                    :data="movie"
                />
            </div>
        </div>
    </div>
</template>