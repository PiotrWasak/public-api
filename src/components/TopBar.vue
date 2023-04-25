<script setup lang="ts">
import { useTheme } from 'vuetify'
import { usePreferredDark } from '@vueuse/core'


const theme = useTheme()

const isDark = usePreferredDark()
if(isDark) theme.global.name.value = 'dark'

const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
</script>

<template>
  <div class="top-bar">
    <img class="top-bar__logo" src="../assets/images/logo.png" />
    <div class="top-bar__slogan">List of Public APIs!</div>
    <v-icon class="top-bar__theme-button" @click="toggleTheme">mdi-theme-light-dark</v-icon>
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
  }
  &__theme-button {
    margin-left: auto;
    margin-right: 24px;
  }
}
</style>
