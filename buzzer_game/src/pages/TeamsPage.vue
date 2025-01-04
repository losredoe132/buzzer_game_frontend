<template>
  <h2>Teams</h2>
  <div class="row">
    <div class="row q-mt-md q-mr-sm">
      <TeamCard v-for="team in teamStore.data" :key="team.id" :name="team.name" :score="team.score"
        :players="team.players" />
    </div>
    <div>
      <q-btn color="primary" icon="add" label="Add" @click="addTeam" />

    </div>
  </div>
</template>

<script setup>
//
import TeamCard from 'components/TeamCard.vue'
import { ref, onMounted } from 'vue'
import { useTeamStore } from 'stores/teamStore'; // Import your Pinia store
const teamStore = useTeamStore();


onMounted(() => {
  teamStore.fetchData();
});

// Add a new item
const addNewItem = () => {
  const newItem = { name: 'New Item' };
  teamStore.addItem(newItem);
};

// Edit an existing item
const editItem = (item) => {
  const updatedItem = { ...item, name: 'Updated Name' };
  teamStore.updateItem(updatedItem);
};

// Delete an item
const deleteItem = (id) => {
  teamStore.deleteItem(id);
};
</script>
