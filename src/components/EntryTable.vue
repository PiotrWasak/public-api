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


</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Description
        </th>
        <th class="text-left">
          Category
        </th>
        <th class="text-left">
          Link
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="entry in entries"
        :key="entry.API"
      >
        <td>{{ entry.API}}</td>
        <td>{{ entry.Description }}</td>
        <td>{{ entry.Category }}</td>
        <td>{{ entry.Link }}</td>
      </tr>
    </tbody>
  </v-table>

  <v-pagination :length="pagesCount" v-model="page"></v-pagination>
</template>


<style scoped>

</style>