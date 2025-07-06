<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '../stores/auth';
  import { useTasksStore } from '../stores/tasks';

  const { setIsGuest } = useAuthStore();
  const { tasksCount } = storeToRefs(useTasksStore());
</script>

<template>
  <header class="header">
    <div class="header__box">
      <div class="header__logo">Tasks App</div>
      <p>Всего тасок - {{ tasksCount }}</p>
    </div>
    

    <my-button @click="setIsGuest" type="button">Выйти</my-button>
  </header>
</template>

<style scoped lang="scss">
  .header{
    padding: 0px 12px;
    background-color: rgba(0, 128, 128, 0.05);
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    &__logo{
      color: teal;
      cursor: pointer;
    }

    &__box{
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
</style>
