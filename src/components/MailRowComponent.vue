<template>
    <div :class="{ 'font-semibold': !hasViewed && !receiver }"
        class="grid grid-cols-[2.5em_2.5em_1fr_auto] items-center pr-2 border-gray-200 border-t  hover:shadow-md hover:border-1 px-2">
        <ButtonIcon :icon="CheckboxBlankOutlineIcon" :size="19" tooltip="Chọn" />
        <ButtonIcon :icon="StarOutlineIcon" :size="19" tooltip="Gắn dấu sao" />
        <router-link :to="`mail/${id}`" class="grid grid-cols-[minmax(auto,15em)_1fr] cursor-pointer">
            <div>
                <span v-if="receiver" class="text-gray-400 text-sm">Đến: </span>
                <span>{{ sender || receiver }}</span>
            </div>
            <span class="mx-4 whitespace-nowrap text-ellipsis overflow-hidden">{{ title }}</span>
        </router-link>
        <p class="text-end text-gray-400 text-sm">{{ moment(time).format('lll') }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import moment from 'moment'

import { ButtonIcon } from '@/components';
import {
    CheckboxBlankOutlineIcon, StarOutlineIcon
} from '@/icons'

defineProps([
    'id', 'sender', 'title', 'time', 'hasViewed', 'receiver'
])


</script>
