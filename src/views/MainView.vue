<template>
  <NavbarComponent />
  <main class="flex gap-4">
    <SidebarComponent @handle-toggle-send-box="handleOpenSendBox" />
    <div class="flex-1 h-[calc(100vh-5em)] overflow-hidden w-full bg-white rounded-3xl shadow-sm mt-2">
      <router-view />
    </div>
    <!-- RIGHT SIDE -->
    <div></div>
    <!-- <KeepAlive> -->
    <!-- </KeepAlive> -->
    <FadeTransition>
      <SendBoxComponent v-if="isOpenSendBox" v-show="isShowSendBox" v-on:handle-close-send-box="isOpenSendBox = false"
        v-on:handle-hide-send-box="isShowSendBox = false" />
    </FadeTransition>
  </main>
</template>
  
  
<script setup>
import { ref, onMounted } from 'vue'
import { NavbarComponent, SidebarComponent, SendBoxComponent, FadeTransition } from '@/components';
import { useUserStore } from '@/store/user-store'
import { socket } from '@/socketio';

const isShowSendBox = ref(false) /** SHOW - HIDE */
const isOpenSendBox = ref(false) /** CLOSE */
function handleOpenSendBox() {
  isShowSendBox.value = true
  isOpenSendBox.value = true
}


const userStore = useUserStore()
onMounted(() => {
  userStore.getEmailReceived()
})

/** ONLINE & OFFLINE ON SOCKET */
socket.emit('USER_ONLINE', userStore.email)

socket.on('RECEIVE_EMAIL', (data) => {
  userStore.getNewEmail(data)
})  
</script>