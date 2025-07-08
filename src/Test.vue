<script setup lang="ts">
    import { onMounted, ref } from 'vue';

const colorRef = ref('red')

    const emit = defineEmits(['blick'])

    const onClick = () => {
        emit('blick', '3')
        colorRef.value = 'green';
    }


</script>

<template>
  <button class="btn" @click="onClick">asd</button>
</template>

<style scoped lang="scss">
  .btn{
    color: v-bind(colorRef);
  }
</style>
