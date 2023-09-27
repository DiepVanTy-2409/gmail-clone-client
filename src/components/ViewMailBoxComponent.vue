<template>
    <div class="flex flex-col relative h-full overflow-hidden w-full">
        <div class="flex justify-between items-center px-2 py-1 shadow-sm border-b">
            <div class="flex items-center">
                <slot name="toolbar"></slot>
            </div>
            <div class="flex items-center">
                <span class="text-gray-400 text-sm">1-50 trong 2.042</span>
                <ButtonIcon :icon="ChevronLeftIcon" :size="19" tooltip="Mới hơn" />
                <ButtonIcon :icon="ChevronRightIcon" :size="19" tooltip="Cũ hơn" />
            </div>
        </div>
        <div id="mail_list" class="flex-1 overflow-y-scroll">
            <slot name="emails"></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { ButtonIcon } from '@/components';
import {
    ChevronLeftIcon, ChevronRightIcon
} from '@/icons'

defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

</script>


<style scoped>
#mail_list {
    padding-inline-end: 0.5em;
}

#mail_list::-webkit-scrollbar {
    background: white;
    width: 5px;
}

#mail_list::-webkit-scrollbar-thumb {
    background: lightgray;
}
</style>