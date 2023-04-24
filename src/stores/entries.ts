import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_ENDPOINTS, type Entry } from '@/types'
import { httpClient } from '@/api-client';

export const useEntriesStore = defineStore('entries', () => {

    const currentPage = ref<number>(1);

    const entriesPerPage = ref<number>(20);

    const pagesCount = computed(() => Math.floor((entries.value?.length ?? 0) / entriesPerPage.value))

    const setPage = (page: number) => (currentPage.value = page)

    const entries = ref<Entry[]>();

    const getEntries = computed(() => entries.value?.slice((currentPage.value-1)*entriesPerPage.value, currentPage.value*entriesPerPage.value))

    const fetchEntries = async () => (entries.value = (await httpClient.get(API_ENDPOINTS.ENTRIES)).data.entries)

    return { getEntries, fetchEntries, pagesCount, currentPage, entriesPerPage, setPage }
  })
  