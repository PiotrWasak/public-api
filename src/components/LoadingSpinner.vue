<script setup lang="ts"></script>

<template>
  <div class="loading-spinner">
    <span class="loading-spinner__spinner"></span>
  </div>
</template>

<style scoped lang="scss">
.loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  &__spinner {
    width: 48px;
    height: 48px;
    border: 5px solid red;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}
</style>
