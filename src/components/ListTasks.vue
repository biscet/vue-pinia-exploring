<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useTasksStore } from '../stores/tasks';
    import { computed } from 'vue';

    const tasksStore = useTasksStore();
    const { tasks, currentPage } = storeToRefs(tasksStore);
    const { setIsDone, perPage } = tasksStore; 

    const tasksPerPage = computed(() => {
        const start = (currentPage.value - 1) * perPage;
        return tasks.value.slice(start, start + perPage);
    });
</script>

<template>
    <div class="tasks-box" v-for="task in tasksPerPage" :key="task.id">
       {{ task.text }}

       <my-button
            type="button"
            @click="setIsDone(task.id)"
        >
            {{ task.isDone ? 'Выполнена' : 'Не выполнена' }}
        </my-button>
    </div>
</template>

<style scoped lang="scss">
    .tasks-box{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 4px 10px;
    }
</style>