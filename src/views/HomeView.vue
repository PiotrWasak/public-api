<script setup lang="ts">
import EntryTable from '@/components/EntryTable.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useEntriesStore } from '@/stores/entries'
import { storeToRefs } from 'pinia'

const entriesStore = useEntriesStore()

const { getEntries } = storeToRefs(entriesStore)

entriesStore.fetchEntries();
</script>

<template>
  <div class="entries">
    <EntryTable v-if="getEntries" :entries="getEntries"></EntryTable>
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
