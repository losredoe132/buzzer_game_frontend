<template>
  <h2>Teams</h2>
  <div class="row">
    <div>
      <TeamCard v-for="team in teams" :key="team.id" :name="team.name" :score="team.score" :players="team.players" />
    </div>
    <q-btn color="primary" icon="add" label="Add" />

  </div>
</template>

<script setup>
//
import TeamCard from 'components/TeamCard.vue'
import { api } from 'boot/axios'
import { ref, onMounted } from 'vue'
let teams = ref(null);

function loadData() {
  api.get('/api/team')
    .then((response) => {
      teams.value = response.data;
    })
    .catch(() => {
      console.log("error")
    })
}

// Lifecycle hook
onMounted(() => {
  console.log('Component is mounted');
  loadData();
});

</script>
