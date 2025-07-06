<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useTasksStore } from '../stores/tasks';

    const tasksStore = useTasksStore();
    const { taskText } = storeToRefs(tasksStore);
    const { createTask } = tasksStore; 
</script>

<template>
    <div class="create-box">
        <my-input 
            name="task-text"
            type="text"
            v-model.trim="taskText"
        />

        <my-button 
            type="button" 
            @click="createTask"
            :disabled="taskText.length === 0"
        >
            Создать таску
        </my-button>
    </div>
</template>

<style scoped lang="scss">
    .create-box {
        width: 100%;
        display: flex;
        gap: 8px;

        input {
            width: 100%;
        }

        button {
            width: max-content;
            flex-shrink: 0;
        }
    }
</style>