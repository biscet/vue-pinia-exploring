<script setup lang="ts">
    import { PropType, useAttrs } from 'vue';

    const restAttrs = useAttrs();

    defineOptions({ name: 'my-button' });

    const props = defineProps({ 
        type: { 
            default: 'button', 
            required: true, 
            type: String as PropType<'button' | 'reset' | 'submit'> 
        },
    });
</script>

<template>
  <button
    class="my-button"
    v-bind="restAttrs"
    :type="props.type"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
    .my-button {
        padding: 10px 15px;
        background: none;
        color: white;
        border: 1px solid teal;
        cursor: pointer;

        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
    
        &:focus {
            border-color: rgba(0, 128, 128, 0.8);
        }
    }
</style>
