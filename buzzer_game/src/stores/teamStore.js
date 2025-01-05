// stores/myStore.js
import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
const $q = useQuasar();

export const useTeamStore = defineStore('myStore', {
  state: () => ({
    data: [], // Store data
  }),
  actions: {

    // Fetch data from API
    async fetchData() {
      api.get('/api/team')
        .then((response) => {
          this.data = response.data
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    },

    // Add a new item
    async addItem(newItem) {
      api.post('/api/team/', newItem)
        .then((response) => {
          this.data.push(response.data); // Add new item to store
        })
        .catch((error) => {
          // $q.notify({
          //   color: 'negative',
          //   position: 'top',
          //   message: 'Loading failed',
          //   icon: 'report_problem'
          // })
          console.log(error)
        })
    },
    // Update an item
    async updateItem(updatedItem) {
      try {
        await api.put(`/api/resource/${updatedItem.id}`, updatedItem);
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
        await api.delete(`/api/teams/${itemId}`);
        this.data = this.data.filter((item) => item.id !== itemId); // Update store
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
  },
});
