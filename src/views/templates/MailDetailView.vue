<template>
    <template v-if="emailDetail">
        <ViewMailBoxComponent>
            <template v-slot:toolbar>
                <ButtonIcon @onclick="$router.back()" :icon="ArrowLeftIcon" :size="19" tooltip="Trở về" />
            </template>
            <template v-slot:emails>
                <div class="py-4 px-20">
                    <h2 class="font-semibold text-2xl pt-2 pb-4">{{ emailDetail?.subject }}</h2>
                    <figure class="flex gap-4 items-center">
                        <div class="h-12 w-12">
                            <AvatarComponent :src="emailDetail?.profilePicture"
                                :alt="`${emailDetail?.firstName} ${emailDetail?.lastName}`" />
                        </div>
                        <figcaption>
                            <p class="font-semibold">{{ `${emailDetail?.firstName} ${emailDetail?.lastName}` }}</p>
                            <p class="italic text-gray-500 text-sm">{{ emailDetail?.fromEmail }}</p>
                        </figcaption>
                    </figure>
                    <div class="flex items-center justify-between">
                        <p class="italic text-gray-500 text-sm mt-2">Đến: {{ emailDetail?.toEmail }}</p>
                        <p class="italic text-gray-500 text-sm mt-2">{{ moment(emailDetail?.createdAt).format('lll') }} ({{
                            moment(emailDetail?.createdAt).fromNow() }})</p>
                    </div>
                    <p class="indent-[1em] py-2">{{ emailDetail?.body }}</p>
                </div>
            </template>
        </ViewMailBoxComponent>
    </template>
    <template v-else>
        <p class="text-5xl text-gray-500 text-center mt-20">Loadding...</p>
    </template>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import moment from 'moment';

import { getEmailById } from '@/request/email-request';
import { useUserStore } from '@/store/user-store';

import { ViewMailBoxComponent, ButtonIcon, AvatarComponent } from '@/components';
import { ArrowLeftIcon } from '@/icons'

const emailDetail = ref(null)
const id = useRoute().params.mailId
onMounted(async () => {
    emailDetail.value = await getEmailById(id)
    if (emailDetail.value && !emailDetail.value.hasViewed) {
        useUserStore().viewedEmail(id)
    }
})
</script>