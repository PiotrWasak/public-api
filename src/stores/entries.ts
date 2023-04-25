import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_ENDPOINTS, type CategoryResponse, type EntriesResponse, type Entry, type Filters } from '@/types'
import { httpClient } from '@/api-client'

export const useEntriesStore = defineStore('entries', () => {
  const currentPage = ref<number>(1)

  const entriesPerPage = ref<number>(20)

  const pagesCount = computed(() => Math.ceil((entries.value?.length ?? 0) / entriesPerPage.value))

  const setPage = (page: number) => (currentPage.value = page)

  const entries = ref<Entry[]>()

  const entriesLoading = ref<boolean>(false)

  const categories = ref<string[]>()

  const getEntries = computed(() =>
    entries.value?.slice(
      (currentPage.value - 1) * entriesPerPage.value,
      currentPage.value * entriesPerPage.value
    )
  )

  const fetchEntries = async (filters?: Filters) => {
    entriesLoading.value = true
    entries.value = (
      await httpClient.get<EntriesResponse>(API_ENDPOINTS.ENTRIES, {
        params: {
          ...filters
        }
      })
    ).data.entries
    entriesLoading.value = false
  }

  const fetchCategories = async () =>
    (categories.value = (
      await httpClient.get<CategoryResponse>(API_ENDPOINTS.CATEGORIES)
    ).data.categories)

  return {
    getEntries,
    entries,
    entriesLoading,
    fetchEntries,
    pagesCount,
    currentPage,
    entriesPerPage,
    setPage,
    categories,
    fetchCategories
  }
})
