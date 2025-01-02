<template>
    <q-card>
        <q-card-section>
            <q-btn color="white" text-color="black" label="Delete" icon="delete" />
        </q-card-section>
        <q-card-section>
            <h2>
                {{ name }}
            </h2>
            <div>
                Score: {{ mdiScoreboard }}
            </div>
        </q-card-section>
        <q-card-section>
            <div class="column">
                <UserItem v-for="player in players" :key="player.name" :name="player.name" />
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