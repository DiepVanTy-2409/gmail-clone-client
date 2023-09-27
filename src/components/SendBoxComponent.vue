<template>
    <div class="flex flex-col shadow-2xl min-h-[15em] min-w-[30em] bg-white absolute bottom-[1em] right-[1em] z-50 border-gray-200 border-[1px] rounded-xl overflow-hidden"
        :class="isMaximizeSendBox ? 'h-[90%] w-[70%]' : 'h-[70%] w-[40%]'">
        <div class="flex justify-between items-center font-medium bg-[#f2f6fc] px-3">Thư mới
            <div class="flex">
                <ButtonIcon @onclick="$emit('handle-hide-send-box')" :icon="MinusIcon" :size="19" tooltip="Thu nhỏ" />

                <!-- CHANGE SIZE BUTTON -->
                <ButtonIcon @onclick="isMaximizeSendBox = !isMaximizeSendBox"
                    :icon="!isMaximizeSendBox ? ArrowExpandIcon : ArrowCollapseIcon" :size="19" tooltip="Phóng to" />

                <ButtonIcon @onclick="$emit('handle-close-send-box')" :icon="CloseIcon" :size="19" tooltip="Thoát" />
            </div>
        </div>
        <form @submit.prevent="onSubmit" class="px-3 pb-3 flex flex-col flex-1">
            <div class="flex items-center border-b-[1px]" @click="reciverField.focus()">
                <span class="text-base pr-2 text-gray-400">{{ placeholder }}</span>
                <input v-model="formData.toEmail" ref="reciverField" @focus="handleFocus" @blur="handleFocus" type="email"
                    autocomplete required class="flex-1 text-base outline-none border-0 px-0 py-2 focus:ring-0 ">
            </div>
            <div class="border-b-[1px]">
                <input v-model="formData.subject" type="text" placeholder="Tiêu đề" required
                    class="w-full text-base outline-none border-0 px-0 py-2 focus:ring-0 ">
            </div>
            <div class="flex-1">
                <textarea ref="textArea" v-model="formData.body" required
                    class="h-full w-full resize-none text-base outline-none border-0 px-0 py-2 focus:ring-0 ">
            </textarea>

            </div>
            <div class="flex justify-between">
                <div class="flex w-max bg-[#0b57d0] text-white font-semibold rounded-full">
                    <button type="submit" class="flex-1 px-5 py-2 border-e border-black">Gửi</button>
                    <button type="button" class="p-2">
                        <MenuDownIcon />
                    </button>
                </div>
                <div class="flex">
                    <!-- IMOJI  OPEN BUTTON-->
                    <div @click.stop="toggleImojiPicker">
                        <ButtonIcon :icon="EmoticonHappyOutlineIcon" tooltip="Chèn biểu tượng cảm xúc (Ctrl-Shift-2)"
                            tooltipPlacement="top-center" :size="19" />
                    </div>
                    <ButtonIcon :icon="FormatColorTextIcon" tooltip="Tùy chọn định dạng" tooltipPlacement="top-center"
                        :size="19" />
                    <ButtonIcon :icon="PaperclipIcon" tooltip="Đính kèm tệp" tooltipPlacement="top-center" :size="19" />
                    <ButtonIcon :icon="LinkIcon" tooltip="Chèn liên kết (Ctrl-K)" tooltipPlacement="top-center"
                        :size="19" />

                    <ButtonIcon :icon="ImageOutlineIcon" tooltip="Chèn ảnh" tooltipPlacement="top-center" :size="19" />
                    <ButtonIcon :icon="LockRemoveOutlineIcon" tooltip="Bật/tắt chế độ bảo mật" tooltipPlacement="top-center"
                        :size="19" />
                    <ButtonIcon :icon="DotsVerticalIcon" tooltip="Tùy chọn khác" tooltipPlacement="top-center" :size="19" />
                    <ButtonIcon :icon="TrashCanOutlineIcon" tooltip="Bỏ thư nháp (Ctrl-Shift-D)"
                        tooltipPlacement="top-right" :size="19" />
                </div>
            </div>
        </form>
        <div ref="imojiPicker" v-show="isOpenImojiPicker" class="fixed bottom-16 right-8 z-30">
            <EmojiPicker :native="true" @select="onSelectEmoji" />
        </div>
    </div>
</template>


<script setup>
import { ref, defineEmits, reactive, watchEffect } from 'vue'
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'

import { ButtonIcon } from '@/components'
import {
    CloseIcon, MinusIcon, MenuDownIcon, ArrowExpandIcon, FormatColorTextIcon,
    PaperclipIcon, LinkIcon, EmoticonHappyOutlineIcon, ImageOutlineIcon,
    LockRemoveOutlineIcon, DotsVerticalIcon, TrashCanOutlineIcon, ArrowCollapseIcon
} from '@/icons'
import { useUserStore } from '@/store/user-store';
import { sendEmail } from '@/request/email-request'
import { socket } from '@/socketio';


const emit = defineEmits(['handle-hide-send-box', 'handle-close-send-box'])
const useStore = useUserStore()
const isMaximizeSendBox = ref(false)
const isOpenImojiPicker = ref(false)
const cursorPosInTextArea = ref(0)
const imojiPicker = ref(null)
const textArea = ref(null)
const formData = reactive({
    toEmail: "",
    subject: "",
    body: "",
})


/** FOCUS INPUT */

const reciverField = ref(null)
const placeholder = ref('Người nhận')
function handleFocus() {
    if (!reciverField.value.value) {
        placeholder.value = placeholder.value === 'Người nhận' ? 'Đến' : 'Người nhận'
    } else {
        placeholder.value = 'Đến'
    }
}

function toggleImojiPicker(e) {
    if (isOpenImojiPicker.value && !imojiPicker.value.contains(e.target)) {
        isOpenImojiPicker.value = false;
    } else {
        isOpenImojiPicker.value = true;
    }
}

watchEffect(() => {
    // console.log('isOpen ', isOpenImojiPicker.value)
    if (isOpenImojiPicker.value) {
        // console.log("ADD_EVENT_LISTENER")
        document.addEventListener('click', toggleImojiPicker)
    } else {
        // console.log("REMOVE_EVENT_LISTENER")
        document.removeEventListener('click', toggleImojiPicker)
    }
})

/** SELECT EMOJI */
function onSelectEmoji(emoji) {
    // console.log(emoji)
    cursorPosInTextArea.value = textArea.value.selectionStart || cursorPosInTextArea.value
    const startString = formData.body.slice(0, cursorPosInTextArea.value)
    const endString = formData.body.slice(cursorPosInTextArea.value)
    console.log({ cursor: textArea.value.selectionStart })
    console.log({ ref: cursorPosInTextArea.value })
    formData.body = startString + emoji.i + endString
    cursorPosInTextArea.value += 2
}

/** SEND EMAIL */

async function onSubmit() {
    const email = {
        firstName: useStore.firstName,
        lastName: useStore.lastName,
        profilePicture: useStore.picture,
        fromEmail: useStore.email,
        toEmail: formData.toEmail,
        subject: formData.subject,
        body: formData.body,
    }
    const data = await sendEmail(email)
    socket.emit("SEND_EMAIL", data)

    /** CLOSE DIALOG */
    emit('handle-close-send-box')

    //** UPDATE STATE */
    useStore.sendEmail(data)
}

</script>