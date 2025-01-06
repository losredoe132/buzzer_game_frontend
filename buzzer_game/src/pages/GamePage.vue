<template>
  <div>
    <h1>Server-Sent Events</h1>
    <p>Active Team: {{ sseStore.sseData.active_team_id }}</p>
    <p>State: {{ sseStore.sseData.state }}</p>
  </div>
</template>

<script lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useSSEStore } from 'stores/sseStore';


export default {
  setup() {
    const sseStore = useSSEStore();
    let eventSource;
    onMounted(() => {
      eventSource = new EventSource('http://localhost:8000/events');

      eventSource.onmessage = (event) => {
        const partialUpdate = JSON.parse(event.data);
        sseStore.updateSSEData(partialUpdate);
      };

      eventSource.onerror = () => {
        console.error('SSE connection error');
        eventSource.close();
      };
    });

    onUnmounted(() => {
      if (eventSource) {
        eventSource.close();
      }
    });

    return { sseStore };
  },
};
</script>
