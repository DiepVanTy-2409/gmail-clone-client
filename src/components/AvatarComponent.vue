<template>
    <div class="h-full w-full overflow-hidden rounded-full">
        <img :src="src" alt="avatar" class="h-full w-full object-cover">
    </div>
</template>


<script setup>
import { defineProps } from 'vue'

defineProps({
    src: String,
})
</script>