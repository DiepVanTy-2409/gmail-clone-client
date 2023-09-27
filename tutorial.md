# Vue

1. [Vue cli](https://cli.vuejs.org/)
2. [Google auth library](https://github.com/googleapis/google-auth-library-nodejs)
3. ```vue add tailwind```
4. [Material Design Icons](https://pictogrammers.com/library/mdi/)
5. [Vue icon](https://vue-icons.kalimah-apps.com/?ref=madewithvuejs.com)
6. [@mdi/js](https://www.npmjs.com/package/@mdi/js)
7. [Vue router](https://router.vuejs.org/guide/)

8. __[Continue](https://youtu.be/KE5sQiHRZQg?list=PL3pX4NAc7vJvBhW5bcngX011BsaFpD-Yo&t=5779)__

9. [firebase](https://firebase.google.com/docs/firestore/query-data/listen?hl=en&authuser=0)
10. [firebase2](https://console.firebase.google.com/u/0/project/clone-2c098/firestore/data/~2Femails~2FzaOFiJpIvWiot0HE8Gu5)

11. [imoij](https://github.com/delowardev/vue3-emoji-picker)

```js 

12. Click outside

const handleClickOutside = (e) => {
    if (isOpenProfileCard.value && !avatar.value?.contains(e.target) && !profileCard.value?.contains(e.target)) {
        isOpenProfileCard.value = false
    }
}
onMounted(() => document.documentElement.addEventListener('click', handleClickOutside))
onUnmounted(() => document.documentElement.removeEventListener('click', handleClickOutside))
```

```js
/** CLICK OUTSIDE SendBoxComponent.vue */
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

/** CASE 1 */
<button @click.stop="toggleImojiPicker">OPEN</button>

function toggleImojiPicker(e) {
    if (isOpenImojiPicker.value && !imojiPicker.value.contains(e.target)) {
        isOpenImojiPicker.value = false;
    } else {
        isOpenImojiPicker.value = true;
    }
}


/** CASE 2 */
<button @click="isOpenImojiPicker.value = true">OPEN</button>

function toggleImojiPicker(e) {
    if (isOpenImojiPicker.value && !imojiPicker.value.contains(e.target)) {
        isOpenImojiPicker.value = false;
    }
}

```


```JS
/** APP.vue */
/** LOGOUT WHEN CLICK ""BUTTON OR TOKEN ARE REMOVED */
watch(userStore, () => {
  if (!userStore.email) {
    router.push('/login')
  }
})

```