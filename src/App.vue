<template>
  <router-view />
</template>

<script setup>
import axios from "axios";
import { watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from '@/store/user-store'
import { logout } from '@/request/auth-request'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URI
/** FOR COOKIES */
axios.defaults.withCredentials = true
axios.defaults.credential = 'include'

const router = useRouter()
const userStore = useUserStore()

/** LOGOUT WHEN CLICK ""BUTTON OR TOKEN ARE REMOVED */
watch(() => userStore.email, async () => {
  if (!userStore.email) {
    await logout()
    router.push('/login')
  }
})

</script>

<style>
body {
  padding-block-start: 0.5em;
  background-color: #f9fbff;
  /* padding-inline: 1em; */
}

.router-link-active:not(.logo),
.router-link-active:not(.logo):hover {
  background-color: #d3e3fd !important;
  font-weight: 600 !important;
}

.tooltip {
  position: relative;
}

.tooltip:hover::before {
  content: attr(data-tooltip);
  white-space: pre;
  text-align: start;
  font-weight: bold;
  display: block;
  position: absolute;
  z-index: 100;
  background: #313131;
  color: white;
  font-size: 0.7rem;
  padding: 0.3em 0.6em;
  border-radius: 0.2em;
  opacity: 0.8;
  width: max-content;
}

.tooltip--bottom-center:hover::before {
  top: 130%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip--top-center:hover::before {
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip--bottom-right:hover::before {
  top: 130%;
  right: 0;
}

.tooltip--top-right:hover::before {
  bottom: 130%;
  right: 0%;
}

.tooltip--center-right:hover::before {
  top: 50%;
  transform: translateY(-50%);
  left: calc(100% + 1em);
}
</style>