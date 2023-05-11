<template>
    <label class="group inline-flex items-center"
           :class="{
                'cursor-pointer': !disabled,
                'pointer-events-none': disabled,
                'gap-1': size === 'sm',
                'gap-2 p-1': size === 'md',
                'gap-3 p-2': size === 'lg',
            }"
           :title="title">
        <span class="relative w-[18px] h-[18px] m-0.75 shrink-0 self-start pointer-events-none">
            <input type="checkbox"
                   @change="change"
                   :checked="checked"
                   :disabled="disabled"
                   class="peer hidden">
            <span class="absolute inset-0 block peer-checked:opacity-100 opacity-0 w-4 h-4 m-px bg-white dark:peer-disabled:bg-gray-500 text-action-500 dark:text-action-400 peer-disabled:text-gray-200 dark:peer-disabled:text-gray-600 overflow-hidden rounded-sm transition z-10">
                <PawIcon size="md"
                         class="ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2">
                    check_box
                </PawIcon>
            </span>
            <span class="absolute inset-0 block group-hover:peer-checked:opacity-100 group-hover:peer-checked:peer-disabled:opacity-0 opacity-0 w-4 h-4 m-px bg-white overflow-hidden rounded-sm transition z-20">
                <PawIcon size="md"
                         class="text-action-500 dark:text-action-400 ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2">
                    indeterminate_check_box
                </PawIcon>
            </span>
            <span class="absolute inset-0 block w-[18px] h-[18px] border-2 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-sm peer-disabled:cursor-default transition z-30">
            </span>
        </span>
        <span v-if="$slots.default" class="text-md transition" :class="disabled ? 'text-gray-300 dark:text-gray-600 italic' : 'text-gray-900 dark:text-white'">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import PawIcon from '../Icon/Icon.vue';

export default {
    name: 'PawCheckbox',
    emits: ['changed'],
    data() {
        return {
            value: this.checked,
        }
    },
    props: {
        size: {
            type: String,
            required: true,
            validator: function(value) {
                return ['sm', 'md', 'lg'].includes(value);
            }
        },
        title: {
            type: String,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        PawIcon,
    },
    methods: {
        change() {
            this.$emit('changed', this.value = !this.value);
        }
    },
}
</script>

<style></style>
