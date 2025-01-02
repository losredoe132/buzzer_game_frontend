<template>
    <q-card>
        <q-card-section>
            <h2>
                {{ name }}
            </h2>
            <h6> Score</h6>
            <div> {{ score }}</div>
        </q-card-section>
        <q-card-section>
            <div class="column q-mt-md q-mr-sm">
                <UserItem v-for="player in players" :key="player.name" :name="player.name" />

                <q-btn color="white" text-color="black" icon="add" />
            </div>
        </q-card-section>


        <q-btn color="white" text-color="black" icon="delete" @click="deleteTeam" />

    </q-card>

</template>

<script setup>
import UserItem from 'src/components/UserItem.vue'



defineProps({
    name: String,
    score: Number,
    players: Array
})

</script>