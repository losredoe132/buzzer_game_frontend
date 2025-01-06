<template>
    <div class="q-pa-xsm q-ma-sm" style="border: 1px solid #ccc; border-radius: 8px;">
        <q-expansion-item expand-separator icon="perm_identity" :label="name" caption="Player">
            <q-card>
                <q-card-section>
                    Player ID {{ id }} @ team {{ teamId }}
                    <q-btn @click="unassignPlayer" icon="person_remove" />


                </q-card-section>

            </q-card>
        </q-expansion-item>
    </div>
</template>

<script setup>
import { usePlayerStore } from 'stores/playerStore'; // Import your Pinia store

const props = defineProps({
    name: String,
    id: Number,
    teamId: Number
})
const playerStore = usePlayerStore();


const unassignPlayer = () => {
    playerStore.assignPlayerToTeam(props.id, null);

};


</script>