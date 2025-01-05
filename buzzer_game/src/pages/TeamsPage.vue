<template>
  <h2>Teams</h2>
  <div class="row">
    <TeamCard v-for="team in teamStore.data" :key="team.id" :id="team.id" :name="team.name" :score="team.score"
      :players="team.players" class="q-ma-md" />
    <q-btn class="q-ma-md" color="primary" icon="add" @click="showTeamDialog" />
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Enter Team Name</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="newteamName" label="Team Name" outlined clearable />
        </q-card-section>

        <q-card-actions>
          <q-btn flat label="Cancel" color="negative" @click="cancel" />
          <q-btn flat label="OK" color="positive" @click="confirm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
//
import TeamCard from 'components/TeamCard.vue'
import { onMounted } from 'vue'
import { ref } from 'vue';
import { useTeamStore } from 'stores/teamStore'; // Import your Pinia store
import { useQuasar } from 'quasar';

const teamStore = useTeamStore();

const newteamName = ref(''); // Stores the inputted team name
const showDialog = ref(false); // Controls dialog visibility
const $q = useQuasar();

onMounted(() => {
  teamStore.fetchData();
});

const confirm = () => {

  if (newteamName.value.trim()) {
    // Handle the input value (e.g., send to an API, update a list)
    console.log('Team Name:', newteamName.value);
    showDialog.value = false; // Close the dialog
    const newItem = { name: newteamName.value, players: [] };
    teamStore.addItem(newItem);
  } else {
    // Show a warning or validation message
    $q.notify({
      message: 'Team Name cannot be empty',
      color: 'warning',
    });
  }
};

// Add a new item
const showTeamDialog = () => {
  showDialog.value = true; // Close the dialog
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
