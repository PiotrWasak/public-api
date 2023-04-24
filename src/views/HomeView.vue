<script setup lang="ts">
import EntryTable from '@/components/EntryTable.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useEntriesStore } from '@/stores/entries'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const entriesStore = useEntriesStore()

const { getEntries, pagesCount, currentPage } = storeToRefs(entriesStore)

entriesStore.fetchEntries()

const handlePageChange = (newPage: number) => {
  entriesStore.setPage(newPage);
}
</script>

<template>
  <div class="entries">
    <EntryTable
      v-if="getEntries"
      :entries="getEntries"
      :pages-count="pagesCount"
      :current-page="currentPage"
      @change-page="handlePageChange"
    ></EntryTable>
    <LoadingSpinner class="entries__loading-spinner" v-else></LoadingSpinner>
  </div>
</template>

<style lang="scss">
.entries {
  &__loading-spinner {
    margin: 80px;
  }
}
</style>
