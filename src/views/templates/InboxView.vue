<template>
    <MailListComponent @on-refresh="userStore.getEmailReceived()" :data="userStore.emailsReceived" />
</template>
<script setup>
import { MailListComponent } from '@/components';
import { useUserStore } from '@/store/user-store'

const userStore = useUserStore()
</script>