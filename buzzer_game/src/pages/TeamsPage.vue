<template>
  <h2>Teams</h2>
  <div class="row">
    <TeamCard v-for="team in teamStore.data" :key="team.id" :name="team.name" :score="team.score"
      :players="team.players" class="q-ma-md" />
    <q-btn class="q-ma-md" color="primary" icon="add" @click="addTeam" />

  </div>
</template>

<script setup>
//
import TeamCard from 'components/TeamCard.vue'
import { onMounted } from 'vue'
import { useTeamStore } from 'stores/teamStore'; // Import your Pinia store
const teamStore = useTeamStore();


onMounted(() => {
  teamStore.fetchData();
});

// Add a new item
const addTeam = () => {
  const newItem = { name: 'New Item' };
  teamStore.addItem(newItem);
};

// Edit an existing item
// eslint-disable-next-line no-unused-vars
const editItem = (item) => {
  const updatedItem = { ...item, name: 'Updated Name' };
  teamStore.updateItem(updatedItem);
};

// Delete an item
// eslint-disable-next-line no-unused-vars
const deleteItem = (id) => {
  teamStore.deleteItem(id);
};
</script>
