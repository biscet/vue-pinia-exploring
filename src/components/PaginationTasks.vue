<script setup lang="ts">
    import { watch } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useTasksPaginationStore } from '../stores/tasksPagination';
    import { useTasksStore } from '../stores/tasks';

    const { tasks } = storeToRefs(useTasksStore());

    const tasksPaginationStore = useTasksPaginationStore();
    const { currentPage, totalPages } = storeToRefs(tasksPaginationStore);
    const { goToPage, prevPage, nextPage, } = tasksPaginationStore; 

    watch(
      () => tasks.value.length,
      () => { 
        if (currentPage.value > totalPages.value) {
          goToPage(totalPages.value)
        }
      });
</script>

<template>
    <nav v-if="totalPages > 1" class="pagination">
      <my-button type="button" :disabled="currentPage === 1" @click="prevPage"><</my-button>
  
      <my-button
        v-for="n in totalPages"
        :key="n"
        :class="[{ 'font-bold': n === currentPage }, 'px-2']"
        type="button"
        @click="goToPage(n)"
      >
        {{ n }}
      </my-button>
  
      <my-button type="button" :disabled="currentPage === totalPages" @click="nextPage">></my-button>
    </nav>
</template>

<style scoped lang="scss">
  .pagination{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
  }
</style>