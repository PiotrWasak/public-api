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
  <v-table class="entry-table">
    <thead>
      <tr>
        <th class="entry-table__header" v-for="header in Object.keys(props.entries[0])" :key="header">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="entry in entries"
        :key="entry.Link"
        class="entry-table__row"
      >
        <td v-for="(element, index) in entry" :key="index">{{ element || 'No' }}</td>
      </tr>
    </tbody>
  </v-table>

  <v-pagination :length="pagesCount" v-model="page"></v-pagination>
</template>


<style lang="scss">
.entry-table {
  &__header {
    // Overwrite vuetify style
    font-weight: 700 !important
  }
}
</style>