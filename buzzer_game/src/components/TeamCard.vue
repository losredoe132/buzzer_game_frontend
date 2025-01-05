<template>
    <q-card>
        <div class="row justify-end">
            <q-btn color="white" text-color="black" icon="delete" @click="deleteTeam(id)" />

        </div>
        <q-card-section>
            <div>
                {{ name }}
            </div>
            <div>
                Score{{ score }}
            </div>
        </q-card-section>
        <q-card-section>
            <div class="column q-mt-md q-mr-sm">
                <UserItem v-for="player in players" :key="player.name" :name="player.name" />

                <q-btn color="white" text-color="black" icon="add" />
            </div>
        </q-card-section>



    </q-card>

</template>

<script setup>
import UserItem from 'src/components/UserItem.vue'

import { useTeamStore } from 'stores/teamStore'; // Import your Pinia store


defineProps({
    id: Number,
    name: String,
    score: Number,
    players: Array
})
const teamStore = useTeamStore();


// Delete an item
function deleteTeam(itemId) {
    try {
        teamStore.delete(`/api/resource/${itemId}`);
        this.data = this.data.filter((item) => item.id !== itemId); // Update store
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}

</script>