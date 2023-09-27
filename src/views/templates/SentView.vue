<template>
    <MailListComponent role="receiver" @on-refresh="userStore.getEmailSent()" :data="userStore.emailsSent" />
    <!-- <router-view></router-view> -->
</template>
<script setup>
import { MailListComponent } from '@/components';
import { useUserStore } from '@/store/user-store'
import { onMounted } from 'vue'; 

const userStore = useUserStore();
onMounted(() => userStore.getEmailSent())

</script>