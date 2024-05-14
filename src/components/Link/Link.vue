<template>
    <div class="relative overflow-visible">
        <button
            class="flex items-center group max-w-full my-0"
            :class="setClassNames()"
            :title="titlePopover ? undefined : title"
            @click="click"
            @mouseenter="startHoverTimer"
            @mouseleave="clearHoverTimer">
            <PawIcon
                v-if="icon"
                :size="compact ? 'sm' : size"
                :outlined="outlined"
                :class="setIconClassNames()"
                >{{ icon }}</PawIcon
            >
            <span
                v-if="hasSlot"
                class="truncate transition"
                :class="setTextClassNames()">
                <slot></slot>
            </span>
        </button>
        <div
            v-if="showPopover && titlePopover === true"
            class="absolute w-60 bg-white dark:bg-gray-800 border border-gray-200 shadow-2xl dark:border-gray-700 transition-all duration-300 left-0 rounded-md z-[9999] top-full px-4 py-2 text-gray-500">
            <span>{{ title }}</span>
        </div>
    </div>
</template>
<script>
    import PawIcon from "../Icon/Icon.vue";

    export default {
        name: "PawLink",
        emits: ["clicked"],
        data() {
            return {
                hasSlot:
                    this.$slots.default &&
                    this.$slots
                        .default()
                        .filter(
                            (o) =>
                                o.type !== Comment &&
                                (typeof o.children === "string" ||
                                o.children instanceof String
                                    ? o.children.trim()
                                    : o.children) !== ""
                        ).length,
                showPopover: false,
                hoverTimer: null,
            };
        },
        props: {
            size: {
                type: String,
                required: true,
                validator: function (value) {
                    return ["sm", "md", "lg"].includes(value);
                },
            },
            title: {
                type: String,
            },
            titlePopover: {
                type: Boolean,
            },
            icon: {
                type: String,
            },
            align: {
                type: String,
                validator: function (value) {
                    return [undefined, "left", "right"].includes(value);
                },
            },
            color: {
                type: String,
                validator: function (value) {
                    return [
                        undefined,
                        "action",
                        "success",
                        "danger",
                        "warning",
                    ].includes(value);
                },
            },
            compact: {
                type: Boolean,
            },
            outlined: {
                type: Boolean,
            },
            disabled: {
                type: Boolean,
            },
        },
        components: {
            PawIcon,
        },
        methods: {
            click() {
                this.$emit("clicked");
            },

            setClassNames() {
                let className = "";

                // Size-based styles
                switch (this.size) {
                    case "sm":
                        className += "prose-xs element-text";
                        break;
                    case "md":
                        className += "prose-md element-text";
                        break;
                    case "lg":
                        className += "prose-md element-text";
                        break;
                }

                if (!this.disabled) {
                    className += " cursor-pointer";

                    switch (this.color) {
                        case "action":
                            className +=
                                " text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600";
                            break;
                        case "success":
                            className +=
                                " text-success-500 dark:text-success-400 hover:text-success-300 dark:hover:text-success-600";
                            break;
                        case "danger":
                            className +=
                                " text-danger-500 dark:text-danger-400 hover:text-danger-300 dark:hover:text-danger-600";
                            break;
                        case "warning":
                            className +=
                                " text-warning-500 hover:text-warning-300 dark:hover:text-warning-600";
                            break;
                        default:
                            className += " text-gray-500 hover:text-gray-400";
                            break;
                    }
                } else {
                    className +=
                        " text-gray-300 dark:text-gray-600 cursor-default pointer-events-none";
                }

                return className;
            },

            setIconClassNames() {
                let className = "";

                if (!this.disabled) {
                    switch (this.color) {
                        case "action":
                            className +=
                                "group-hover:text-action-300 dark:group-hover:text-action-600";
                            break;
                        case "success":
                            className +=
                                "group-hover:text-success-300 dark:group-hover:text-success-600";
                            break;
                        case "danger":
                            className +=
                                "group-hover:text-danger-300 dark:group-hover:text-danger-600";
                            break;
                        case "warning":
                            className +=
                                "group-hover:text-warning-300 dark:group-hover:text-warning-600";
                            break;
                        default:
                            className +=
                                "text-gray-400 group-hover:text-gray-300";
                            break;
                    }
                }

                // Alignment
                switch (this.align) {
                    case "left":
                        className += " order-1";
                        break;
                    case "right":
                        className += " order-2";
                        break;
                }

                return className + " transition";
            },

            setTextClassNames() {
                let className = "";

                if (this.disabled) {
                    className += "italic";
                }

                // Alignment
                switch (this.align) {
                    case "left":
                        className += ` order-2${!this.compact ? " ml-1" : ""}`;
                        break;
                    case "right":
                        className += ` order-1${!this.compact ? " mr-1" : ""}`;
                        break;
                }

                return className;
            },
            startHoverTimer() {
                this.hoverTimer = setTimeout(() => {
                    this.showPopover = true;
                }, 500);
            },
            clearHoverTimer() {
                setTimeout(() => {
                    clearTimeout(this.hoverTimer);
                    this.showPopover = false;
                }, 500);
            },
        },
    };
</script>

