<template>
  <div
    class="flex items-center gap-2 fixed bottom-0 w-full justify-center left-0 right-0 py-4 z-50"
    :class="
      scrollGradient
        ? 'from-gray-100 dark:from-gray-900 to-transparent bg-gradient-to-t'
        : ''
    "
  >
    <PawButton
      v-for="(button, index) in buttons"
      :key="`button-${index}`"
      :icon="button.icon"
      :title="button.textSlot"
      :outlined="button.outlined"
      :size="button.size"
      @clicked="clicked(button.identifier)"
    >
      {{ button.textSlot }}
    </PawButton>
  </div>
</template>

<script setup>
import PawButton from "../Button/Button.vue";

const emit = defineEmits(["clicked"]);

defineProps({
  buttons: {
    type: Array,
    default: () => [],
    validator: buttons => {
      return buttons.every(button => {
        return (
          (typeof button.icon === "string" || button.icon === undefined) &&
          typeof button.textSlot === "string" &&
          typeof button.outlined === "boolean" &&
          ["sm", "md", "lg"].includes(button.size) &&
          typeof button.identifier === "string"
        );
      });
    }
  },
  scrollGradient: {
    type: Boolean,
    default: false
  }
});

const clicked = identifier => {
  emit("clicked", identifier);
};
</script>
