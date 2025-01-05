<template>
  <q-page padding>
    <q-table flat :rows="playerStore.data" :columns="columns" row-key="id">
      <template v-slot:top>
        <q-btn color="primary" @click="openAddDialog" label="Add Player" icon="add" />
      </template>

      <template v-slot:body-cell-actions="props">
        <div class="q-pa-xs" style="text-align: right;">
          <q-btn flat dense icon="edit" color="primary" @click="openEditDialog(props.row)" />
          <q-btn flat dense icon="delete" color="negative" @click="deletePlayer(props.row.id)" />
        </div>
      </template>
    </q-table>

    <q-dialog v-model="dialog.open">
      <q-card style="min-width: 400px;">
        <q-card-section>
          <div class="text-h6">{{ dialog.editing ? 'Edit Player' : 'Add Player' }}</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="dialog.form.name" label="Name" outlined />
          <q-input v-model="dialog.form.age" type="number" label="Age" outlined />
        </q-card-section>

        <q-card-actions>
          <q-btn flat label="Cancel" color="negative" @click="closeDialog" />
          <q-btn flat label="Save" color="primary" @click="confirmAddingNewPlayer" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue'
import { usePlayerStore } from 'stores/playerStore'; // Import your Pinia store
import { useQuasar } from 'quasar';



const playerStore = usePlayerStore();
const players = ref([
  { id: 1, name: 'Player 1', age: 25 },
  { id: 2, name: 'Player 2', age: 30 },
]);

onMounted(() => {
  playerStore.fetchData();
});


const columns = [
  { name: 'name', label: 'Name', field: 'name', align: 'left' },
  { name: 'age', label: 'Age', field: 'age', align: 'left' },
  { name: 'team', label: 'Team', field: 'team', align: 'left' },
  {
    name: 'actions',
    label: 'Actions',
    field: null,
    align: 'right',
    headerStyle: 'text-align: right;',
    style: 'text-align: right;'
  },
];
const $q = useQuasar();

const dialog = ref({
  open: false,
  editing: false,
  form: { id: null, name: '', age: null },
});

const openAddDialog = () => {
  dialog.value.open = true;
  dialog.value.editing = false;
  dialog.value.form = { id: null, name: '', age: null };
};

const openEditDialog = (player) => {
  dialog.value.open = true;
  dialog.value.editing = true;
  dialog.value.form = { ...player };
};

const closeDialog = () => {
  dialog.value.open = false;
};

const confirmAddingNewPlayer = () => {

  if (dialog.value.form.name.trim()) {
    // Handle the input value (e.g., send to an API, update a list)
    dialog.value.open = false; // Close the dialog
    const newItem = { name: dialog.value.form.name, age: dialog.value.form.age };
    playerStore.addItem(newItem);
  } else {
    // Show a warning or validation message
    $q.notify({
      message: 'Player Name cannot be empty',
      color: 'warning',
    });
  }
};
const deletePlayer = (id) => {
  players.value = players.value.filter((player) => player.id !== id);
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
