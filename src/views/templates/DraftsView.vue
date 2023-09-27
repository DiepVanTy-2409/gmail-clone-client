<template>
    <MailListComponent :data="data" />
    <!-- <router-view></router-view> -->
</template>
<script setup>
import { MailListComponent } from '@/components';
const data = [
    {
        _id: 1,
        sender: 'GeesforGeeks',
        title: 'Learn to code RegEx with JavaScript [Free full-length book on Regular Expressions]',
        time: '11:05'
    },
    {
        _id: 2,
        sender: 'StudyTonight',
        title: 'How to learn JavaScript, React.js, Vue.js',
        time: '11:20'
    },
    {
        _id: 3,
        sender: 'GeesforGeeks',
        title: 'Learn to code RegEx with JavaScript [Free full-length book on Regular Expressions]',
        time: '11:05'
    },
    {
        _id: 4,
        sender: 'StudyTonight',
        title: 'How to learn JavaScript, React.js, Vue.js',
        time: '11:20'
    },
    {
        _id: 5,
        sender: 'GeesforGeeks',
        title: 'Learn to code RegEx with JavaScript [Free full-length book on Regular Expressions]',
        time: '11:05'
    },
    {
        _id: 6,
        sender: 'StudyTonight',
        title: 'How to learn JavaScript, React.js, Vue.js',
        time: '11:20'
    },
    {
        _id: 7,
        sender: 'GeesforGeeks',
        title: 'Learn to code RegEx with JavaScript [Free full-length book on Regular Expressions]',
        time: '11:05'
    },
    {
        _id: 8,
        sender: 'StudyTonight',
        title: 'How to learn JavaScript, React.js, Vue.js',
        time: '11:20'
    },
    
]
</script>