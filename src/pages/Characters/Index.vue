<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllCharacters } from '../../services/characters';
import { Character } from '../../interfaces/character';
import CharacterCard from '../../components/CharacterCard.vue';

const characters = ref<Character[]>([]);
const page = ref<number>(1);
const isLoading = ref<boolean>(false);

const fetchCharacters = async () => {
    characters.value = [];
    isLoading.value = true;
    const newCharacters = await getAllCharacters(page.value);
    characters.value = newCharacters;
    characters.value.sort((a, b) => a.name.localeCompare(b.name));
    isLoading.value = false;
};

onMounted(async () => {
    await fetchCharacters();
});

const incrementPage = () => {
    page.value++;
    fetchCharacters();
};

const decrementPage = () => {
    page.value--;
    fetchCharacters();
};
</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-lg font-semibold mb-4">Characters</h1>

        <ul class="grid gap-4 grid-cols-4">
            <li v-for="character in characters" :key="character.id">
                <CharacterCard :character="character" />
            </li>
        </ul>

        <span v-if="isLoading" class="block text-center mt-8">Loading...</span>

        <div class="mt-8 flex justify-between items-center">
            <button @click="decrementPage()"
                class="bg-gray-200 px-4 py-2 font-semibold rounded-lg shadow-md hover:scale-105 transition">First
                page</button>
            <span>Page
                {{ page }}</span>
            <button @click="incrementPage()"
                class="bg-gray-200 px-4 py-2 font-semibold rounded-lg shadow-md hover:scale-105 transition">Next
                page</button>
        </div>

    </main>
</template>

<style scoped>
</style>
