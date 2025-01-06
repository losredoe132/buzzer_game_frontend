<template>
    <q-item clickable v-close-popup @click="addPlayerToTeam(playerId, teamId)">
        {{ name }}
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
    // todo show dialog if player is already assigned and if player should be moved from one team to another
    playerStore.assignPlayerToTeam(playerId, teamId);
};

</script>