<template>
  <button
    class="inline-flex items-center group my-0 max-w-full rounded-full overflow-hidden transition"
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
    </span>
    <PawIcon
      v-if="!disabled"
      size="sm"
      class="transition"
      :class="setCloseClassNames()"
      >close</PawIcon
    >
  </button>
</template>

<script>
import PawIcon from "../Icon/Icon.vue";

export default {
  name: "PawChip",
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

      switch (this.size) {
        case "sm":
          className += "h-6 prose-xs element-text";
          break;
        case "md":
          className += "h-8 prose-md element-text";
          break;
        case "lg":
          className += "h-10 prose-md element-text";
          break;
      }

      switch (this.size) {
        case "sm":
          className += this.disabled ? " pr-2" : "";
          break;
        case "md":
          className += this.disabled ? " pr-4" : " pr-0.75";
          break;
        case "lg":
          className += this.disabled ? " pr-5" : " pr-1.5";
          break;
      }

      if (!this.icon) {
        switch (this.size) {
          case "sm":
            className += " pl-2";
            break;
          case "md":
            className += " pl-4";
            break;
          case "lg":
            className += " pl-5";
            break;
        }
      }

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
            "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200";
        } else {
          className +=
            "text-action-100 dark:text-action-100 group-hover:text-white";
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

    setCloseClassNames() {
      let className = "";

      // Filled / Outlined
      if (this.outlined) {
        className +=
          "text-gray-400 group-hover:text-action-500 dark:group-hover:text-action-400";
      } else {
        className +=
          "text-action-100 dark:text-action-100 group-hover:text-white";
      }

      // Margin after text
      switch (this.size) {
        case "sm":
          className += " ml-2";
          break;
        case "md":
          className += " ml-3";
          break;
        case "lg":
          className += " ml-4";
          break;
      }

      return className;
    },

    setStates() {
      if (this.disabled) {
        return "italic text-white dark:text-gray-800 bg-gray-200 dark:bg-gray-600 cursor-default pointer-events-none";
      }

      // Outlined / Filled
      if (this.outlined) {
        return "bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
      } else {
        return "bg-action-500 dark:bg-action-400 text-white hover:bg-action-300 dark:hover:bg-action-600";
      }
    },
  },
};
</script>

<style></style>
