<template>
    <q-card class="relative">
        <div class="absolute-top-right">
            <q-btn color="white" text-color="black" icon="delete" @click="deleteTeam" />

        </div>
        <q-card-section>
            <h6>
                {{ name }}
            </h6>
            <div> Score{{ score }}</div>
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



defineProps({
    name: String,
    score: Number,
    players: Array
})

</script>