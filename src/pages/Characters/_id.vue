<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getCharacterById } from '../../services/characters';
import { Character } from '../../interfaces/character';
import { useRoute } from 'vue-router';

const character = ref<Character>({} as Character);

const route = useRoute();
const characterId = Number(route.params.id);

const isLoading = ref<boolean>(true);

const fetchCharacter = async () => {
    character.value = await getCharacterById(characterId);
    isLoading.value = false;
};

onMounted(async () => {
    await fetchCharacter();
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
    <main class="container mx-auto">
        <div id="Character" v-if="character && !isLoading">
            <h1 class="text-lg font-semibold mb-4">{{ character.name }}</h1>

            <span class="block mt-2">Gender : {{ character.gender }}</span>
            <span class="block mt-2">Created : {{ formatDate(character.created) }}</span>

            <ul class="mt-2" v-if="character?.films?.length > 0">
                <p>Seen in :</p>
                <li v-for="film in character.films" :key="film">
                    {{ film }}
                </li>
            </ul>
        </div>

        <span v-if="isLoading" class="block text-center mt-8">Loading...</span>
    </main>
</template>

<style scoped>
li {
    list-style: disc;
    margin-left: 1rem;
}
</style>
