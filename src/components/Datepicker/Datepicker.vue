<template>
  <div
    :ref="
      (el) => {
        // Close dropdown on clicking outside
        clickOutsideElement(el, () => {
          inputFocused = false;
        });
      }
    "
    class="flex flex-col relative gap-1"
  >
    <template v-if="loading">
      <div v-if="label" class="flex flex-row">
        <label
          v-if="label"
          class="max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
        ></label>
      </div>

      <div class="flex flex-row items-center justify-between gap-3">
        <!-- Input -->
        <div
          class="bg-gray-400 loading-bubble mr-auto h-8"
          :class="[setLoaderMaxWidth()]"
        ></div>

        <!-- Extra label & icon -->
        <template>
          <div
            class="flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1"
          >
            <span
              class="bg-gray-400 loading-bubble max-w-[24px] w-full h-2"
            ></span>
            <span class="bg-gray-400 loading-bubble w-4 h-4"></span>
          </div>
        </template>
      </div>

      <div v-if="notification || error" class="ml-2 mt-1">
        <div
          v-if="notification"
          class="max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
        ></div>
        <div
          v-if="error"
          class="max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
        ></div>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-row">
        <label
          @click="focusElement"
          class="prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
          >{{ label }}</label
        >
      </div>

      <div
        :class="setContainerClassNames()"
        class="flex flex-row w-full items-center rounded-md transition px-0.75"
      >
        <input
          :readonly="readonly"
          v-model="value"
          @change="changed()"
          @input="changed()"
          :min="minimumDate"
          :max="maximumDate"
          ref="inputRef"
          @click="focusElement($event)"
          class="bg-transparent rounded-md input-reset text-gray-900 dark:text-white transition cursor-pointer py-1.5"
          type="date"
          placeholder="dd-mm-yyyy"
        />
        <PawIcon
          v-if="!readonly"
          @click="focusElement($event)"
          size="sm"
          class="text-gray-400 opacity-100 cursor-pointer transition"
        >
          calendar_month
        </PawIcon>
      </div>
      <div v-if="notification || error" class="ml-2">
        <div
          v-if="notification"
          class="prose-xs element-text italic text-gray-500 transition"
        >
          {{ notification }}
        </div>
        <div
          v-if="error"
          class="prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
        >
          {{ error }}
        </div>
      </div>
    </template>
  </div>
</template>


<style scoped>
/* Scoped style to hide input calendar icon */
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style>

<script setup>
/* eslint-disable */
import PawIcon from "../Icon/Icon.vue";
import { detect } from "detect-browser";
import moment from "moment";
import { ref } from "vue";

// // Define emits
const emit = defineEmits(["changed"]);

// Define component props
const props = defineProps({
  label: {
    type: String,
  },
  inputValue: {
    type: String,
  },
  format: {
    type: String,
  },
  minDate: {
    type: String,
  },
  maxDate: {
    type: Boolean,
  },
  notification: {
    type: String,
  },
  error: {
    type: String,
  },
  loading: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
});

// Get users browser name
const browser = detect();

// Init focused state
const inputFocused = ref(false);
// Init input element ref
const inputRef = ref();
// Init date props - needs to be formated to be viewed in date input
const value = ref(moment(props.inputValue).format("YYYY-MM-DD"));
const minimumDate = ref(moment(props.minDate).format("YYYY-MM-DD"));
const maximumDate = ref(moment(props.maxDate).format("YYYY-MM-DD"));

function changed() {
  // Evaluate output format - default : DD/MM/YYYY
  const format = props.format ? props.format : "DD/MM/YYYY";
  // Emit to parent
  emit("changed", moment(value.value).format(format));
}

// Set focus function
function focusElement(event) {
  if (props.readonly) return;

  // Set focus state
  inputFocused.value = true;

  // Check which element was clicked
  if (event.srcElement.nodeName !== "INPUT" && browser.name !== "safari") {
    // Open calender popover
    inputRef.value.showPicker();
  }
}

/**
 * Perform action on clicking outside of container
 * @param container {Element} HTML element corresponding to container. E.g: document.querySelector(...) or Vue.js: this.$refs.containerRef
 * @param action {Function} Function to execute on clicking outside of container. If this function evaluates as 'false', then event listener won't be removed.
 * @param excludedElements {NodeList} Set of HTML elements not to be considered as outer elements. E.g: document.querySelectorAll(...)
 * @param bindEvent {String}
 */
function clickOutsideElement(
  container,
  action = () => {},
  excludedElements = document.createElement(null),
  bindEvent = "mouseup"
) {
  document.addEventListener(bindEvent, function checkElement(e) {
    // Remove event listener if target is not of the type Element
    if (!(e.target instanceof Element)) {
      document.removeEventListener(bindEvent, checkElement);
      return false;
    }
    // if the target of the click isn't the container nor a descendant of the container and is neither excluded
    if (
      container !== e.target &&
      !Array.from(excludedElements).includes(e.target)
    ) {
      if (action(e) !== false) {
        document.removeEventListener(bindEvent, checkElement);
      }
    }
  });
}

function setContainerClassNames() {
  let classNames = "";

  // Not readonly classes
  classNames += !props.readonly
    ? "pr-0.75 border border-gray-200 dark:border-gray-600 rounded-md transition"
    : "";

  // Padding
  classNames += " pl-1";

  // Outline
  classNames +=
    inputFocused.value && !props.readonly
      ? " outline outline-4 outline-action-200 dark:outline-action-700"
      : "";

  return classNames;
}

function setLoaderMaxWidth() {
  const widths = ["max-w-[120px]", "max-w-[200px]", "max-w-xs"];
  return widths[Math.floor(Math.random() * widths.length)];
}
</script>


