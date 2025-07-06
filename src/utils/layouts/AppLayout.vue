<script setup lang="ts">
  import { Header } from '../../components';
</script>

<template>
  <div class="app-container">
    <Header />

    <router-view />
  </div>
</template>

<style scoped lang="scss">
  .app-container{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
