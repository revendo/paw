<template>
    <span :class="setClassNames()">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'PawIcon',
    props: {
        size: {
            type: String,
            required: true,
            validator: function(value) {
                return ['sm', 'md', 'lg'].includes(value);
            }
        },
        outlined: {
            type: Boolean
        },
    },
    methods: {
        setClassNames() {
            let className = `material-icons${this.outlined ? '-outlined' : ''}`;
            switch (this.size) {
                case 'sm':
                    className += ' text-icon-sm p-0.75 w-6 h-6';
                    break;
                case 'md':
                    className += ' text-icon-md p-1 w-8 h-8';
                    break;
                case 'lg':
                    className += ' text-icon-md p-2 w-10 h-10';
                    break;
            }
            return className;
        }
    }
}
</script>

<style></style>
