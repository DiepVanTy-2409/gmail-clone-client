<template>
    <Transition name="fade">
        <slot></slot>
    </Transition>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5em);
}
</style>