import { defineStore } from 'pinia';


export const useSSEStore = defineStore('sseStore', {
  state: () => ({
    sseData: {},
  }),
  actions: {
    updateSSEData(newData) {
      this.sseData = { ...this.sseData, ...newData }; // Merge the updates
    },
  },
});