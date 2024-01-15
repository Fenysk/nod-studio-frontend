import { createRouter, createWebHistory } from 'vue-router';
import IndexVue from './pages/Index.vue';
import CharactersVue from './pages/Characters/Index.vue';
import CharacterVue from './pages/Characters/_id.vue';
import ComparisonVue from './pages/Comparison.vue';

const routes = [
    {
        path: '/',
        component: IndexVue,
    },
    {
        path: '/characters',
        component: CharactersVue,
    },
    {
        path: '/characters/:id',
        component: CharacterVue,
    },
    {
        path: '/comparison',
        component: ComparisonVue,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
