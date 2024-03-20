<template>
    <label class="inline-flex items-center max-w-full"
           :class="{
                'cursor-pointer': !disabled,
                'pointer-events-none': disabled,
                'gap-1': size === 'sm',
                'gap-2 p-1': size === 'md',
                'gap-3 p-2': size === 'lg',
            }"
           :title="title">
        <span class="block w-5 h-5 m-0.5 shrink-0 self-start pointer-events-none">
            <input type="radio"
                   @change="change"
                   :checked="checked"
                   :disabled="disabled"
                   class="peer hidden">
            <label class="block w-5 h-5 border-2 peer-checked:border-6 peer-checked:bg-white dark:peer-checked:peer-disabled:bg-gray-500 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-full transition">
            </label>
        </span>
        <span v-if="$slots.default" class="text-md truncate transition" :class="disabled ? 'text-gray-300 dark:text-gray-600 italic' : 'text-gray-900 dark:text-white'">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'PawRadio',
    emits: ['changed'],
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
    methods: {
        change() {
            this.$emit('changed', !this.checked);
        },
    },
}
</script>

<style></style>
