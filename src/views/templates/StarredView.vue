<template>
    <EmojiPicker :native="true" @select="onSelectEmoji" />
</template>
<script setup>
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css' 

function onSelectEmoji(emoji) {
  console.log(emoji)
}
</script>