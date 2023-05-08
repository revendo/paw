<template>
    <div v-if="!items || Object.keys(items).length === 0"
         class="flex items-center w-full p-4 mb-8 bg-warning-100 dark:bg-warning-800 text-warning-800 dark:text-warning-100 rounded-lg transition"
         :class="!hasSlot ? 'hidden' : ''">
        <slot></slot>
    </div>
	<div v-else
         v-for="(item, i) in items"
         :key="i"
         class="py-1.5"
         :class="{
             'border-t border-gray-200 dark:border-gray-700 transition': divider && i > 0
         }">
        <PawListItem :icon="item.icon ?? icon"
                           :size="item.size ?? size"
                           :title="item.title ?? title"
                           :outlined="item.outlined ?? outlined"
                           :disabled="item.disabled ?? disabled"
                           @clicked="click(i)">
            {{ item.text }}
        </PawListItem>
	</div>
</template>

<script>
import PawListItem from './ListItem';

export default {
    name: 'PawList',
    emits: ['clicked'],
    data() {
        return {
            hasSlot: this.$slots.default && this.$slots.default().filter(o => o.type !== Comment && (typeof o.children === 'string' || o.children instanceof String ? o.children.trim() : o.children) !== '').length,
        }
    },
    props: {
        items: {
            type: Object,
            required: true
        },
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
        divider: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean
        },
    },
    components: {
        PawListItem
    },
    methods: {
        click(value) {
            this.$emit('clicked', value);
        },
    },
}
</script>

<style></style>
