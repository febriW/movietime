<template>
    <div class="header-wrap">
        <header>
            <img src="~/assets/icon/MoovieTime-Logo.svg" class="logo"/>
            <Searchbar />
            <div class="header-categories group/cat-nav">
                <img src="~/assets/icon/menu.svg" />
                <p>CATEGORIES</p>
                <div class="hidden group-hover/cat-nav:block absolute z-20 top-6 flex justify-center bg-white drop-shadow-md rounded w-[153px] h-fit">
                    <p>content her</p>
                    <p>content here 2</p>
                    <p>content here 3</p>
                    <p>content her</p>
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