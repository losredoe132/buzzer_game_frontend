<template>
  <q-item clickable @click="goTo(props.link)">

    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goTo(link) {
  router.push(link);
}
const props = defineProps({
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  }
})
</script>
