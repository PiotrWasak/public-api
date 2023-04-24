<script setup lang="ts">
import type { Entry } from '@/types';

interface Props {
    entries: Entry[]
}

defineProps<Props>();

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
</template>


<style scoped>

</style>