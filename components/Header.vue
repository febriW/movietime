<script setup lang="ts">
    const CategoriesMenu = [
        { link:"/", name: "ACTION" },
        { link:"/", name: "ADVENTURE" },
        { link:"/", name: "ANIMATION" },
        { link:"/", name: "COMEDY" },
        { link:"/", name: "CRIME" },
        { link:"/", name: "DOCUMENTARY" },
        { link:"/", name: "DRAMA" },
        { link:"/", name: "FAMILY" },
        { link:"/", name: "FANTASY" },
        { link:"/", name: "HISTORY" },
        { link:"/", name: "HORROR" },
    ]
</script>

<template>
    <div class="header-wrap">
        <header>
            <img src="~/assets/icon/MoovieTime-Logo.svg" class="logo"/>
            <Searchbar />
            <div class="header-categories group/cat-nav">
                <img src="~/assets/icon/menu.svg" />
                <p>CATEGORIES</p>
                <div class="hidden group-hover/cat-nav:block absolute z-20 top-6 flex justify-center bg-white drop-shadow-md rounded w-[153px] h-fit">
                    <p v-for="menu in CategoriesMenu" :key="menu.name">
                        {{ menu.name }}
                    </p>
                </div>
            </div>
            <div class="header-menu">
                <p>MOVIES</p>
                <p>TV SHOWS</p>
                <p>LOGIN</p>
            </div>
        </header>
    </div>
</template>