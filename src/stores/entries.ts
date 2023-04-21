import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_ENDPOINTS, type Entry } from '@/types'
import { httpClient } from '@/api-client';

export const useEntriesStore = defineStore('entries', () => {
    const entries = ref<Entry[]>();

    const getEntries = computed(() => entries)

    const fetchEntries = async () => (entries.value = (await httpClient.get(API_ENDPOINTS.ENTRIES)).data.entries)

    return { getEntries, fetchEntries }
  })
  