import { defineStore, storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { useTasksStore } from "./tasks";

export const useTasksPaginationStore = defineStore("tasks-pagination", () => {
  const { tasks, tasksCount } = storeToRefs(useTasksStore());
  const currentPage = ref(1);
  const perPage = 5;

  const totalPages = computed(() =>
    Math.max(1, Math.ceil(tasksCount.value / perPage))
  );

  const paginated = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    return tasks.value.slice(start, start + perPage);
  });

  function goToPage(p) {
    currentPage.value = Math.min(Math.max(1, p), totalPages.value);
  }

  function prevPage() {
    goToPage(currentPage.value - 1);
  }

  function nextPage() {
    goToPage(currentPage.value + 1);
  }

  return {
    paginated,
    currentPage,
    perPage,
    totalPages,
    prevPage,
    nextPage,
    goToPage,
  };
});
