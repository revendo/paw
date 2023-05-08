<template>
	<label class="flex items-center max-w-max text-white element-text rounded-full transition"
            :class="setClassNames()"
            :title="title">
        <span class="truncate">
            <slot></slot>
        </span>
	</label>
</template>

<script>
export default {
    name: 'PawLabel',
    data() {
        return {
            hasSlot: this.$slots.default && this.$slots.default().filter(o => o.type !== Comment && (typeof o.children === 'string' || o.children instanceof String ? o.children.trim() : o.children) !== '').length,
        }
    },
    props: {
        size: {
            type: String,
            required: true,
            validator: function(value) {
                return ['sm', 'md', 'lg'].includes(value);
            },
        },
        color: {
            type: String,
            validator: function(value) {
                return [undefined, 'action', 'success', 'danger', 'warning'].includes(value);
            },
        },
        title: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
    },
    methods: {
        setClassNames() {
            let classNames = '';
            switch (this.size) {
                case 'sm':
                    classNames += 'h-6 px-3 prose-xs';
                    break;
                case 'md':
                    classNames += 'h-8 px-3 prose-md';
                    break;
                case 'lg':
                    classNames += 'h-10 px-4 prose-md';
                    break;
            }
            if (this.disabled) {
                classNames += ' bg-gray-200 dark:bg-gray-600 dark:text-gray-800 italic';
                return classNames;
            }
            switch (this.color) {
                case 'action':
                    classNames += ' bg-action-500 dark:bg-action-400';
                    break;
                case 'success':
                    classNames += ' bg-success-500 dark:bg-success-400';
                    break;
                case 'danger':
                    classNames += ' bg-danger-500 dark:bg-danger-400';
                    break;
                case 'warning':
                    classNames += ' bg-warning-500';
                    break;
                default:
                    classNames += ' bg-gray-600 dark:bg-gray-200 dark:text-gray-800';
                    break;
            }
            return classNames;
        },
    }
}
</script>

<style></style>
