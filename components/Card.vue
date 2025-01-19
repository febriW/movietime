<script setup lang="ts"></script>
<template>
    <div class="relative flex flex-col gap-3 h-[383px] w-[220px]">
        <div class="relative h-full group/card flex">
            <div class="absolute px-3 py-1 top-0 right-0 bg-slate-700 bg-opacity-80 text-white font-bold z-10">8.0</div>
            <img src="~/assets/icon/example.svg" class="relative w-full h-full object-cover" />
            <div class="group-hover/card:block hidden absolute flex flex-col gap-12 justify-center items-center bg-cardHover w-full h-full z-20 text-white text-lg font-normal">
                <div class="flex flex-col justify-center items-center gap-12 h-full">
                    <div class="flex flex-row gap-2 font-bold text-2xl">
                        <img src="~/assets/icon/Star.svg" class="flex justify-center h-[32px] w-[32px]" />
                        <p>6.5</p>
                    </div>
                    <p>Genre</p>
                    <button class="flex justify-center bg-buttonCard px-8 py-2 font-bold text-sm rounded-3xl w-[107px]">View</button>
                </div>
            </div>
        </div>
        <div id="title">
            <p class="text-titleCard font-bold text-base">Title</p>
            <p class="text-subtitleCard font-thin text-sm">2020</p>
        </div>
    </div>
</template>