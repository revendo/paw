<template>
    <div
        v-if="loading"
        class="flex items-center group max-w-fit my-0 transition"
        disabled
        :class="setClassNames()"
        :title="title">
        <div class="h-1/3 w-10 bg-gray-500 rounded-full"></div>
    </div>
    <button
        v-else
        class="flex items-center group max-w-full my-0 transition"
        :class="setClassNames()"
        :disabled="disabled || processing"
        :title="title"
        @click="click">
        <PawIcon
            v-if="icon && !processing"
            :size="size"
            :outlined="outlined"
            class="transition"
            :class="setIconClassNames()"
            >{{ !processing ? icon : "sync" }}</PawIcon
        >
        <transition
            enter-active-class="transitiona ease-in"
            enter-from-class="opacity-0 delay-150 ease-out"
            enter-to-class="opacity-100 ">
            <PawLoadingSpinner
                v-show="processing"
                class="transition w-full delay-150"
                :class="
                    processing
                        ? 'max-w-fit my-auto py-0.5 mx-2'
                        : 'max-w-0 mx-0'
                "
                loaderSize="sm"
                :spinnerColorClasses="
                    setClassNames().includes('-action-') && !outlined
                        ? 'fill-white text-gray-300 dark:text-gray-600'
                        : 'fill-action-500 text-gray-300 dark:text-gray-600'
                " />
        </transition>
        <span class="truncate">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import PawIcon from "../Icon/Icon.vue";
    import PawLoadingSpinner from "../LoadingSpinner/LoadingSpinner.vue";

    export default {
        name: "PawButton",
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
            icon: {
                type: String,
            },
            outlined: {
                type: Boolean,
            },
            disabled: {
                type: Boolean,
            },
            /* State */
            loading: {
                type: Boolean,
                default: false,
            },
            processing: {
                type: Boolean,
                default: () => {
                    false;
                },
            },
            buttonRoundedClasses: {
                type: String,
                default: "",
            },
            buttonColorClasses: {
                type: String,
                default: "",
            },
            buttonBackgroundClasses: {
                type: String,
                default: "",
            },
            iconColorClasses: {
                type: String,
                default: "",
            },
        },
        components: {
            PawIcon,
            PawLoadingSpinner,
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
                        className += "h-6 prose-xs element-text";
                        break;
                    case "md":
                        className += "h-8 prose-md element-text ";
                        break;
                    case "lg":
                        className += "h-10 prose-md element-text";
                        break;
                }

                let roundedClass =
                    this.buttonRoundedClasses !== ""
                        ? ` ${this.buttonRoundedClasses} `
                        : ` rounded-${this.size} `;
                className += roundedClass;

                // Set width if only icon
                if (this.icon && !this.hasSlot && !this.loading) {
                    switch (this.size) {
                        case "sm":
                            className += " w-6";
                            break;
                        case "md":
                            className += " w-8";
                            break;
                        case "lg":
                            className += " w-10";
                            break;
                    }
                }

                // Paddings
                className += " " + this.setPaddings(this.size);

                // States
                className += " " + this.setStates();

                if (this.disabled || this.processing) {
                    className += " cursor-not-allowed";
                }

                return className;
            },

            setIconClassNames() {
                let className = "";

                // Disabled icon
                if (this.disabled) {
                    className += "text-gray-100 dark:text-gray-700";
                } else {
                    // Filled / Outlined
                    if (this.outlined) {
                        let iconColor =
                            this.iconColorClasses ||
                            "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 group-active:text-gray-400 dark:group-active:text-gray-400 group-focus:text-action-400 dark:group-focus:text-action-400";
                        className += iconColor;
                        // Correct icon's position of only-icon button
                        if (this.icon && !this.hasSlot) {
                            className += "  -ml-px";
                        }
                    } else {
                        let iconColor =
                            this.iconColorClasses ||
                            "text-action-100 dark:text-action-100 group-hover:text-white group-active:text-action-100 dark:group-active:text-action-100 group-focus:text-white dark:group-focus:text-white";
                        className += iconColor;
                    }
                }

                if (!this.hasSlot) {
                    return className;
                }

                // Margin before text
                switch (this.size) {
                    case "sm":
                        className += " mr-0.75";
                        break;
                    case "md":
                        className += " mr-1";
                        break;
                    case "lg":
                        className += " mr-1";
                        break;
                }

                return className;
            },

            setPaddings(size) {
                // Processing
                if (this.processing) {
                    switch (size) {
                        case "sm":
                            return "pr-2.75 pl-1";
                        case "md":
                            return "pr-2.75 pl-1";
                        case "lg":
                            return "pr-3.75 pl-1";
                    }
                }
                // Loading
                if (this.loading) {
                    // Outlined
                    if (this.outlined) {
                        switch (size) {
                            case "sm":
                                return "px-2.75";
                            case "md":
                                return "px-2.75";
                            case "lg":
                                return "px-3.75";
                        }
                    }

                    // Filled
                    switch (size) {
                        case "sm":
                            return "px-3";
                        case "md":
                            return "px-3";
                        case "lg":
                            return "px-4";
                    }
                }
                // Only icon
                if (this.icon && !this.hasSlot) {
                    return;
                }

                // Icon & text
                if (this.icon && this.hasSlot) {
                    // Outlined
                    if (this.outlined) {
                        switch (size) {
                            case "sm":
                                return "pl-0.5 pr-1.75";
                            case "md":
                                return "pl-0.5 pr-2.75";
                            case "lg":
                                return "pl-0.75 pr-2.75";
                        }
                    }

                    switch (size) {
                        case "sm":
                            return "pl-0.75 pr-2";
                        case "md":
                            return "pl-0.75 pr-3";
                        case "lg":
                            return "pl-1 pr-3";
                    }
                }

                // Only text
                if (!this.icon && this.hasSlot) {
                    // Outlined
                    if (this.outlined) {
                        switch (size) {
                            case "sm":
                                return "px-2.75";
                            case "md":
                                return "px-2.75";
                            case "lg":
                                return "px-3.75";
                        }
                    }

                    // Filled
                    switch (size) {
                        case "sm":
                            return "px-3";
                        case "md":
                            return "px-3";
                        case "lg":
                            return "px-4";
                    }
                }
            },

            setStates() {
                if (this.loading) {
                    return "bg-gray-400 loading-bubble";
                }
                if (this.disabled) {
                    return "italic text-white dark:text-gray-800 bg-gray-200 dark:bg-gray-600 cursor-default pointer-events-none";
                }

                // Outlined / Filled
                if (this.outlined) {
                    // Custom background and text colors or Default
                    let bgClasses =
                        this.buttonBackgroundClasses ||
                        "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-white dark:active:bg-gray-800";
                    let textColorClasses =
                        this.buttonColorClasses ||
                        "text-gray-500 hover:text-gray-900 dark:hover:text-white active:text-gray-500 dark:active:text-gray-500 focus:text-action-500 dark:focus:text-action-400 ";

                    return `${bgClasses} ${textColorClasses} border border-gray-200 dark:border-gray-600 active:border-gray-400 dark:active:border-gray-400 focus:border-action-500 dark:focus:border-action-400`;
                } else {
                    // Custom background and text colors or Default
                    let bgClasses =
                        this.buttonBackgroundClasses ||
                        "bg-action-500 dark:bg-action-400 hover:bg-action-300 dark:hover:bg-action-600 active:bg-action-500 dark:active:bg-action-400";
                    let textColorClasses =
                        this.buttonColorClasses || "text-white";

                    return `${bgClasses} ${textColorClasses}`;
                }
            },
        },
    };
</script>

<style></style>

