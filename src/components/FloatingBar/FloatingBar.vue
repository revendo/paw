<template>
  <div
    class="fixed bottom-0 w-full left-0 right-0 py-4 z-50 grid place-items-center"
    :class="
      scrollGradient
        ? 'from-gray-100 dark:from-gray-900 to-transparent bg-gradient-to-t'
        : ''
    "
  >
  <div class="flex items-center gap-2 self-center p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm  dark:bg-gray-950/60 w-fit"> <PawButton
      v-for="(button, index) in buttons"
      :key="`button-${index}`"
      :icon="button.icon"
      :title="button.textSlot"
      :outlined="button.outlined"
      :size="button.size"
      @clicked="clicked(button.identifier)"
    >
      {{ button.textSlot }}
    </PawButton></div>
   
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
