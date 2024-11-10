import {createRouter, createwebHistory } from 'vue-router';
import AppHeader from './components/AppHeader.vue';

const router = createRouter({
    history: createwebHistory(),
    routes: [
        {
            path: 'http://127.0.0.1:8000/',
            name: 'Header',
            component: AppHeader
        },
    ]
});

export { router };