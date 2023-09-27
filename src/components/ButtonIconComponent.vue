<template>
  <button @click="$emit('onclick')" ref="iconContainer" :data-tooltip="tooltip"
    :class="[hoverClass || `hover:bg-gray-100`, { tooltip: tooltip }]"
    class="flex items-center justify-center h-10 w-10 cursor-pointer rounded-full p-1" :type="type || 'button'">
    <component :is="icon" :size="size || 24" :fillColor="color || `#5f6368`" />
    <slot></slot>
  </button>
</template>

<script setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue'
const props = defineProps(['icon', 'size', 'color', 'hoverClass', 'tooltip', 'tooltipPlacement', 'type'])
defineEmits(['onclick'])
const iconContainer = ref(null)
onMounted(() => {
  if (props.tooltip) {
    iconContainer.value.classList.add(`tooltip--${props.tooltipPlacement || 'bottom-center'}`)
  }
})

</script>

