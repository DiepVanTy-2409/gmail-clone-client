<template>
    <ViewMailBoxComponent>
        <template v-slot:toolbar>
            <ButtonIcon :icon="CheckboxBlankOutlineIcon" :size="19" tooltip="Chọn" />
            <ButtonIcon :icon="MenuDownIcon" :size="19" tooltip="Chọn" />
            <ButtonIcon @onclick="$emit('on-refresh')" :icon="RefreshIcon" :size="19" tooltip="Làm mới" />
            <ButtonIcon :icon="DotsVerticalIcon" :size="19" tooltip="Thêm" />
        </template>
        <template v-slot:emails>
            <template v-if="role === 'sender'">
                <MailRowComponent v-for="mail in data" :key="mail?._id" :id="mail?._id" :sender="mail?.fromEmail"
                    :title="mail?.subject" :hasViewed="mail.hasViewed" :time="mail?.createdAt" />
            </template>
            <template v-else>
                <MailRowComponent v-for="mail in data" :key="mail?._id" :id="mail?._id" :receiver="mail?.toEmail"
                    :title="mail?.subject" :hasViewed="mail.hasViewed" :time="mail?.createdAt" />
            </template>
        </template>
    </ViewMailBoxComponent>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { ButtonIcon, MailRowComponent, ViewMailBoxComponent } from '@/components';
import {
    CheckboxBlankOutlineIcon, MenuDownIcon, RefreshIcon, DotsVerticalIcon,
} from '@/icons'

defineProps({
    data: {
        type: Array,
        default: () => []
    },
    role: {
        type: String,
        default: () => 'sender'
    }
})

defineEmits([
    'on-refresh'
])

</script>
