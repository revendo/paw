<template>
    <button class="flex items-center group my-0 h-8 w-full prose-md element-text rounded-md transition"
            :class="!disabled ?
                'text-action-500 dark:text-action-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800 active:text-white active:bg-action-500 dark:active:bg-action-400 focus:text-white dark:focus:text-white focus:bg-action-500 dark:focus:bg-action-400' :
                'bg-gray-200 dark:bg-gray-600 text-white dark:text-gray-800 italic cursor-default pointer-events-none'"
            :title="title"
            @click="click">
        <PawIcon v-if="icon"
                 :size="size"
                 :outlined="outlined"
                 class="ml-0.75 mr-2 transition"
                 :class="!disabled ? 'text-action-500 dark:text-action-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 group-active:text-action-100 dark:group-active:text-action-100 group-focus:text-white dark:group-focus:text-white' : 'text-gray-100 dark:text-gray-700'">
            {{ icon }}
        </PawIcon>
        <span class="flex-grow text-left truncate" :class="!icon ? 'ml-3' : ''">
            <slot></slot>
        </span>
        <PawIcon size="sm"
                 class="opacity-0 text-gray-400"
                 :class="!disabled ? 'group-hover:opacity-100 group-focus:text-action-100 dark:group-focus:text-action-100 group-focus:opacity-100 group-active:text-action-100 dark:group-active:text-action-100 group-active:opacity-100' :''">
            navigate_next
        </PawIcon>
    </button>
</template>

<script>
import PawIcon from '../Icon/Icon'

export default {
    name: 'PawListItem',
    emits: ['clicked'],
    data() {
        return {
            hasSlot: this.$slots.default && this.$slots.default().filter(o => o.type !== Comment && (typeof o.children === 'string' || o.children instanceof String ? o.children.trim() : o.children) !== '').length,
        }
    },
    props: {
        title: {
            type: String
        },
        icon: {
            type: String
        },
        size: {
            type: String,
            validator: function(value) {
                return [undefined, 'sm', 'md', 'lg'].includes(value);
            },
            default: 'md'
        },
        outlined: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
    },
    components: {
        PawIcon
    },
    methods: {
        click() {
            this.$emit('clicked');
        },
    }
}
</script>

<style></style>
