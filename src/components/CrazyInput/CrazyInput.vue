<template>
  <div
    class="relative flex"
    :class="[
      {
        'gap-1': !readonly,
        'mb-44': this.dropdownWrap,
      },
      `flex-${this.flexDir}`,
    ]"
    ref="crazyInput"
  >
    <template v-if="loading">
      <div v-if="label || info" class="flex flex-row">
        <label
          v-if="label"
          class="max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
        ></label>
        <span
          v-if="info"
          class="max-w-[48px] h-3.5 ml-auto bg-gray-400 loading-bubble"
        ></span>
      </div>

      <div
        class="flex flex-row items-center justify-between"
        :class="[readonly ? 'gap-3' : 'gap-1']"
      >
        <!-- Custom control -->
        <div
          v-if="readonly && (contextIcon || contextControl)"
          class="w-4 h-4 bg-gray-400 shrink-0 loading-bubble"
          :class="[
            contextPosition === 'top' && multiline ? 'self-start' : '',
            contextPosition === 'center' && multiline ? 'self-center' : '',
            contextPosition === 'bottom' && multiline ? 'self-end' : '',
          ]"
        ></div>

        <!-- Input -->
        <div
          class="bg-gray-400 loading-bubble mr-auto"
          :class="[
            readonly
              ? multiline
                ? 'h-8'
                : setLoaderMaxWidth() + ' h-2'
              : multiline
              ? 'h-24'
              : 'h-[34px]',
          ]"
        ></div>

        <!-- Extra label & icon -->
        <template v-if="readonly">
          <div
            v-if="extraLabel || extraIcon"
            class="flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1"
            :class="[
              extraPosition === 'top' && multiline ? 'self-start' : '',
              extraPosition === 'center' && multiline ? 'self-center' : '',
              extraPosition === 'bottom' && multiline ? 'self-end' : '',
            ]"
          >
            <span
              class="bg-gray-400 loading-bubble max-w-[24px] w-full h-2"
            ></span>
            <span class="bg-gray-400 loading-bubble w-4 h-4"></span>
          </div>
        </template>
      </div>

      <div v-if="notification || warning || error" class="ml-2 mt-1">
        <div
          v-if="notification"
          class="max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
        ></div>
        <div
          v-if="warning"
          class="max-w-[120px] h-2 bg-warning-400 mb-2 loading-bubble"
        ></div>
        <div
          v-if="error"
          class="max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
        ></div>
      </div>
    </template>

    <template v-else>
      <div v-if="label || info" class="flex flex-row">
        <label
          v-if="label"
          @click="focusTextInput"
          class="prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
          >{{ label }}</label
        >
        <span
          v-if="info"
          class="ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition"
          :title="title"
          >{{ info }}</span
        >
      </div>

      <div
        class="flex flex-row items-center"
        :class="setContainerClassNames()"
        @click="click"
      >
        <PawIcon
          v-if="contextIcon"
          @click="focusTextInput"
          size="sm"
          :outlined="contextIconOutlined"
          class="text-gray-400 my-1 cursor-pointer"
          :class="{
            'self-start': contextPosition === 'top',
            'self-center': contextPosition === 'center',
            'self-end': contextPosition === 'bottom',
          }"
        >
          {{ contextIcon }}
        </PawIcon>

        <PawCheckbox
          v-else-if="contextControl === 'checkbox'"
          ref="checkbox"
          @click="focusTextInput"
          @changed="change"
          size="sm"
          class="py-1"
          :class="{
            'self-start': contextPosition === 'top',
            'self-center': contextPosition === 'center',
            'self-end': contextPosition === 'bottom',
            'pointer-events-none': readonly,
          }"
          :checked="contextChecked"
          :disabled="contextDisabled"
        >
        </PawCheckbox>

        <PawRadio
          v-else-if="contextControl === 'radio'"
          ref="radio"
          @click="focusTextInput"
          @changed="change"
          size="sm"
          class="py-1"
          :class="{
            'self-start': contextPosition === 'top',
            'self-center': contextPosition === 'center',
            'self-end': contextPosition === 'bottom',
            'pointer-events-none': readonly,
          }"
          :checked="contextChecked"
          :disabled="contextDisabled"
        >
        </PawRadio>

        <div
          class="w-full min-w-0 flex flex-wrap"
          :class="{
            'cursor-pointer': !item?.unselectable,
          }"
          @click="focusTextInput"
        >
          <!-- Chip selection -->
          <PawChip
            v-for="item in chips"
            :key="item.id"
            @clicked="removeChip(item)"
            size="sm"
            :icon="chipIcon"
            :title="this.t('removeItem')"
            class="shrink align-top justify-self-start ml-1 mt-1"
            >{{ item.value }}</PawChip
          >

          <span
            :class="[
              multiline
                ? 'min-h-[32px] before:content_ before:py-1.5 before:pl-2 before:pr-3 before:row-start-1 before:col-start-1 before:prose-md before:element-text before:invisible before:whitespace-pre-wrap'
                : 'h-8',
              multiline ? 'inline-grid' : '',
              !multiselect ? 'w-full' : 'basis-20 grow',
            ]"
            :data-content="multiline ? inputValue : ''"
          >
            <textarea
              v-if="multiline"
              v-model="inputValue"
              ref="textInput"
              class="row-start-1 col-start-1 rounded-md break-words input-reset text-gray-900 dark:text-white transition"
              :class="[
                extraLabel || extraIcon || readonly ? 'pr-3' : 'pr-2.25',
                readonly ? 'cursor-pointer' : '',
              ]"
              @input="
                resize($event);
                type();
              "
              @focus="outlineContainer(true)"
              @blur="outlineContainer(false)"
              @keydown="keyDown($event, item)"
              rows="1"
              :placeholder="placeholder"
              :readonly="readonly"
              :tabindex="
                (readonly && !isOpen) || item?.unselectable ? -1 : null
              "
            ></textarea>

            <input
              v-else
              :type="secret ? 'password' : 'text'"
              v-model="inputValue"
              ref="textInput"
              @input="type"
              @focus="outlineContainer(true)"
              @blur="outlineContainer(false)"
              @keydown="keyDown($event, item)"
              class="rounded-md input-reset text-gray-900 dark:text-white transition"
              :class="{
                truncate: !multiline,
                'pr-3': extraLabel || extraIcon || readonly,
                'pointer-events-none selection:bg-transparent': readonly,
              }"
              :placeholder="placeholder"
              :readonly="readonly"
              :tabindex="
                (readonly && !isOpen) || item?.unselectable ? -1 : null
              "
            />
          </span>
        </div>

        <span
          v-if="extraLabel || extraIcon || data"
          class="flex flex-row shrink-0 items-center py-1"
          :class="{
            'self-start': extraPosition === 'top',
            'self-center': extraPosition === 'center',
            'self-end': extraPosition === 'bottom',
          }"
        >
          <span
            v-if="extraLabel"
            class="mr-1 text-xs text-gray-400 cursor-pointer"
            @click="focusTextInput"
            >{{ extraLabel }}</span
          >
          <PawIcon
            v-if="extraIcon"
            @click="focusTextInput"
            size="sm"
            class="text-gray-400 opacity-100 cursor-pointer transition"
            :class="{
              'opacity-0': showingResults,
            }"
            :outlined="extraIconOutlined"
          >
            {{ extraIcon }}
          </PawIcon>

          <PawLink
            v-if="data"
            v-show="showingResults || inputValue || (!extraLabel && !extraIcon)"
            @clicked="closeAction"
            :class="[
              showingResults || inputValue
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none',
            ]"
            class="transition"
            size="sm"
            :icon="
              select
                ? 'close'
                : multiselect
                ? showingResults
                  ? 'unfold_less'
                  : 'unfold_more'
                : ''
            "
            :tabindex="!showingResults ? -1 : null"
          ></PawLink>
        </span>
      </div>

      <!-- Dropdown items -->
      <div
        v-if="data"
        :class="{
          'opacity-100': showingResults,
        }"
        class="absolute z-20 opacity-0 bottom-1 w-full translate-y-full h-1 border-x border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 transition"
      ></div>
      <div
        v-if="data"
        :class="[
          showingResults ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ]"
        class="absolute z-10 bottom-0 w-full max-h-[181px] translate-y-full rounded-md rounded-t-none transition"
      >
      <div class="max-h-[inherit] overflow-y-auto border-gray-300 dark:border-gray-700 shadow-box dark:shadow-box-dark" :class="addLabel ? 'rounded-b-none' : 'rounded-b-md'">        
        <div
          v-for="item in dropdownItems"
          :key="item"
          @mouseover="optionHovered(item)"
          class="transition"
          :class="[
            !item.unselectable && !loadingResults
              ? 'hover:bg-white dark:hover:bg-gray-800 cursor-pointer'
              : '',
            item.id === itemIdFocused && !item.unselectable && !loadingResults
              ? 'bg-white dark:bg-gray-800'
              : 'bg-gray-100 dark:bg-gray-700',
          ]"
        >
          <PawCrazyInput
            :class="{
              'p-2 gap-1': loadingResults,
            }"
            :ref="`OPTION-${getOptionId(item)}`"
            @click="confirmSelection(item)"
            @changed="!item.unselectable ? itemSelected(item, $event) : null"
            @option-focused="
              (id, event) =>
                !item.unselectable ? focusChange(id, event) : null
            "
            @option-selected="
              (selectedItem, event) =>
                !item.unselectable ? itemSelected(selectedItem, event) : null
            "
            @option-moved="
              (currentItem, direction) =>
                !item.unselectable ? moveOption(currentItem, direction) : null
            "
            @option-typed="(v) => optionTyped(v)"
            @dropdown-closed="!item.unselectable ? closeDropdown() : null"
            :context-control="
              !item.unselectable
                ? select
                  ? 'radio'
                  : multiselect
                  ? 'checkbox'
                  : null
                : null
            "
            :context-checked="!item.unselectable ? isItemChecked(item) : null"
            :context-disabled="!item.unselectable ? item.disabled : null"
            :context-position="
              !item.unselectable ? item.contextPosition : contextPosition
            "
            :extra-label="!loadingResults ? item.extraLabel : extraLabel"
            :extra-icon="!loadingResults ? item.extraIcon : extraIcon"
            :extra-icon-outlined="item.extraIconOutlined"
            :extra-position="item.extraPosition"
            :multiline="!loadingResults ? item.multiline : multiline"
            :is-open="showingResults"
            :item="item"
            :loading="loadingResults"
            readonly
          >
            {{ item.value }}
          </PawCrazyInput>
        </div>
      </div>


        <div
          v-if="addLabel && !loadingResults"
          class="flex justify-center py-2 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-b-md shadow-box dark:shadow-box-dark"
        >
          <PawButton size="sm" :icon="addIcon" @clicked="add">{{
            addLabel
          }}</PawButton>
        </div>
      </div>

      <div v-if="notification || warning || error" class="ml-2">
        <div
          v-if="notification"
          class="prose-xs element-text italic text-gray-500 transition"
        >
          {{ notification }}
        </div>
        <div
          v-if="warning"
          class="prose-xs element-text italic text-warning-500 transition"
        >
          {{ warning }}
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

