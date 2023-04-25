<script setup lang="ts">
import type { Filters } from '@/types'
import { ref } from 'vue'
import { watchDebounced } from '@vueuse/core'

interface Props {
  categories: string[]
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'filterChange', filters: Filters): void
}>()

const filters = ref<Filters>({
  title: '',
  category: ''
})

watchDebounced(
  filters,
  (value) => {
    emit('filterChange', value)
  },
  { debounce: 500, deep: true }
)
</script>

<template>
  <div class="filter-bar">
      <v-text-field
        clearable
        v-model="filters.title"
        label="Title"
        @keydown.escape="filters.title=''"
      ></v-text-field>
    <v-select v-model="filters.category" label="Category" :items="categories"></v-select>
  </div>
</template>

<style lang="scss">
.filter-bar {
  display: flex;
  margin: 10px 30px;
  gap: 30px;
}
</style>
