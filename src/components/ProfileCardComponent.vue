<template>
    <div class="flex flex-col items-center gap-y-2 border bg-white p-4 shadow-md rounded-md">
        <figure class=" flex items-center gap-4 ">
            <img :src="userStore.picture" :alt="userStore.firstName + userStore.lastName"
                class="object-cover rounded-full h-16 w-16" />
            <figcaption>
                <p>{{ `${userStore.firstName} ${userStore.lastName}` }}</p>
                <p>{{ userStore.email }}</p>
            </figcaption>
        </figure>
        <button @click="handleLogout"
            class="self-end font-semibold py-1 px-4 transition border-2 rounded-sm  border-rose-500 text-rose-500 hover:text-white hover:bg-rose-500">Đăng
            xuất</button>
    </div>
</template>


<script setup>

import { useUserStore } from '@/store/user-store';

const userStore = useUserStore()
const handleLogout = () => {
    userStore.clear()
}
</script>