<template>
  <label
    class="group inline-flex items-center"
    :class="{
      'cursor-pointer': !disabled,
      'gap-1': size === 'sm',
      'gap-2 p-1': size === 'md',
      'gap-3 p-2': size === 'lg',
    }"
    :title="title"
  >
    <input
      ref="toggle"
      type="checkbox"
      @change="change"
      :checked="checked"
      :disabled="disabled"
      class="peer hidden"
    />
    <span
      class="relative w-8 h-5 m-0.5 shrink-0 self-start bg-gray-400 peer-disabled:bg-gray-200 dark:peer-disabled:bg-gray-600 peer-checked:bg-action-500 dark:peer-checked:bg-action-500 rounded-full transition"
    >
      <span
        class="block w-4 h-4 bg-white m-0.5 rounded-full shadow-box dark:shadow-box-dark transition"
        :class="[
          value ? 'translate-x-3' : 'translate-x-0',
          toggle?.disabled ? 'dark:bg-gray-400' : '',
        ]"
      >
      </span>
    </span>
    <span
      v-if="$slots.default"
      class="text-md transition"
      :class="
        disabled
          ? 'text-gray-300 dark:text-gray-600 italic'
          : 'text-gray-900 dark:text-white'
      "
    >
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "PawCheckbox",
  emits: ["changed"],
  data() {
    return {
      value: this.checked,
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
      this.$emit("changed", (this.value = !this.value));
    },
  },
  watch: {
    $props: {
      handler() {
        this.value = this.checked;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<script setup>
import { ref } from "vue";
const toggle = ref();
</script>


<style scoped>
.peer:disabled + .relative .block {
  @apply dark:bg-gray-400;
}
</style>

