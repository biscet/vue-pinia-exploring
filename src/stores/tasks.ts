import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref([]);
  const taskText = ref("");

  const tasksCount = computed(() => tasks.value.length);

  function createTask() {
    const text = taskText.value;

    if (!text) {
      return;
    }

    tasks.value.push({ id: Date.now(), text, isDone: false });

    taskText.value = "";
  }

  function setIsDone(id) {
    const editTask =
      tasks.value[tasks.value.findIndex(({ id: taskId }) => taskId === id)];

    editTask.isDone = !editTask.isDone;
  }

  return {
    taskText,
    tasksCount,
    tasks,
    createTask,
    setIsDone,
  };
});
