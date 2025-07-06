<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useTasksStore } from '../stores/tasks';

    const tasksStore = useTasksStore();
    const { paginated } = storeToRefs(tasksStore);
    const { setIsDone } = tasksStore; 
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