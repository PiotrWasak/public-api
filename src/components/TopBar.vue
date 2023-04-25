<script setup lang="ts"></script>

<template>
  <div class="top-bar">
    <img class="top-bar__logo" src="../assets/images/logo.png" />
    <div class="top-bar__slogan">List of Public APIs!</div>
    </div>
</template>

<style lang="scss">
.top-bar {
  background-color: rgba(0, 0, 0, 0.1);
  height: 100px;
  display: flex;
  align-items: center;
  &__logo {
    height: inherit;
  }
  &__slogan {
    margin: 0 40px;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>
