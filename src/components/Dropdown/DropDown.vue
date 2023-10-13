/* eslint-disable */
<template>
  <div class="relative w-fit">
    <PawButton
      @click="openDropdown($event)"
      :size="props.size"
      :title="props.title"
      :icon="props.icon"
      :disabled="props.disabled"
      :outlined="props.outlined"
      :buttonRoundedClasses="props.buttonRoundedClasses"
    >
      {{ props.textSlot }}
    </PawButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
      appear
    >
      <div
        v-show="dropdownOpen"
        :class="popoverClass"
        class="absolute max-w-xs w-full min-w-[240px] rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50"
      >
        <div class="flex flex-col">
          <button
            @click="selected(item.identifier)"
            v-for="item in props.items"
            v-bind:key="item.identifier"
            class="dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full p-2 text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0"
          >
            <PawIcon size="sm" class="text-gray-400"> {{ item.icon }} </PawIcon>

            <span class="">{{ item.textSlot }}</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>


<script setup>
/* eslint-disable */
import PawIcon from "../Icon/Icon.vue";
import PawButton from "../Button/Button.vue";
import { ref } from "vue";

const popoverClass = ref("right-0");

function openDropdown(event) {
  // If left position is too narrow open right side
  if (event.x < 260) {
    popoverClass.value = "left-0";
  } else "right-0";

  // Switch state
  dropdownOpen.value = !dropdownOpen.value;

}

// // Define emits
const emit = defineEmits(["selected"]);

// Define component props
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  size: {
    type: String,
    required: false,
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
  textSlot: {
    type: String,
  },
  buttonRoundedClasses : {
    type: String,
  }
});

// States for component
const dropdownOpen = ref(false);

// Callback management
function selected(identifier) {
  // Close the dropdown
  dropdownOpen.value = false;

  // Emit the selected state to parent component
  emit("selected", identifier);
}
</script>


