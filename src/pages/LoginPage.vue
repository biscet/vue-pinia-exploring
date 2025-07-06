<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useAuthStore } from '../stores/auth';
    import { useRouter } from 'vue-router';
    import { PATHS } from '../utils/router';

    const router = useRouter();
    const { email, password, isAuth, setIsAuth } = useAuthStore();

    onMounted(() => {
        if(isAuth){
            router.replace(PATHS.APP);
        }
    })
</script>

<template>
    <h2>Вход</h2>

    <form class="my-form my-form_login" @submit.prevent="setIsAuth">
        <my-input 
            type="email"
            name="email"
            v-model="email"
            required
        />

        <my-input 
            type="password"
            name="password"
            required
            v-model="password"
        />

        <my-button type="submit">Войти</my-button>
    </form>
</template>

<style scoped lang="scss">
    h2 {
        text-align: center;
        margin: 15px auto;
    }

    .my-form {
        margin: 15px auto;

        &_login{
            max-width: 320px;
        }
    }
</style>