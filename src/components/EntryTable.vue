<script setup lang="ts">
import type { Entry } from '@/types';

interface Props {
    entries: Entry[]
}

defineProps<Props>();

</script>

<template>
    {{  entries }}
</template>


<style scoped>

</style>