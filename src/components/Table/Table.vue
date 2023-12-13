<template>
  <div
    class="flex flex-col relative transition z-0"
    :class="{
      'pointer-events-none': loading,
    }"
  >
    <div
      class="overflow-y-auto max-h-full transition"
      :class="{
        'overflow-hidden': loading,
        'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-t border-l border-r rounded-t-xl translate-z-0':
          !informal,
        'px-4': informal,
      }"
    >
      <!-- Header - CTA & Title -->
      <div
        ref="tableHeader"
        v-if="buttons.length || title || searchDropdownItems.length"
        :class="{
          'px-0 mb-3 sm:mb-5': informal,
          'px-6': !informal,
          'flex-wrap sm:!h-fit': searchDropdownItems.length > 0,
        }"
        class="sticky inset-0 flex flex-row justify-between items-center mt-3 h-fit sm:h-8 z-50 gap-3"
      >
        <div :class="{ 'hidden sm:block': searchDropdownItems.length }">
          <h1
            v-if="title"
            class="text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
          >
            {{ title }}
          </h1>
        </div>
        <!-- Buttons Tablet / Desktop -->
        <div
          v-if="Object.keys(buttons).length <= 4"
          class="md:flex flex-row gap-3 hidden"
        >
          <!-- Searchbar -->
          <div class="flex flex-row transition-all">
            <PawButton
              v-show="
                !searchDropdownItems.length
                  ? !searchbarOpened && searchbar
                  : false
              "
              :disabled="loading"
              outlined
              size="md"
              title="Search"
              icon="search"
              @clicked="openSearchbar()"
            ></PawButton>

            <PawDropdown
              v-if="searchDropdownItems.length"
              outlined
              size="md"
              icon="expand_more"
              class="h-full"
              :textSlot="searchDropdownText"
              :items="searchDropdownItems"
              :buttonRoundedClasses="computedButtonRoundedClasses"
              @selected="(v) => this.$emit('searchDropdownItemClicked', v)"
            />
            <PawCrazyInput
              ref="searchbar"
              :value="searchValue"
              placeholder="Search"
              title="Extended information about this field"
              contextIcon="search"
              class="max-h-8"
              :inputRoundedClasses="computedInputRoundedClasses"
              inputMinWidthClasses="min-w-[30ch]"
              :flexDir="computedFlexDirectionProperty"
              :class="
                searchbarOpened && !searchDropdownItems.length
                  ? 'w-full'
                  : searchDropdownItems.length
                  ? 'w-full rounded-l-none'
                  : 'w-0 overflow-hidden'
              "
              @typed="(v) => searchTyped(v)"
              @keyDownEnter="this.$emit('keyDownEnter')"
              >{{ searchValue }}
            </PawCrazyInput>
          </div>

          <PawButton
            v-for="button in buttons"
            v-bind:key="button.id"
            @clicked="this.$emit('buttonClicked', button.identifier)"
            :disabled="loading"
            :outlined="button.outlined"
            size="md"
            :title="button.title"
            :icon="button.icon"
            >{{ button.textSlot }}</PawButton
          >
        </div>
        <!-- Buttons mobile -->
        <div
          class="flex flex-row gap-3 md:hidden"
          :class="[
            buttons.length >= 4 ? '!flex' : '',
            searchDropdownItems.length
              ? 'flex-col-reverse items-end sm:flex-row w-full'
              : '',
          ]"
        >
          <div class="flex flex-row w-full">
            <PawButton
              v-show="
                !searchDropdownItems.length
                  ? !searchbarOpened && searchbar
                  : false
              "
              :disabled="loading"
              outlined
              size="md"
              title="Search"
              icon="search"
              @clicked="openSearchbar('mobile')"
            ></PawButton>

            <PawDropdown
              v-if="searchDropdownItems.length"
              outlined
              size="md"
              icon="expand_more"
              class="h-full"
              :textSlot="searchDropdownText"
              :items="searchDropdownItems"
              :buttonRoundedClasses="computedButtonRoundedClasses"
              @selected="(v) => this.$emit('searchDropdownItemClicked', v)"
            />
            <PawCrazyInput
              ref="searchbarMobile"
              :value="searchValue"
              placeholder="Search"
              title="Extended information about this field"
              contextIcon="search"
              class="max-h-8"
              :class="
                searchbarOpened && !searchDropdownItems.length
                  ? 'w-full'
                  : searchDropdownItems.length
                  ? 'w-full rounded-l-none'
                  : 'w-0 overflow-hidden'
              "
              @typed="(v) => searchTyped(v)"
              :inputRoundedClasses="computedInputRoundedClasses"
              :fullwidth="true"
              :flexDir="computedFlexDirectionProperty"
              @keyDownEnter="this.$emit('keyDownEnter')"
              >{{ searchValue }}
            </PawCrazyInput>
          </div>

          <div
            class="flex justify-between w-full items-center sm:w-fit"
            v-if="searchDropdownItems.length"
          >
            <div class="block sm:hidden">
              <h1
                v-if="title"
                class="text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
              >
                {{ title }}
              </h1>
            </div>
            <PawDropdown
              v-if="buttons && buttons.length"
              :class="searchbarOpened ? 'hidden' : ''"
              outlined
              size="md"
              icon="expand_more"
              textSlot="Options"
              :items="buttons"
              @selected="(v) => this.$emit('buttonClicked', v)"
            />
          </div>
          <PawDropdown
            v-else-if="buttons && buttons.length"
            :class="searchbarOpened ? 'hidden' : ''"
            outlined
            size="md"
            icon="expand_more"
            textSlot="Options"
            :items="buttons"
            @selected="(v) => this.$emit('buttonClicked', v)"
          />
        </div>
      </div>
      <div
        v-if="
          (!data ||
            Object.keys(data).length === 0 ||
            Object.keys(data.items).length === 0) &&
          !loading
        "
        class="flex items-center w-auto p-4 rounded-lg transition"
        :class="[
          !hasSlot ? 'hidden' : '',
          itemsNotFoundHasBgColor
            ? `bg-${itemsNotFoundBgClass}-100 dark:bg-${itemsNotFoundBgClass}-800 text-${itemsNotFoundTextColorClass}-800 dark:text-${itemsNotFoundTextColorClass}-100`
            : 'text-white',
          informal ? 'mx-auto mb-3 sm:mb-5' : 'm-6',
        ]"
      >
        <slot></slot>
      </div>
      <!-- Table Start -->
      <table
        v-else
        ref="table"
        class="relative w-full formal-table fill-available"
        :class="{
          'border-collapse': !informal,
          'border-separate table-informal': informal,
        }"
      >
        <colgroup>
          <col
            v-if="!informal"
            :class="{
              'w-8': activeHeadings.length > 0,
              'w-auto': activeHeadings.length === 0,
            }"
          />
          <col
            v-for="(heading, i) in activeHeadings"
            :key="i"
            class="w-auto"
            :class="{
              'min-w-[160px]': !informal,
              'min-w-[120px]': informal,
            }"
          />
          <col class="w-8" />
        </colgroup>

        <!-- Table header -->
        <thead>
          <tr
            :class="{
              'bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition':
                !informal,
            }"
            class="sticky z-20 top-0 transition-all"
          >
            <th
              v-if="!informal"
              :class="{
                'pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full':
                  !informal,
              }"
              class="sticky z-10 pl-6 pb-0 pr-3 left-0 text-left bg-white dark:bg-gray-800 transition-all"
            >
              <!-- @TODO: implement select all feature
                            <PawCheckbox size="md" />
                            -->
            </th>

            <th
              v-for="(heading, index) in activeHeadings"
              :key="heading.id"
              class="pb-0"
              :class="[
                index > 0 ? 'pl-7' : '',
                index === 0 && informal ? 'pl-3' : '',
                heading.align === 'left' || !heading.align ? 'text-left' : '',
                heading.align === 'right' ? 'text-right' : '',
                heading.align === 'center' ? 'text-center' : '',
                !informal
                  ? 'pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all'
                  : `${bgLight} dark:${bgDark} transition`,
              ]"
            >
              <PawLink
                v-if="heading.sort == 'disabled'"
                class="inline-flex uppercase"
                size="sm"
                align="right"
                compact
              >
                {{ headingTitle(heading.title || heading.name) }}
              </PawLink>
              <PawLink
                v-else
                class="inline-flex uppercase"
                size="sm"
                align="right"
                compact
                @clicked="sort(heading)"
                :color="
                  !heading.title && !heading.name
                    ? 'danger'
                    : heading.sort
                    ? 'action'
                    : null
                "
                :icon="
                  heading.sort === 'asc' || !heading.sort
                    ? 'keyboard_arrow_up'
                    : 'keyboard_arrow_down'
                "
              >
                {{ headingTitle(heading.title || heading.name) }}
              </PawLink>
            </th>

            <th
              :class="[
                !informal
                  ? 'pr-6 bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all'
                  : `pr-1 ${bgLight} dark:${bgDark} transition`,
              ]"
              class="sticky z-10 pl-3 pb-0 right-0 text-right transition-all"
            >
              <PawLink
                size="md"
                icon="playlist_add"
                :class="{
                  'ml-auto pt-3': !informal,
                }"
                @clicked="settingsOpened = !settingsOpened"
              />
              <div
                v-if="informal"
                :class="`${bgLight} dark:${bgDark}`"
                class="absolute top-0 bottom-0 left-0 -right-4 -z-10 transition"
              ></div>
            </th>
          </tr>
        </thead>

        <!-- Table content -->
        <tbody>
          <tr
            v-for="(item, i) in currentItems"
            :key="item.id"
            class="relative transition-all group"
            :class="{
              'border-b border-gray-200 dark:border-gray-700':
                i < currentItems.length - 1 && !informal,
              'animate-loading': loading,
              'h-8 hover:bg-gray-100 dark:hover:bg-gray-800': !informal,
              'h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg':
                informal,
            }"
          >
            <td
              v-if="!informal"
              class="sticky z-10 pl-6 pr-3 left-0 bg-white dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 overflow-hidden transition"
              :class="{
                'py-0': !informal,
                'pt-2 pb-2': informal,
              }"
            >
              <PawCheckbox
                v-if="selectionEnabled"
                size="md"
                @changed="select($event, item.id)"
              />
            </td>

            <td
              v-for="(heading, index) in activeHeadings"
              :key="heading.name"
              :class="[
                index > 0 ? 'pl-7' : '',
                index === 0 && informal
                  ? `pl-3 rounded-l-lg border-l overflow-hidden before:opacity-0 group-hover:before:opacity-100 before:content-[''] before:absolute before:mt-[-9.75px] before:left-0 before:right-0 before:h-12 before:overflow-clip group-hover:before:shadow-card dark:group-hover:before:shadow-card-dark before:rounded-lg before:transition`
                  : '',
                index === activeHeadings.length - 1 ? 'pr-2' : '',
                heading.align === 'left' || !heading.align ? 'text-left' : '',
                heading.align === 'right' ? 'text-right' : '',
                heading.align === 'center' ? 'text-center' : '',
                !informal
                  ? 'py-0'
                  : 'pt-2 pb-2 border-t border-b border-gray-200 dark:border-gray-700 transition',
              ]"
              class="align-middle"
            >
              <PawLazyField
                v-if="!loading && heading.format !== 'label'"
                class="inline-flex"
                size="sm"
                hide-errors
                :action="heading.action"
                :copy="heading.copy"
                :link="
                  heading.action === 'link' ? item[heading.name].link : null
                "
                :insecure="
                  heading.action === 'link' ? item[heading.name].insecure : null
                "
                :secret="heading.secret"
                :format="heading.format"
                :unit-label="heading.unitLabel"
                :unit-icon="heading.unitIcon"
                :unit-icon-outlined="heading.unitIconOutlined"
                :min-decimals="heading.minDecimals"
                :max-decimals="heading.maxDecimals"
              >
                {{
                  cellValue(
                    heading.action === "link"
                      ? item[heading.name].text
                      : item[heading.name],
                    heading.name
                  )
                }}
              </PawLazyField>

              <PawLabel
                v-if="!loading && heading.format === 'label'"
                class="inline-flex my-0.75"
                size="sm"
                :color="item[heading.name].color"
                :disabled="item[heading.name].disabled"
              >
                {{ cellValue(item[heading.name].text, heading.name) }}
              </PawLabel>

              <div
                v-if="loading"
                class="inline-block bg-gray-400 align-middle"
                :class="{
                  'w-24 h-2 rounded-md': heading.format !== 'label',
                  'w-14 h-6 rounded-full': heading.format === 'label',
                }"
              ></div>
            </td>

            <!-- Details -->
            <td
              class="z-10 pl-3 py-0 max-w-[120px] right-0 bg-white dark:bg-gray-800 transition-all"
              :class="[
                loading ? 'before:opacity-100' : '',
                !informal
                  ? 'pr-6 overflow-y-clip row-clip group-hover:bg-gray-100 dark:group-hover:bg-gray-800 before:content-[\'\'] before:absolute before:-z-10 before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition before:shadow-box dark:before:shadow-box-dark'
                  : `pr-3 h-12`,
                informal && !bgDark && !bgLight ? '!bg-transparent' : '',
                hasStickyDetails() || !informal
                  ? 'sticky'
                  : 'relative border-gray-200 dark:border-gray-700 rounded-r-lg border-t border-r border-b',
              ]"
            >
              <!-- cap -->
              <div
                v-if="hasStickyDetails() || !informal"
                :class="[
                  informal
                    ? `flex items-center absolute -top-2  h-16 left-[-0.75px] -right-4 pr-4 overflow-hidden transition-all`
                    : '',
                ]"
              >
                <!-- Details link -->
                <PawLink
                  v-if="
                    ((!informal && !loading) || informal) &&
                    !actionDropdownItems.length
                  "
                  size="sm"
                  :icon="!informal ? 'last_page' : ctaIcon"
                  :outlined="informal"
                  color="action"
                  align="right"
                  compact
                  @clicked="click(item.id)"
                  class="z-20"
                  :class="{
                    'ml-auto': !informal,
                    'justify-center absolute h-12 w-[49px] bg-white dark:bg-gray-800 border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg transition':
                      informal,
                    'cursor-auto': informal && !ctaIcon,
                  }"
                >
                  {{ detailsText }}
                </PawLink>
                <!-- Action Dropdown -->
                <div v-else class="z-50">
                  <PawButton
                    @click="openDropdown($event, item[rowItemIdentifier])"
                    size="sm"
                    icon="more_horiz"
                    outlined
                    buttonRoundedClasses="border-none !bg-transparent "
                  >
                  </PawButton>
                </div>

                <!-- Details loading -->
                <div
                  v-if="loading"
                  class="flex flex-row items-center"
                  :class="{ 'p-3': informal }"
                >
                  <template v-if="!informal">
                    <div
                      class="w-8 h-2 bg-action-300 dark:bg-action-600 rounded-md"
                    ></div>
                    <PawIcon
                      size="sm"
                      class="text-action-300 dark:text-action-600"
                    >
                      last_page
                    </PawIcon>
                  </template>

                  <template v-else>
                    <PawIcon
                      size="sm"
                      class="text-action-300 dark:text-action-600"
                      outlined
                    >
                      assignment
                    </PawIcon>
                  </template>
                </div>

                <!-- cap shadow -->
                <div
                  v-if="informal"
                  class="border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg absolute top-2 right-4 bottom-2 -left-12 h-12 z-10 group-hover:shadow-card dark:group-hover:shadow-card-dark transition-all"
                ></div>

                <!-- cap background small -->
                <div
                  v-if="informal"
                  :class="`${bgLight} dark:${bgDark} absolute top-2 bottom-2 left-0 right-0 z-0 transition`"
                ></div>

                <!-- cap background big -->
                <div
                  v-if="informal"
                  class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition"
                  :class="[
                    bgLight ? `${bgLight}` : 'bg-white',
                    bgDark ? `dark:${bgDark}` : 'dark:bg-gray-800',
                  ]"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Dropdown template -->
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
        ref="actionDropdown"
        v-show="dropdownOpen"
        class="absolute max-w-xs w-fit min-w-[120px] rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50 right-0 mr-6"
      >
        <div class="flex flex-col">
          <button
            @click="dropdownActionSelected(item.identifier)"
            v-for="item in actionDropdownItems"
            v-bind:key="item.identifier"
            class="dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full p-2 text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0"
          >
            <PawIcon size="sm" class="text-gray-400"> {{ item.icon }} </PawIcon>

            <span class="">{{ item.textSlot }}</span>
          </button>
        </div>
      </div>
    </transition>

    <!-- Table settings -->
    <div
      class="absolute max-w-[200px] z-30 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-card dark:shadow-card-dark transition-all before:absolute before:content-[''] before:w-4 before:h-4 before:-top-2 before:z-0 before:rotate-45 before:bg-gray-100 dark:before:bg-gray-700 before:border before:border-t-gray-200 before:border-l-gray-200 dark:before:border-t-gray-600 dark:before:border-l-gray-600 before:border-b-gray-100 before:border-r-gray-100 dark:before:border-b-gray-700 dark:before:border-r-gray-700 before:transition"
      :class="{
        'opacity-0 invisible -translate-y-5': !settingsOpened || this.loading,
        'opacity-1 visible translate-y-0': settingsOpened && !this.loading,
        'top-32 sm:top-20 right-3 before:right-6': !informal,
        'top-36 sm:top-24 right-5 before:right-3': informal,
      }"
    >
      <div
        class="flex flex-col text-left opacity-[.999] overflow-hidden rounded-md"
      >
        <div
          v-for="(heading, i) in headings"
          :key="i"
          class="flex flex-row justify-between gap-2 p-1 items-center hover:bg-white dark:hover:bg-gray-800 transition"
        >
          <PawIcon
            size="sm"
            outlined
            @click="toggleHeading(heading)"
            class="cursor-pointer transition"
            :class="{
              'text-gray-400': heading.visible,
              'text-gray-200 dark:text-gray-600': !heading.visible,
            }"
          >
            {{ heading.visible ? "visibility" : "visibility_off" }}
          </PawIcon>
          <span
            class="mr-auto prose-md element-text truncate font-normal cursor-pointer transition"
            @click="toggleHeading(heading)"
            :class="{
              'text-gray-900 dark:text-white': heading.visible,
              'text-gray-500 dark:text-gray-500': !heading.visible,
            }"
            >{{ heading.title }}</span
          >
          <PawIcon
            size="sm"
            class="cursor-grab transition"
            :class="{
              'text-gray-400': heading.visible,
              'text-gray-200 dark:text-gray-600': !heading.visible,
            }"
            :disabled="heading.visible"
            >drag_handle</PawIcon
          >
        </div>
      </div>
    </div>

    <!-- Table footer -->
    <div
      class="flex flex-col xs:flex-row items-center justify-between prose-xs element-text text-gray-500 border-gray-200 dark:border-gray-700 transition"
      :class="{
        'border-t': currentItems.length > 0 || informal,
        'bg-white dark:bg-gray-800 border-b border-l border-r rounded-b-xl translate-z-0':
          !informal,
        'px-6 py-3': !informal,
        'px-3 py-2 mx-4': informal,
      }"
    >
      <div
        :class="{
          'italic text-danger-500 dark:text-danger-400 transition': error,
        }"
        v-html="footerText"
      ></div>
      <div class="flex flex-row items-center">
        <PawLink
          size="sm"
          icon="keyboard_arrow_up"
          class="mr-2"
          @clicked="paginate('prev')"
          :disabled="meta.currentPage <= 1"
        >
          {{ this.t("table.previous") }}
        </PawLink>
        <PawLink
          size="sm"
          icon="keyboard_arrow_down"
          @clicked="paginate('next')"
          :disabled="meta.currentPage >= meta.totalPages"
        >
          {{ this.t("table.next") }}
        </PawLink>
      </div>
    </div>
  </div>
