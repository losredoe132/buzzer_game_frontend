<template>
    <q-card>
        <div class="row">
            <div>
                {{ teamId }}
            </div>
            <div>
                <q-btn color="white" text-color="black" icon="delete" @click="deleteTeam(teamId)" />
            </div>
        </div>

        <q-card-section>
            <div>
                {{ teamName }}
            </div>
            <div>
                Score{{ score }}
            </div>
        </q-card-section>
        <q-card-section>
            <div class="column q-mt-md q-mr-sm">
                <UserItem v-for="player in players" :key="player.name" :name="player.name" :id="player.id"
                    :teamId="player.team" />
                <q-btn color="white" text-color="black" icon="add">
                    <q-menu>
                        <PlayerAssignment v-for="p in playerStore.data" :key="p.name" :playerId="p.id" :name="p.name"
                            :teamId="teamId" />
                    </q-menu>
                </q-btn>
            </div>
        </q-card-section>
    </q-card>

</template>

<script setup>
import UserItem from 'src/components/UserItem.vue'
import PlayerAssignment from 'src/components/PlayerAssignment.vue'
import { usePlayerStore } from 'stores/playerStore'; // Import your Pinia store
import { useTeamStore } from 'stores/teamStore'; // Import your Pinia store

const playerStore = usePlayerStore();
const teamStore = useTeamStore();


defineProps({
    teamId: Number,
    teamName: String,
    score: Number,
    players: Array
})



// Delete an item
function deleteTeam(itemId) {
    teamStore.deleteItem(itemId)
}

const getAllPlayers = () => {
    playerStore.fetchData();
};

const addPlayerToTeam = (player_id, team_id) => {
    playerStore.assignPlayerToTeam(player_id, team_id);
};





</script>