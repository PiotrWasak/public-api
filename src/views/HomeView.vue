<script setup lang="ts">
import EntryTable from '@/components/EntryTable.vue'
import FilterBar from '@/components/FilterBar.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useEntriesStore } from '@/stores/entries'
import { storeToRefs } from 'pinia'

const entriesStore = useEntriesStore()

const { getEntries, pagesCount, currentPage, categories, entriesLoading } = storeToRefs(entriesStore)



entriesStore.fetchEntries()
entriesStore.fetchCategories();
</script>

<template>
  <div class="entries">
    <FilterBar v-if="categories" :categories="categories" @filter-change="entriesStore.fetchEntries"></FilterBar>
    <LoadingSpinner class="entries__loading-spinner" v-if="entriesLoading"></LoadingSpinner>
    <EntryTable
      v-else-if="getEntries"
      :entries="getEntries"
      :pages-count="pagesCount"
      :current-page="currentPage"
      @change-page="entriesStore.setPage"
    ></EntryTable>
    <div v-else class="entries__no-data">No entries found.</div>
  </div>
</template>

<style lang="scss">
.entries {
  &__loading-spinner {
    margin: 80px;
  }
  &__no-data {
    text-align: center;
    color: var(--caption-color)
  }
}
</style>
