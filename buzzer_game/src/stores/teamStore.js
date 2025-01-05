// stores/myStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';

export const useTeamStore = defineStore('myStore', {
  state: () => ({
    data: [], // Store data
  }),
  actions: {

    // Fetch data from API
    async fetchData() {
      const $q = useQuasar()
      api.get('/api/team')
        .then((response) => {
          console.log(response.data)
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
      try {
        const response = await axios.post('/api/team', newItem);
        this.data.push(response.data); // Add new item to store
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },

    // Update an item
    async updateItem(updatedItem) {
      try {
        await axios.put(`/api/resource/${updatedItem.id}`, updatedItem);
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
        await axios.delete(`/api/resource/${itemId}`);
        this.data = this.data.filter((item) => item.id !== itemId); // Update store
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
  },
});
