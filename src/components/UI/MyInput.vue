<script setup lang="ts">
    import { useAttrs } from 'vue';

    const restAttrs = useAttrs();

    defineOptions({ name: 'my-input' });

    const model = defineModel({ default: '' });
    const props = defineProps({ 
        type: { default: 'text', required: true, type: String },
        name: { default: `np_${Date.now()}`, required: true, type: String },
    });
</script>

<template>
  <input 
    class="my-input"
    v-bind="restAttrs"
    v-model="model"
    :type="props.type"
    :name="props.name"
  />
</template>

<style scoped lang="scss">
    .my-input {
        padding: 10px 15px;
        background: none;
        color: white;
        border: 1px solid teal;
        outline: none;
        cursor: text;

        &::placeholder{
            color: white;
            opacity: 0.8;
        }
    
        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
    
        &:focus {
            border-color: rgba(0, 128, 128, 0.8);
        }
    }
</style>
