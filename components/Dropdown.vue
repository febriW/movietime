<script setup lang="ts">
const CategoriesMenu = [
        { link:"/", name: "Popularity" },
        { link:"/", name: "Popularity Ascending" },
        { link:"/", name: "Popularity Descending" },
        { link:"/", name: "Release Date Ascending" },
        { link:"/", name: "Release Date Descending" },
        { link:"/", name: "Rating Ascending" },
        { link:"/", name: "Rating Descending" },
    ]
</script>
<template>
    <div class="dropdown__wrapper">
        <div class="dropdown__wrapper--select group/dropdown">
            <p>Popularity</p>
            <img alt="icon"/>
        </div>
        <div class="group-hover/dropdown:block z-10 w-fit flex flex-col justify-start bg-white shadow-md gap-1">
            <p v-for="menu in CategoriesMenu" :key="menu.name">
                {{ menu.name }}
            </p>
        </div>
    </div>
</template>