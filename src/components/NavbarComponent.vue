<template>
    <nav class="flex items-center gap-2 px-4 relative">
        <div class="flex items-center gap-2 basis-[19%]">
            <ButtonIcon :icon="MenuIcon" tooltip="Menu" />
            <div class="gmail_logo ">
                <LogoComponent />
            </div>
        </div>
        <SearchBar />
        <ButtonIcon :icon="HelpCircleOutlineIcon" tooltip="Hỗ trợ" />
        <ButtonIcon :icon="CogOutlineIcon" tooltip="Cài đặt" />
        <ButtonIcon :icon="AppsIcon" tooltip="Các ứng dụng của google" />
        <div ref="avatar">
            <ButtonIcon @onclick="handleToggle"
                :tooltip="`Tài khoản Google\u000D\u000A${userStore.firstName} ${userStore.lastName}\u000d\u000a${userStore.email}`"
                tooltipPlacement="bottom-right">
                <AvatarComponent :src="userStore.picture" :alt="`${userStore.firstName} ${userStore.lastName}`" />
            </ButtonIcon>
        </div>
        <!-- <Icon :icon="ArrowLeftIcon" tooltip="Apps icon" /> -->
        <!-- <Icon :icon="TrashCanOutlineIcon" /> -->
        <div ref="profileCard" v-show="isOpenProfileCard" class="absolute top-[110%] right-[1em] z-20">
            <ProfileCardComponent />
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { ButtonIcon, LogoComponent, SearchBar, AvatarComponent, ProfileCardComponent } from '@/components'
import { MenuIcon, HelpCircleOutlineIcon, CogOutlineIcon, AppsIcon, } from '@/icons'

import { useUserStore } from '@/store/user-store'

const userStore = useUserStore()
const isOpenProfileCard = ref(false)
const profileCard = ref(null);
const avatar = ref(null);

const handleToggle = () => isOpenProfileCard.value = !isOpenProfileCard.value
const handleClickOutside = (e) => {
    if (isOpenProfileCard.value && !avatar.value?.contains(e.target) && !profileCard.value?.contains(e.target)) {
        isOpenProfileCard.value = false
    }
}
onMounted(() => document.documentElement.addEventListener('click', handleClickOutside))
onUnmounted(() => document.documentElement.removeEventListener('click', handleClickOutside))
</script>