<script>
import { useI18n } from "vue-i18n";
import PawButton from "../Button/Button.vue";
import PawCheckbox from "../Checkbox/Checkbox.vue";
import PawChip from "../Chip/Chip.vue";
import PawIcon from "../Icon/Icon.vue";
import PawLink from "../Link/Link.vue";
import PawRadio from "../Radio/Radio.vue";

// Number of loading items
const numLoadingItems = 5;

export default {
  name: "PawCrazyInput",
  emits: [
    "changed",
    "removed",
    "typed",
    "selected",
    "added",
    "cancelled",
    "optionFocused",
    "optionSelected",
    "optionMoved",
    "optionTyped",
    "dropdownClosed",
    "keyDownEnter",
  ],
  data() {
    return {
      hasSlot: null,
      inputValue: this.getDefaultValue(),
      inputOutline: false,
      contextValue: this.contextChecked,
      showingResults: false,
      loadingResults: false,
      loadingCancelled: false,
      selected: this.getCheckedValues(),
      itemIdFocused: null,
      chips: [],
    };
  },
  computed: {
    dropdownItems() {
      if (this.loadingResults) return numLoadingItems;
      if (this.data?.length) return this.data;
      if (this.loadingCancelled) {
        return [
          {
            id: 1,
            value: this.t("loadingCancelled"),
            unselectable: true,
          },
        ];
      }
      return [
        {
          id: 1,
          value: this.t("noResults"),
          unselectable: true,
        },
      ];
    },
  },
  watch: {
    value() {
      this.inputValue = this.getDefaultValue();
    },
    showingResults(opened) {
      if (this.readonly || !opened) return false;

      // Close dropdown on clicking outside
      this.clickOutsideElement(this.$refs.crazyInput, () => {
        this.showingResults = false;
        this.inputOutline = false;
      });
    },
    $props: {
      handler() {
        if (this.data) {
          this.loadingResults = false;
          this.selected = this.data.filter((item) => item.checked);

          if (this.multiselect) {
            this.updateChips();
          }

          this.updateDropdown();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  props: {
    /* Text field */
    value: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    secret: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    select: {
      type: Boolean,
      default: false,
    },
    multiselect: {
      type: Boolean,
      default: false,
    },
    inputRoundedClasses: {
      type: String,
      default: "",
    },
    inputMinWidthClasses: {
      type: String,
      default: "",
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },

    /* Search results (dropdown) */
    data: {
      type: Object,
    },
    item: [Object, Number],
    isOpen: {
      type: Boolean,
      default: false,
    },
    chipIcon: {
      type: String,
    },
    addLabel: {
      type: String,
    },
    addIcon: {
      type: String,
      default: "add",
    },
    dropdownWrap: {
      type: Boolean,
      default: false,
    },
    flexDir: {
      type: String,
      validator: function (value) {
        return ["col", "row"].includes(value);
      },
      default: "col",
    },

    /* State */
    loading: {
      type: Boolean,
      default: false,
    },

    /* Top labels */
    label: {
      type: String,
    },
    info: {
      type: String,
    },
    title: {
      type: String,
    },

    /* Context elements (left) */
    // Icon
    contextIcon: {
      type: String,
    },
    contextIconOutlined: {
      type: Boolean,
      default: false,
    },
    // Checkbox / Radio controls
    contextControl: {
      type: String,
      validator: function (value) {
        return [undefined, "checkbox", "radio"].includes(value);
      },
    },
    contextChecked: {
      type: Boolean,
      default: false,
    },
    contextDisabled: {
      type: Boolean,
      default: false,
    },
    // Position
    contextPosition: {
      type: String,
      validator: function (value) {
        return [undefined, "top", "center", "bottom"].includes(value);
      },
      default: "top",
    },

    /* Extra elements (right) */
    extraLabel: {
      type: String,
    },
    extraIcon: {
      type: String,
    },
    extraIconOutlined: {
      type: Boolean,
      default: false,
    },
    // Position
    extraPosition: {
      type: String,
      validator: function (value) {
        return [undefined, "top", "center", "bottom"].includes(value);
      },
      default: "top",
    },

    /* Bottom labels */
    notification: {
      type: String,
    },
    warning: {
      type: String,
    },
    error: {
      type: String,
    },
  },
  components: {
    PawIcon,
    PawLink,
    PawCheckbox,
    PawRadio,
    PawChip,
    PawButton,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
      messages: {
        en: {
          loadingCancelled: "Loading was cancelled",
          noResults: "No results found",
          removeItem: "Remove item",
        },
        de: {
          loadingCancelled: "Laden wurde abgebrochen",
          noResults: "Keine Ergebnisse gefunden",
          removeItem: "Eintrag entfernen",
        },
      },
    });

    return { t };
  },
  methods: {
    getDefaultValue() {
      if (this.value) {
        return this.value;
      }

      this.hasSlot =
        this.$slots.default &&
        this.$slots
          .default()
          .filter(
            (o) =>
              o.type !== Comment &&
              (typeof o.children === "string" || o.children instanceof String
                ? o.children.trim()
                : o.children) !== ""
          ).length;
      if (this.hasSlot) {
        return this.$slots.default()[0].children.trim();
      }

      return "";
    },

    focusInputElement() {
      this.$refs.textInput.focus();
    },
    unFocusInputElement() {
      this.$refs.textInput.blur();
    },

    getCheckedValues() {
      if (this.data) {
        return this.data.filter((item) => item.checked);
      }
      return [];
    },

    change() {
      this.$emit("changed", this.switchCheckboxValue());
    },

    type(stopSearching) {
      if (this.inputValue === "") {
        //this.showingResults = false;
        this.cancelLoading(true);
        this.$emit("typed", this.inputValue);
        return;
      }

      if (stopSearching === true) return;

      this.$emit("typed", this.inputValue);

      if (!this.select && !this.multiselect) return;

      // Initiate search
      this.loadingResults = true;
      this.loadingCancelled = false;
      this.showingResults = true;
    },

    optionTyped() {
      this.focusTextInput();
      this.type();
    },

    focus(itemId, event) {
      this.$emit("optionFocused", itemId, event);
    },

    /**
     * Change focus between dropdown options
     * @param itemId {Number|String} Option ID.
     * @param event {Boolean} Gained focus?
     */
    focusChange(itemId, event) {
      this.itemIdFocused = event ? itemId : null;
    },

    resize(event) {
      if (!this.multiline) return;
      event.target.parentNode.dataset.content = event.target.value;
    },

    keyDown(event, item) {
      // Events within text input
      if (!this.readonly && this.data) {
        event: switch (event.code) {
          case "ArrowUp":
            // Initiate search if dropdown closed and no data available
            if (!this.showingResults && this.data.length === 0) {
              this.type();
              break;
            }

            // No selectable items found (all items are unselectable)
            if (
              this.data.filter((obj) => obj.unselectable).length ===
              this.data.length
            )
              break;

            this.showingResults = true;
            if (this.data.length > 0) {
              if (this.select) {
                // No selection
                if (!this.selected[0] && !this.loadingResults) {
                  // Focus last option
                  this.focusOption(
                    this.getOptionInput(this.data[this.data.length - 1])
                  );
                  break;
                }
                // Move to previous option
                this.moveOption(this.selected[0], -1, true);
              }
              if (this.multiselect) {
                // Focus last unchecked option
                for (let index = this.data.length - 1; index >= 0; index--) {
                  const option = this.getOptionControl(
                    this.data[index].id,
                    "checkbox"
                  );
                  if (!option) break;
                  if (!option.checked) {
                    this.focusOption(this.getOptionInput(this.data[index]));
                    break event;
                  }
                }
                // Select first option
                this.focusOption(this.getOptionInput(this.data[0]));
              }
            }
            break;

          case "ArrowDown":
            // Initiate search if dropdown closed
            if (!this.showingResults && this.data.length === 0) {
              this.type();
              break;
            }

            // No selectable items found (all items are unselectable)
            if (
              this.data.filter((obj) => obj.unselectable).length ===
              this.data.length
            )
              break;

            this.showingResults = true;
            if (this.data.length > 0) {
              if (this.select) {
                // No selection
                if (!this.selected[0] && !this.loadingResults) {
                  // Focus first option
                  this.focusOption(this.getOptionInput(this.data[0]));
                  break;
                }
                // Move to next option
                this.moveOption(this.selected[0], 1, true);
              }
              if (this.multiselect) {
                // Focus first unchecked option
                for (const index in this.data) {
                  const option = this.getOptionControl(
                    this.data[index].id,
                    "checkbox"
                  );
                  if (!option) break;
                  if (!option.checked) {
                    this.focusOption(this.getOptionInput(this.data[index]));
                    break event;
                  }
                }
                // Select first option
                this.focusOption(this.getOptionInput(this.data[0]));
              }
            }
            break;

          case "Backspace":
            // Delete last chip if any & text input is empty
            if (
              this.multiselect &&
              this.chips.length > 0 &&
              this.inputValue === ""
            ) {
              this.updateChips(this.chips[this.chips.length - 1], false);
            }
            break;

          case "Escape":
            this.showingResults = false;
            this.cancelLoading();
            break;

          case "Enter":
            // Exit input
            this.unFocusInputElement();
            // Emit enter pressed
            this.$emit("keyDownEnter");
            break;
        }
      }
      // Events within dropdown
      else if (this.readonly) {
        switch (event.code) {
          case "Enter":
            switch (this.contextControl) {
              case "radio":
                // Single option can only be selected (cannot be unselected)
                this.$emit("optionSelected", item, true);
                break;

              case "checkbox":
                // Multiple options can be selected or unselected
                this.$emit("optionSelected", item, this.switchCheckboxValue());
                break;
            }
            break;

          case "ArrowUp":
            event.preventDefault();
            this.$emit("optionMoved", item, -1);
            break;

          case "ArrowDown":
            event.preventDefault();
            this.$emit("optionMoved", item, 1);
            break;

          case "Escape":
            this.$emit("dropdownClosed");
            break;

          case "Backspace":
            this.$emit("optionSelected", item, false);
            break;

          case "Delete":
            this.$emit("optionSelected", item, false);
            break;

          // any other key
          default:
            if (
              String.fromCharCode(event.keyCode).match(/(\w|\s)/g) &&
              event.code !== "Tab"
            ) {
              this.$emit("optionTyped", event.key);
            }
            break;
        }
      } else {
        switch (event.code) {
          case "Enter":
            // Exit input
            this.unFocusInputElement();

            // Emit enter pressed
            this.$emit("keyDownEnter");
            break;
          case "Escape":
            // Exit input
            this.unFocusInputElement();
            break;
        }
      }
    },

    outlineContainer(outline, close) {
      this.inputOutline = outline || this.showingResults;

      if (outline && this.data && !close) {
        this.showingResults = true;
      }

      if (this.readonly && this.item) {
        this.focus(this.item.id, outline);
      }
    },

    focusTextInput() {
      this.$refs.textInput.focus();
    },
    unFocusTextInput() {
      this.$refs.textInput.blur();
      // console.log("blur");
    },

    getOptionId(item) {
      return this.data.length === 0 ? item : item.id;
    },

    getOptionInput(item) {
      if (!this.$refs[`OPTION-${this.getOptionId(item)}`][0]) return;
      return this.$refs[
        `OPTION-${this.getOptionId(item)}`
      ][0].$el.querySelector('input[type="text"], textarea');
    },

    getOptionControl(id, controlType) {
      if (!this.$refs[`OPTION-${id}`][0]) return;
      return this.$refs[`OPTION-${id}`][0].$el.querySelector(
        `input[type="${controlType}"]`
      );
    },

    switchCheckboxValue() {
      return (this.contextValue = !this.contextValue);
    },

    deselectAll() {
      const element = document.activeElement;

      if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
        if ("selectionStart" in element) {
          element.selectionEnd = element.selectionStart;
        }
        element.blur();
      }

      if (window.getSelection) {
        // All browsers, except IE <=8
        window.getSelection().removeAllRanges();
      } else if (document.selection) {
        // IE <=8
        document.selection.empty();
      }
    },

    isItemChecked(item) {
      if (this.select) {
        return (
          (item.checked && this.selected.length === 0) ||
          this.selected.includes(item)
        );
      }
      if (this.multiselect) {
        return item.checked || this.selected.includes(item);
      }
      return false;
    },

    updateChips(item, event) {
      // If item was removed
      if (!event && item) {
        this.removeChip(item);
      }
      this.chips = this.arrayUnique(this.chips.concat(this.selected));
    },

    updateDropdown() {
      if (this.select) {
        var checkSelected = this.data.filter(
          (item) => item.value === this.inputValue
        );
        if (checkSelected !== this.selected) {
          this.selected = checkSelected;
          /** Emit because of new item selected */
          this.$emit("selected", this.selected);
        } else {
          this.selected = checkSelected;
        }
        return;
      }
      this.selected = this.arrayUnique(this.selected.concat(this.chips));
    },

    click() {
      if (this.readonly && this.$refs[this.contextControl]) {
        this.$refs[this.contextControl].$el.click();
      }
    },

    selectSingleItem(item, stopSearching) {
      this.selected[0] = item;
      this.inputValue = item.value;
      this.type(stopSearching);
      this.showingResults = false;
      this.inputOutline = false;
    },

    itemSelected(item, event) {
      if (this.select) {
        this.selectSingleItem(item);
      }
      if (this.multiselect) {
        if (event) {
          this.selected.push(item);
        } else {
          this.selected = this.selected.filter((obj) => obj !== item);
        }
        this.updateChips(item, event);
        // Clear text input
        this.inputValue = "";
        this.$emit("typed", this.inputValue);
      }
      this.$emit("selected", this.selected);
    },

    confirmSelection(item) {
      if (this.select) {
        this.selectSingleItem(item, true);
      }
    },

    add() {
      this.$emit("added");
    },

    moveOption(item, direction, forceOpen) {
      if (!this.data || this.loadingResults) return;
      const newIndex = this.data.indexOf(item) + direction;
      // Moved outside data's boundaries
      if (newIndex < 0 || newIndex > this.data.length - 1) {
        if (forceOpen) {
          // Open with current item
          this.focusOption(this.getOptionInput(item), forceOpen);
          return;
        }
        this.showingResults = false;
        this.focusTextInput();
        return;
      }
      this.focusOption(this.getOptionInput(this.data[newIndex]), forceOpen);
    },

    focusOption(element, notFocus) {
      if (!element) return;
      if (notFocus) {
        element.select();
        return;
      }
      element.focus();
    },

    optionHovered(item) {
      if (!item) return;
      this.itemIdFocused = item.id;
    },

    closeAction() {
      if (this.select && !this.showingResults) {
        this.selected[0] = null;
        this.inputValue = "";
        this.type();
        this.cancelLoading(true);
        return;
      }
      this.showingResults = !this.showingResults;
      this.cancelLoading();
    },

    closeDropdown() {
      this.showingResults = false;
      this.focusTextInput();
      this.cancelLoading();
    },

    removeChip(item) {
      // Remove from chips
      let index = this.chips.indexOf(item);
      if (index === -1) return;
      this.chips.splice(index, 1);
      // Remove from dropdown
      index = this.selected.indexOf(item);
      if (index === -1) return;
      this.selected.splice(index, 1);

      //Return selected
      this.$emit("removed", item);
    },

    // Cancel loading of results
    cancelLoading(forceCancel) {
      if ((!this.showingResults && this.loadingResults) || forceCancel) {
        this.$emit("cancelled");
        this.loadingResults = false;
        this.loadingCancelled = true;
      }
    },

    /**
     * Perform action on clicking outside of container
     * @param container {Element} HTML element corresponding to container. E.g: document.querySelector(...) or Vue.js: this.$refs.containerRef
     * @param action {Function} Function to execute on clicking outside of container. If this function evaluates as 'false', then event listener won't be removed.
     * @param excludedElements {NodeList} Set of HTML elements not to be considered as outer elements. E.g: document.querySelectorAll(...)
     * @param bindEvent {String}
     */
    clickOutsideElement(
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
          !container.contains(e.target) &&
          !Array.from(excludedElements).includes(e.target)
        ) {
          if (action(e) !== false) {
            document.removeEventListener(bindEvent, checkElement);
          }
        }
      });
    },

    arrayUnique(array) {
      const a = array.concat();
      for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
          if (a[i] === a[j]) a.splice(j--, 1);
        }
      }

      return a;
    },

    setContainerClassNames() {
      let classNames = "";

      let roundedClasses =
        this.inputRoundedClasses !== ""
          ? this.inputRoundedClasses
          : "rounded-md ";

      // Not readonly classes
      classNames += !this.readonly
        ? "pr-0.75 border border-gray-200 dark:border-gray-600 transition " +
          roundedClasses
        : "";

      // Width
      classNames += this.fullwidth ? " w-full " : "";

      classNames += ` ${this.inputMinWidthClasses} `;
      // Padding
      if (
        this.contextIcon ||
        this.contextControl === "checkbox" ||
        this.contextControl === "radio"
      ) {
        classNames += " pl-0.75";
      } else {
        classNames += " pl-1";
      }

      // Outline
      classNames +=
        this.inputOutline && !this.readonly && !this.showingResults
          ? " outline outline-4 outline-action-200 dark:outline-action-700"
          : "";

      // Dropdown-depending classes
      classNames += this.showingResults
        ? " rounded-b-none border-b-transparent bg-gray-200 dark:bg-gray-600 shadow-box dark:shadow-box-dark"
        : !this.readonly
        ? " bg-gray-100 dark:bg-gray-700"
        : "";

      return classNames;
    },

    setLoaderMaxWidth() {
      const widths = [
        "max-w-[32px]",
        "max-w-[48px]",
        "max-w-[80px]",
        "max-w-[120px]",
        "max-w-[200px]",
        "max-w-xs",
      ];
      return widths[Math.floor(Math.random() * widths.length)];
    },
  },
};
</script>
