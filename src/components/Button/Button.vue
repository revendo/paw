<template>
  <template v-if="loading">
    <div
      class="flex items-center group max-w-fit my-0 transition"
      disabled
      :class="setClassNames()"
      :title="title"
    ><div class="h-1/3 w-10 bg-gray-500 rounded-full"></div></div
  ></template>
  <template v-if="!loading">
    <button
      class="flex items-center group max-w-full my-0 transition"
      :class="setClassNames()"
      :title="title"
      @click="click"
    >
      <PawIcon
        v-if="icon"
        :size="size"
        :outlined="outlined"
        class="transition"
        :class="setIconClassNames()"
        >{{ icon }}</PawIcon
      >
      <span class="truncate">
        <slot></slot>
      </span></button
  ></template>
</template>

<script>
import PawIcon from "../Icon/Icon.vue";

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
              (typeof o.children === "string" || o.children instanceof String
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
          className += "h-6 prose-xs element-text rounded-sm";
          break;
        case "md":
          className += "h-8 prose-md element-text rounded-md";
          break;
        case "lg":
          className += "h-10 prose-md element-text rounded-lg";
          break;
      }

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
          className +=
            "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 group-active:text-gray-400 dark:group-active:text-gray-400 group-focus:text-action-400 dark:group-focus:text-action-400";
          // Correct icon's position of only-icon button
          if (this.icon && !this.hasSlot) {
            className += "  -ml-px";
          }
        } else {
          className +=
            "text-action-100 dark:text-action-100 group-hover:text-white group-active:text-action-100 dark:group-active:text-action-100 group-focus:text-white dark:group-focus:text-white";
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
        return "bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:text-gray-500 dark:active:text-gray-500 active:bg-white dark:active:bg-gray-800 active:border-gray-400 dark:active:border-gray-400 focus:text-action-500 dark:focus:text-action-400 focus:border-action-500 dark:focus:border-action-400";
      } else {
        return "bg-action-500 dark:bg-action-400 text-white hover:bg-action-300 dark:hover:bg-action-600 active:bg-action-500 dark:active:bg-action-400";
      }
    },
  },
};
</script>

<style></style>
