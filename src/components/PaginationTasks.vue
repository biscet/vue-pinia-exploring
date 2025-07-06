<script setup lang="ts">
    import { ref, computed, watch } from 'vue';
    import { useTasksStore } from '../stores/tasks';
    import { storeToRefs } from 'pinia';

    const tasksStore = useTasksStore();
    const { tasks, currentPage } = storeToRefs(tasksStore);
    const { perPage, } = tasksStore; 


    const totalPages = computed(() =>
      Math.max(1, Math.ceil(tasks.value.length / perPage))
    );


    function go(page) {
      currentPage.value = Math.min(Math.max(1, page), totalPages.value);
    }

    function prev() { 
      go(currentPage.value - 1); 
    }

    function next() { 
      go(currentPage.value + 1); 
    }

    watch(
      () => tasks.value.length,
      () => { 
        if (currentPage.value > totalPages.value) {
          go(totalPages.value)
        }
      });
</script>

<template>
    <nav v-if="totalPages > 1" class="pagination">
      <my-button type="button" :disabled="currentPage === 1" @click="prev"><</my-button>
  
      <my-button
        v-for="n in totalPages"
        :key="n"
        :class="[{ 'font-bold': n === currentPage }, 'px-2']"
        type="button"
        @click="go(n)"
      >
        {{ n }}
      </my-button>
  
      <my-button type="button" :disabled="currentPage === totalPages" @click="next">></my-button>
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