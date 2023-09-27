<template>
    <aside class="basis-[19%]">
        <div class="py-4  w-full mb-2">
            <button @click="$emit('handle-toggle-send-box')"
                class="flex items-center gap-2 ml-4 bg-[#c2e7ff] py-3 px-4 rounded-xl hover:shadow-lg">
                <PencilOutlineIcon /> Soạn thư
            </button>
        </div>
        <router-link v-for="route in routes" :key="route._id" :to="route.path"
            class="flex items-center gap-2 py-1 px-8 whitespace-nowrap rounded-e-full hover:bg-gray-100 text-[#5f6368] tooltip tooltip--center-right"
            :data-tooltip="route.title">
            <component :is="route.icon" :size="21" />
            <span class="relative block w-full">{{ route.title }}
                <sup v-if="route.path === '/inbox' && newEmail "
                    class="absolute top-[50%] right-[-2.3em] bg-rose-500 h-6 w-6 flex items-center justify-center translate-y-[-50%] text-white font-semibold rounded-full">
                    {{ newEmail }}</sup>
            </span>
        </router-link>
    </aside>
    <!-- <pre>{{ JSON.stringify($route, null, 4) }}</pre> -->
</template>

<script setup>
import { defineEmits, computed } from 'vue'
import { PencilOutlineIcon, InboxIcon, StarOutlineIcon, ClockOutlineIcon, FileOutlineIcon, SendVariantOutline, } from '@/icons'
import { useUserStore } from '@/store/user-store';

defineEmits(['handle-toggle-send-box'])
const userStore = useUserStore()

const newEmail = computed(() => userStore.emailsReceived?.filter(email => !email?.hasViewed).length)
const routes = [
    { _id: 1, title: 'Hộp thư đến', path: '/inbox', icon: InboxIcon },
    { _id: 2, title: 'Có gắn dấu sao', path: '/starred', icon: StarOutlineIcon },
    { _id: 3, title: 'Đã tạm ẩn', path: '/snoozed', icon: ClockOutlineIcon },
    { _id: 4, title: 'Đã gửi', path: '/sent', icon: SendVariantOutline },
    { _id: 5, title: 'Thư nháp', path: '/drafts', icon: FileOutlineIcon },
]



</script>