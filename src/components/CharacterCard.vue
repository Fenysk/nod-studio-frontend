<script setup lang="ts">
import { defineProps } from 'vue';
import { Character } from '../interfaces/character';

defineProps({
    character: {
        type: Object as () => Character,
        required: true,
    },
});

const formatDate = (date: string) => {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
</script>

<template>
    <router-link :to="'/characters/' + character.id"
        class="bg-gray-200 block p-4 rounded-lg shadow-md hover:scale-105 transition cursor-pointer">
        <span class="block"> {{ character.name }}</span>
        <span class="block text-xs text-black/50">Créé le {{ formatDate(character.created) }}</span>
    </router-link>
</template>
