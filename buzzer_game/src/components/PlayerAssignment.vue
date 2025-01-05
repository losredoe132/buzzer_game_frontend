<template>
    <q-item clickable v-close-popup @click="addPlayerToTeam(playerId, teamId)">
        <q-item-section>
            {{ name }}
        </q-item-section>
    </q-item>


</template>

<script setup>
import { usePlayerStore } from 'stores/playerStore'; // Import your Pinia store

const playerStore = usePlayerStore();

defineProps({
    playerId: Number,
    teamId: Number,
    name: String,
})

const addPlayerToTeam = (playerId, teamId) => {
    playerStore.assignPlayerToTeam(playerId, teamId);
};

</script>