<script setup lang="ts">
import type { Entry } from '@/types';
import { computed } from 'vue';

interface Props {
    entries: Entry[];
    pagesCount: number;
    currentPage: number;
}

const emit = defineEmits<{
  (e: 'changePage', page: number): void
}>()

const props = defineProps<Props>();

const page = computed({
  get() {
    return props.currentPage;
  },
  set(newValue) {
    emit("changePage", newValue)
  }
})

console.log(Object.keys(props.entries[0]));



</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="header in Object.keys(props.entries[0])" :key="header">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="entry in entries"
        :key="entry.API"
      >
        <td v-for="(element, index) in entry" :key="index">{{ element || 'No' }}</td>
      </tr>
    </tbody>
  </v-table>

  <v-pagination :length="pagesCount" v-model="page"></v-pagination>
</template>


<style scoped>

</style>