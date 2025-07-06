<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';

  const router = useRouter();
  const { isAuth } = useAuthStore();

  onMounted(() => {
    router.replace(isAuth ? '/app' : '/login')
  });
</script>

<template>
  <div class="redirecting">
    <p>Перенаправляем…</p>
  </div>
</template>

<style scoped lang="scss">
    .redirecting {
        width: 100vw;
        height: 100vh;
        text-align: center;
    }
</style>