</template>

<script>
import PawCheckbox from "../Checkbox/Checkbox.vue";
import PawButton from "../Button/Button.vue";
import PawLazyField from "../LazyField/LazyField.vue";
import PawIcon from "../Icon/Icon.vue";
import PawLink from "../Link/Link.vue";
import PawLabel from "../Label/Label.vue";
import PawDropdown from "../Dropdown/DropDown.vue";
import PawCrazyInput from "../CrazyInput/CrazyInput.vue";
import { languagePreference } from "../../constants";
import { useI18n } from "vue-i18n";

const loadingRowsFormal = 8;
const loadingRowsInformal = 5;

export default {
  name: "PawTable",
  emits: [
    "filtered",
    "selected",
    "sorted",
    "clicked",
    "reordered",
    "paginated",
    "buttonClicked",
    "searchDropdownItemClicked",
    "searched",
    "keyDownEnter",
    "actionSelected",
  ],
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
      settingsOpened: false,
      searchbarOpened: false,
      searchValue: this.searchbarValueProxy,
      error: false,
      dropdownOpen: false,
      rowIdentifierProxy: null,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    buttons: {
      type: Array,
      default: () => [],
    },
    searchDropdownItems: {
      type: Array,
      default: () => [],
    },
    searchDropdownText: {
      type: String,
      default: "Search by",
    },
    actionDropdownItems: {
      type: Array,
      default: () => [],
    },
    rowItemIdentifier: {
      type: String,
      default: "id",
    },
    title: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    buttonIcon: {
      type: String,
    },
    informal: {
      type: Boolean,
      default: false,
    },
    ctaIcon: {
      type: String,
      default: "assignment",
    },
    bgDark: {
      type: String,
      default: "bg-gray-800",
    },
    bgLight: {
      type: String,
      default: "bg-white",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    searchbar: {
      type: Boolean,
      default: false,
    },
    searchbarValueProxy: {
      type: String,
      default: "",
    },
    selectionEnabled: {
      type: Boolean,
      default: false,
    },
    itemsNotFoundHasBgColor: {
      type: Boolean,
      default: true,
    },
    itemsNotFoundBgClass: {
      type: String,
      default: "warning",
    },
    itemsNotFoundTextColorClass: {
      type: String,
      default: "gray",
    },
  },
  components: {
    PawCheckbox,
    PawLazyField,
    PawLink,
    PawIcon,
    PawLabel,
    PawButton,
    PawDropdown,
    PawCrazyInput,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
      messages: {
        en: {
          table: {
            details: "Details",
            loading: "Loading results...",
            missingHeadingName: "Missing heading name",
            missingHeadingTitle: "Missing heading title",
            missingAttribute: "{attr} attribute missing in {obj} prop",
            next: "Next",
            previous: "Previous",
            showRecords: "Showing {total} results",
            showRecordsInterval: "Showing {first} to {last} of {total} results",
          },
        },
        de: {
          table: {
            details: "Details",
            loading: "Ergebnisse werden geladen...",
            missingHeadingName: "Fehlender heading name",
            missingHeadingTitle: "Fehlender heading title",
            missingAttribute: "Attribut {attr} fehlt in {obj} prop",
            next: "Weiter",
            previous: "Zurück",
            showRecords: "Zeigt {total} Ergebnisse",
            showRecordsInterval:
              "Zeigt {first} bis {last} von {total} Ergebnissen",
          },
        },
      },
    });

    return { t };
  },
  created() {
    if (!this.data.headings) {
      this.error = this.t("table.missingAttribute", {
        attr: `<pre class="inline-block font-bold not-italic">headings</pre>`,
        obj: `<pre class="inline-block font-bold not-italic">data</pre>`,
      });
    }
  },
  computed: {
    headings() {
      if (!this.data.headings) return {};
      return [...this.data.headings].sort((a, b) => a.position - b.position);
    },
    activeHeadings() {
      if (!this.headings) return {};
      return this.headings.filter((h) => h.visible);
    },
    currentItems() {
      const totalItems = this.meta.lastItem - this.meta.firstItem + 1;
      let items = [];
      if (this.meta.pagination >= this.data.items.length) {
        items = this.data.items.slice(0, totalItems);
      } else {
        items = this.data.items.slice(
          this.meta.firstItem - 1,
          Math.max(this.meta.firstItem - 1 + this.meta.pagination, totalItems)
        );
      }

      const minimumItems = this.informal
        ? loadingRowsInformal
        : loadingRowsFormal;

      return !this.loading
        ? items
        : items.length < minimumItems
        ? items.concat(this.fillItems(minimumItems - items.length))
        : items;
    },
    detailsText() {
      return !this.informal ? this.t("table.details") : "";
    },
    meta() {
      let meta = {};

      // Total records
      meta.totalRecords = Math.max(
        this.data.meta.records,
        this.data.items.length
      );
      // Records per page (default: 10)
      meta.pagination =
        (this.data.meta.pagination < 1 ? 1 : this.data.meta.pagination) || 10;
      // Number of pages (default: 1)
      meta.totalPages = Math.ceil(meta.totalRecords / meta.pagination) || 1;
      // Current page (default: 1)
      meta.currentPage =
        Math.min(Math.max(this.data.meta.page, 1), meta.totalPages) || 1;
      // First and last shown items
      meta.firstItem = meta.pagination * (meta.currentPage - 1) + 1;
      meta.lastItem =
        Math.min(meta.firstItem + meta.pagination - 1, meta.totalRecords) ||
        this.data.items.length;
      //console.log(meta);

      return meta;
    },
    footerText() {
      if (this.error) return this.error;

      if (this.loading) {
        return this.t("table.loading");
      }

      if (this.data.meta.records) {
        return this.t("table.showRecordsInterval", {
          first: new Intl.NumberFormat(languagePreference).format(
            this.meta.firstItem
          ),
          last: new Intl.NumberFormat(languagePreference).format(
            this.meta.lastItem
          ),
          total: new Intl.NumberFormat(languagePreference).format(
            this.meta.totalRecords
          ),
        });
      }
      return this.t("table.showRecords", {
        total: new Intl.NumberFormat(languagePreference).format(
          this.data.items.length
        ),
      });
    },
    computedInputRoundedClasses() {
      return this.searchDropdownItems.length > 0
        ? "rounded-md rounded-l-none"
        : "rounded-md";
    },
    computedButtonRoundedClasses() {
      return this.searchDropdownItems.length > 0
        ? "rounded-md rounded-r-none"
        : "rounded-md";
    },
    computedFlexDirectionProperty() {
      return this.searchDropdownItems.length > 0 ? "row" : "col";
    },
  },
  methods: {
    /* Emitters */
    /**
     * Emitted when heading visibility changed
     * @param heading {Object} Table heading
     */
    filter(heading) {
      this.$emit("filtered", heading.name, heading.visible);
    },

    /**
     * Emitted when record checkbox selected
     * @param eventValue {Boolean} Is checkbox selected?
     * @param id {Number | String} ID of record
     */
    select(eventValue, id) {
      this.$emit("selected", id, eventValue);
    },

    /**
     * Emitted when heading sorted
     * @param heading {Object} Table heading
     */
    sort(heading) {
      this.headings.forEach((h) => {
        // Set sorting of heading
        if (h.name === heading.name) {
          h.sort = heading.sort === "asc" ? "desc" : "asc";
          return;
        }
        // Remove sorting of rest of the headings
        h.sort = null;
      });
      this.$emit("sorted", heading.name, heading.sort);
    },

    /**
     * Emitted when record detail link clicked
     * @param id {Number | String} ID of record
     */
    click(id) {
      this.$emit("clicked", id);
    },

    /**
     * Emitted when table heading reordered
     * @param heading {Object} Table heading
     * @param position {Number} Index of new position
     */
    reorder(heading, position) {
      this.$emit("reordered", heading.name, position);
    },

    /**
     * Emitted when pagination arrows clicked
     * @param direction {String} Direction of clicked pagination ['prev', 'next']
     */
    paginate(direction) {
      this.$emit("paginated", direction);
    },

    /**
     * Emitted when search bar is typed - returns value
     */
    searchTyped(value) {
      // Update value
      this.searchValue = value;
      // Emit new value to paren
      this.$emit("searched", this.searchValue);
    },

    /* Methods */
    headingTitle(title) {
      if (!title) return this.t("table.missingHeadingTitle");

      return title;
    },

    openSearchbar(type) {
      if (type == "mobile") {
        this.searchbarOpened = true;
        this.$refs.searchbarMobile.focusInputElement();
        // Close dropdown on clicking outside
        this.clickOutsideElement(this.$refs.searchbarMobile, () => {
          this.searchbarOpened = false;
          this.searchValue = "";
          this.$refs.searchbar.unFocusInputElement();
        });
      } else {
        this.searchbarOpened = true;
        this.$refs.searchbar.focusInputElement();

        // Close dropdown on clicking outside
        this.clickOutsideElement(this.$refs.searchbar, () => {
          this.searchbarOpened = false;
          this.searchValue = "";
          this.$refs.searchbar.unFocusInputElement();
        });
      }
    },

    openDropdown(event, rowItemIdentifier) {
      this.dropdownOpen = false;
      // Timeout so the dropdown can disappear and reappear
      setTimeout(() => {
        const dropdown = this.$refs.actionDropdown;

        const targetElRect = event.target.getBoundingClientRect();
        const tableElRect = this.$refs.table.getBoundingClientRect();
        const tableHeaderElRect =
          this.$refs.tableHeader.getBoundingClientRect();

        const offset = this.informal ? 30 : 10;

        const dropdownTopValue =
          targetElRect.top -
          tableElRect.top +
          tableHeaderElRect.height +
          targetElRect.height +
          offset;

        dropdown.style.top = `${dropdownTopValue}px`;

        this.dropdownOpen = true;
        this.rowIdentifierProxy = rowItemIdentifier;

        this.clickOutsideElement(this.$refs.actionDropdown, () => {
          this.dropdownOpen = false;
        });
      }, 150);
    },

    dropdownActionSelected(actionIdentifier) {
      this.dropdownOpen = false;

      // Emit the selected state to parent component
      this.$emit("actionSelected", actionIdentifier, this.rowIdentifierProxy);
    },

    cellValue(value, key) {
      if (!key)
        return `<span class="italic text-danger-500 dark:text-danger-400 transition">${this.t(
          "table.missingHeadingName"
        )}</span>`;

      return value;
    },
    toggleHeading(heading) {
      heading.visible = !heading.visible;
      this.filter(heading);
    },
    /**
     * Returns array of missing items to reach minimum of loading rows
     * @param n {Number} Number of rows to fill
     */
    fillItems(n) {
      let item = {};
      for (let key in this.headings) {
        // Set dummy text
        item[this.headings[key].name] = "1";
      }

      let missingItems = [];
      for (let i = 0; i < n; i++) {
        missingItems.push(item);
      }
      return missingItems;
    },
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
          !Array.from(excludedElements).includes(e.target)
        ) {
          if (action(e) !== false) {
            document.removeEventListener(bindEvent, checkElement);
          }
        }
      });
    },
    hasStickyDetails() {
      return this.ctaIcon && this.ctaIcon !== "";
    },
  },
};
</script>

<style></style>
