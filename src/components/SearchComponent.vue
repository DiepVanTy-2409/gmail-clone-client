<template>
    <div class="flex flex-1 rounded-full p-1" :class="isFocus ? 'bg-white shadow-md' : 'bg-[#eaf1fb]'">
        <ButtonIcon :icon="MagnifyIcon" tooltip="Tìm kiếm" />
        <input @focus="handleFocus" @blur="handleFocus" class="flex-1 border-0 outline-0 bg-transparent focus:ring-0"
            type="text" placeholder="Tìm kiếm trong thư">
        <ButtonIcon :icon="TuneIcon" tooltip="Hiển thị tùy chọn tìm kiếm" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ButtonIcon } from '@/components'
import { MagnifyIcon, TuneIcon } from '@/icons'

const isFocus = ref(false)
function handleFocus() {
    isFocus.value = !isFocus.value;
}

</script>
