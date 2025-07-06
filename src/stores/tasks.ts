import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref([]);
  const taskText = ref("");
  const currentPage = ref(1);
  const perPage = 5;

  const tasksCount = computed(() => tasks.value.length);

  const totalPages = computed(() =>
    Math.max(1, Math.ceil(tasksCount.value / perPage))
  );
  const paginated = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    return tasks.value.slice(start, start + perPage);
  });

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

  function goToPage(p) {
    currentPage.value = Math.min(Math.max(1, p), totalPages.value);
  }

  return {
    taskText,
    paginated,
    tasksCount,
    currentPage,
    tasks,
    perPage,
    createTask,
    setIsDone,
    goToPage,
  };
});
