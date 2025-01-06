// stores/myStore.js
import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import { useTeamStore } from 'stores/teamStore'; // Import your Pinia store
import { reactive } from 'vue';
const $q = useQuasar();

const teamStore = useTeamStore();

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    data: reactive([]), // Store data
  }),
  actions: {

    // Fetch data from API
    async fetchData() {
      api.get('/api/player')
        .then((response) => {
          this.data = response.data
          console.log(response.data)
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed: error',
            icon: 'report_problem'
          })
        })
    },

    // Add a new item
    async addItem(newItem) {
      api.post('/api/player/', newItem)
        .then((response) => {
          this.data.push(response.data); // Add new item to store
        })
        .catch((error) => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: error.message,
            icon: 'report_problem'
          })
        })
    },
    // Update an item
    async updateItem(updatedItem) {
      try {
        await api.put(`/api/player/${updatedItem.id}`, updatedItem);
        const index = this.data.findIndex((item) => item.id === updatedItem.id);
        if (index !== -1) {
          this.data[index] = updatedItem; // Update store
        }
      } catch (error) {
        console.error('Error updating item:', error);
      }
    },

    // Delete an item
    async deleteItem(itemId) {
      try {
        await api.delete(`/api/player/${itemId}`);
        this.data = this.data.filter((item) => item.id !== itemId); // Update store
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },

    // Assign player to team
    async assignPlayerToTeam(playerId, teamId) {
      try {
        await api.patch(`/api/player/${playerId}/`, { team: teamId });
        const index = this.data.findIndex((item) => item.id === playerId)
        this.data[index].team = teamId

        // refetch teamStore, because the teamStore is used to show the list of users in a team  
        // We could also manually move the player from on team to the other in the store but refetching from the backend is more robust. 
        teamStore.fetchData();

      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
  },
});
