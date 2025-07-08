<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useTasksStore } from '../stores/tasks';
    import { useTasksPaginationStore } from '../stores/tasksPagination';

    const { setIsDone } = useTasksStore();
    const { paginated } = storeToRefs(useTasksPaginationStore());
</script>

<template>
    <div class="tasks-box" v-for="task in paginated" :key="task.id">
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