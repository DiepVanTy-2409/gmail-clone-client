<template>
    <div class="h-[calc(100vh-3em)] flex flex-col items-center justify-center gap-4">
        <LogoComponent :size="100" />
        <GoogleLogin :callback="callback" />
        <!-- <pre class="text-sm">
            {{ userStore }}
        </pre> -->
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import { GoogleLogin } from 'vue3-google-login';

import { LogoComponent } from '@/components';
import { useUserStore } from '@/store/user-store'

const router = useRouter()
const userStore = useUserStore()


const callback = async (response) => {
    await userStore.getUserFromGoogle(response)
    if (userStore.email) {
        router.push('/')
    }
}
</script>