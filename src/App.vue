<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-gray-100 dark:bg-gray-900 p-2 xs:p-5 antialiased transition">
      <div class="flex flex-col max-w-6xl mx-auto">
        <div class="flex flex-row gap-1 ml-auto fixed z-50">
          <PawButton
            size="sm"
            icon="light_mode"
            title="Light mode"
            :outlined="darkMode"
            @clicked="darkMode = false"
          ></PawButton>
          <PawButton
            size="sm"
            icon="dark_mode"
            title="Dark mode"
            :outlined="!darkMode"
            @clicked="darkMode = true"
          ></PawButton>
        </div>
        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Icon
          </h1>
          <div
            class="flex flex-col gap-8 sm:gap-0 sm:flex-row items-center justify-evenly bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <!-- Filled -->
            <div class="flex flex-col gap-2 items-center w-24">
              <span class="font-mono text-xs text-gray-500">sm</span>
              <PawIcon
                size="sm"
                class="bg-action-100 dark:bg-action-800 text-gray-900 dark:text-white transition"
                >add_a_photo</PawIcon
              >
            </div>
            <div class="flex flex-col gap-2 items-center w-24">
              <span class="font-mono text-xs text-gray-500">md</span>
              <PawIcon
                size="md"
                class="bg-action-100 dark:bg-action-800 text-gray-900 dark:text-white transition"
                >add_a_photo</PawIcon
              >
            </div>
            <div class="flex flex-col gap-2 items-center w-24">
              <span class="font-mono text-xs text-gray-500">lg</span>
              <PawIcon
                size="lg"
                class="bg-action-100 dark:bg-action-800 text-gray-900 dark:text-white transition"
                >add_a_photo</PawIcon
              >
            </div>
            <!-- Outlined -->
            <div class="flex flex-col gap-2 items-center w-24">
              <span class="font-mono text-xs text-gray-500">sm outlined</span>
              <PawIcon
                size="sm"
                outlined
                class="bg-action-100 dark:bg-action-800 text-gray-900 dark:text-white transition"
                >add_a_photo</PawIcon
              >
            </div>
            <div class="flex flex-col gap-2 items-center w-24">
              <span class="font-mono text-xs text-gray-500">md outlined</span>
              <PawIcon
                size="md"
                outlined
                class="bg-action-100 dark:bg-action-800 text-gray-900 dark:text-white transition"
                >add_a_photo</PawIcon
              >
            </div>
            <div class="flex flex-col gap-2 items-center w-24">
              <span class="font-mono text-xs text-gray-500">lg outlined</span>
              <PawIcon
                size="lg"
                outlined
                class="bg-action-100 dark:bg-action-800 text-gray-900 dark:text-white transition"
                >add_a_photo</PawIcon
              >
            </div>
          </div>
        </div>

        <div class="max-w-6xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Button
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Clicked button:</strong> {{ clickedButton }}
          </div>
          <div
            class="flex flex-col lg:flex-row gap-20 lg:gap-10 items-center justify-evenly bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <div
              v-for="(type, i) in [
                {
                  title: 'Icon',
                  icon: 'add_a_photo',
                  text: null,
                },
                {
                  title: 'Icon & Text',
                  icon: 'add_a_photo',
                  text: 'Button',
                },
                {
                  title: 'Text',
                  icon: null,
                  text: 'Button',
                },
              ]"
              :key="i"
              class="w-full"
            >
              <h2
                class="text-xl my-5 text-center text-gray-900 dark:text-white transition"
              >
                {{ type.title }}
              </h2>
              <div class="flex flex-col items-center gap-8">
                <div
                  v-for="(subtype, j) in [
                    {
                      outlined: true,
                      disabled: false,
                    },
                    {
                      outlined: false,
                      disabled: false,
                    },
                    {
                      outlined: false,
                      disabled: true,
                    },
                  ]"
                  :key="j"
                  class="flex flex-col justify-center w-full xs:flex-row gap-8 items-center"
                >
                  <PawButton
                    v-for="(size, k) in ['sm', 'md', 'lg']"
                    :key="k"
                    :size="size"
                    :icon="type.icon"
                    title="Button's title"
                    :outlined="subtype.outlined"
                    :disabled="subtype.disabled"
                    :loading="false"
                    @clicked="
                      clickedButton = `Size: ${size} – Icon: ${
                        type.icon !== null
                      } – Text: ${type.text !== null} – Outlined: ${
                        subtype.outlined
                      }`
                    "
                    >{{ type.text }}</PawButton
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Chip
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Closed chip:</strong> {{ closedChip }}
          </div>
          <div
            class="flex flex-col lg:flex-row gap-20 lg:gap-10 items-center justify-evenly bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <div
              v-for="(type, i) in [
                {
                  title: 'Icon & Text',
                  icon: 'ac_unit',
                  text: 'Chip',
                },
              ]"
              :key="i"
              class="w-full"
            >
              <h2
                class="text-xl my-5 text-center text-gray-900 dark:text-white transition"
              >
                {{ type.title }}
              </h2>
              <div class="flex flex-col items-center gap-8">
                <div
                  v-for="(subtype, j) in [
                    {
                      outlined: true,
                      disabled: false,
                    },
                    {
                      outlined: false,
                      disabled: false,
                    },
                    {
                      outlined: false,
                      disabled: true,
                    },
                  ]"
                  :key="j"
                  class="flex flex-col justify-center w-full xs:flex-row gap-8 items-center"
                >
                  <PawChip
                    v-for="(size, k) in ['sm', 'md', 'lg']"
                    :key="k"
                    :size="size"
                    :icon="type.icon"
                    title="Chip's title"
                    :outlined="subtype.outlined"
                    :disabled="subtype.disabled"
                    @clicked="
                      closedChip = `Size: ${size} – Icon: ${
                        type.icon !== null
                      } – Text: ${type.text !== null} – Outlined: ${
                        subtype.outlined
                      }`
                    "
                    >{{ type.text }}</PawChip
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-6xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Link
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Clicked link:</strong> {{ clickedLink }}
          </div>
          <div
            class="flex flex-col lg:flex-row lg:items-start items-center gap-12 sm:gap-0 justify-evenly bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <div
              v-for="(title, size) in {
                sm: 'Small',
                md: 'Medium',
                lg: 'Large',
              }"
              :key="size"
              class="justify-self-center"
            >
              <h2
                class="text-xl my-5 text-center text-gray-900 dark:text-white transition"
              >
                {{ title }}
              </h2>
              <div
                v-for="(color, i) in [
                  undefined,
                  'action',
                  'success',
                  'danger',
                  'warning',
                  'disabled',
                ]"
                :key="i"
                class="flex flex-col my-5"
              >
                <div
                  class="flex flex-col w-full xs:flex-row items-center gap-4"
                >
                  <PawLink
                    v-for="(type, i) in [
                      {
                        icon: 'add_a_photo',
                        align: null,
                        disabled: false,
                        text: null,
                      },
                      {
                        icon: null,
                        align: null,
                        disabled: false,
                        text: 'Link text',
                      },
                      {
                        icon: 'add_a_photo',
                        align: 'left',
                        disabled: false,
                        text: 'Link text',
                      },
                      {
                        icon: 'add_a_photo',
                        align: 'right',
                        disabled: false,
                        text: 'Link text',
                      },
                    ]"
                    :key="i"
                    :size="size"
                    :icon="type.icon"
                    title="Link's title"
                    :align="type.align"
                    :color="color !== 'disabled' ? color : null"
                    :disabled="color === 'disabled'"
                    @click="
                      clickedLink = `Size: ${size} – Color: ${
                        color ? color : 'default'
                      } – Icon: ${type.icon !== null}${
                        type.align !== null ? ` – Align: ${type.align}` : ''
                      } – Text: ${type.text !== null}`
                    "
                    >{{ type.text }}</PawLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Label
          </h1>
          <div
            class="flex flex-col items-center xs:items-start gap-8 sm:gap-0 xs:flex-row justify-evenly bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <div
              v-for="(title, size) in {
                sm: 'Small',
                md: 'Medium',
                lg: 'Large',
              }"
              :key="size"
            >
              <h2
                class="text-xl my-5 text-center text-gray-900 dark:text-white transition"
              >
                {{ title }}
              </h2>
              <div class="flex flex-col items-center w-full gap-8">
                <PawLabel
                  v-for="(color, i) in [
                    undefined,
                    'action',
                    'success',
                    'danger',
                    'warning',
                  ]"
                  :key="i"
                  :size="size"
                  :color="color"
                  title="Label's title"
                  >Label</PawLabel
                >
                <PawLabel :size="size" title="Label's title" disabled
                  >Label</PawLabel
                >
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Navigation List Item
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Selected item:</strong> {{ listItemSelection }}
          </div>
          <div
            class="flex flex-col justify-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <div class="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl transition">
              <div
                v-for="(title, size) in {
                  sm: 'Small',
                  md: 'Medium',
                  lg: 'Large',
                }"
                :key="size"
                class="mb-8 last:mb-0"
              >
                <h2
                  class="text-xl mb-5 text-gray-900 dark:text-white transition"
                >
                  {{ title }}
                </h2>
                <PawListItem
                  icon="account_circle"
                  :size="size"
                  :title="`${title} title`"
                  @clicked="this.listItemSelection = title"
                >
                  Navigation list item
                </PawListItem>
              </div>
            </div>
          </div>

          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Navigation List
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Selected item:</strong> {{ listSelection }}
          </div>
          <div
            class="flex flex-col items-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <div
              class="w-full p-4 bg-gray-100 dark:bg-gray-900 rounded-md transition"
            >
              <PawList
                :items="navListItems"
                title="Default list title"
                icon="account_circle"
                outlined
                divider
                @clicked="(value) => (this.listSelection = value)"
              >
                <PawIcon
                  size="md"
                  class="text-warning-600 dark:text-warning-300 mr-2 transition"
                  >warning</PawIcon
                >
                No items found.
              </PawList>
            </div>
          </div>
        </div>

        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Custom Checkbox
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Selected item:</strong> {{ checkboxSelection }}<br />
            <strong>State:</strong> {{ checkboxState }}
          </div>
          <div
            class="flex flex-col gap-8 justify-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <template v-for="(group, size) in checkboxElements" :key="size">
              <h2
                class="text-xl text-center text-gray-900 dark:text-white transition"
              >
                {{ group.title }}
              </h2>
              <div
                class="flex flex-col sm:flex-row gap-8 items-center justify-center"
              >
                <PawCheckbox
                  v-for="(checkbox, i) in group.elements"
                  :key="i"
                  :size="size"
                  :checked="checkbox.checked"
                  @changed="checkboxChanged($event, group, i)"
                  :disabled="checkbox.disabled"
                  :title="`Checkbox title ${i}`"
                  >Checkbox {{ i }}</PawCheckbox
                >
              </div>
            </template>
          </div>
        </div>

        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Custom Radio
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Selected item:</strong> {{ radioSelection }}
          </div>
          <div
            class="flex flex-col gap-8 justify-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <template v-for="(group, size) in radioElements" :key="size">
              <h2
                class="text-xl text-center text-gray-900 dark:text-white transition"
              >
                {{ group.title }}
              </h2>
              <div
                class="flex flex-col sm:flex-row gap-8 items-center justify-center"
              >
                <!-- Set radio's 'checked' prop to true either if:
                                    radio is initialised to 'checked' and group's selected index is null
                                    --- or ---
                                    current radio index corresponds to group's selected index
                                 -->
                <PawRadio
                  v-for="(radio, i) in group.elements"
                  :key="i"
                  :size="size"
                  :checked="
                    (radio.checked && group.selected === null) ||
                    i === group.selected
                  "
                  @changed="radioSelection = group.selected = i"
                  :disabled="radio.disabled"
                  :title="`Radio title ${i}`"
                  >Radio {{ i }}</PawRadio
                >
              </div>
            </template>
          </div>
        </div>

        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Custom Switch
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Selected item:</strong> {{ switchSelection }}<br />
            <strong>State:</strong> {{ switchState }}
          </div>
          <div
            class="flex flex-col gap-8 justify-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <template v-for="(group, size) in switchElements" :key="size">
              <h2
                class="text-xl text-center text-gray-900 dark:text-white transition"
              >
                {{ group.title }}
              </h2>
              <div
                class="flex flex-col sm:flex-row gap-8 items-center justify-center"
              >
                <PawSwitch
                  v-for="(switcher, i) in group.elements"
                  :key="i"
                  :size="size"
                  :checked="switcher.checked"
                  @changed="switchChanged($event, group, i)"
                  :disabled="switcher.disabled"
                  :title="`Switch title ${i}`"
                  >Switch {{ i }}</PawSwitch
                >
              </div>
            </template>
          </div>
        </div>

        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Crazy Input
          </h1>
          <div
            class="flex flex-col gap-8 justify-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <PawCrazyInput
              @changed="(v) => (this.controlState = v)"
              @typed="(v) => (this.inputValue = v)"
              placeholder="Initial content"
              multiline
              label="Crazy Input"
              info="Info"
              title="Extended information about this field"
              context-control="checkbox"
              context-position="top"
              extra-label="Text"
              extra-icon="add_circle"
              extra-position="top"
              notification="Notification message"
              warning="Warning message"
              error="Error message"
              >Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
              wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu
              zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude
              bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns
              unterzieht sich je anstrengender körperlicher Betätigung, außer um
              Vorteile daraus zu ziehen?</PawCrazyInput
            >

            <PawCrazyInput
              @changed="(v) => (this.controlState = v)"
              @typed="
                (v) => {
                  this.inputValue = v;
                  this.crazyInputCopy = v;
                }
              "
              @keyDownEnter="keyDownEventHandler('enter')"
              context-control="radio"
              secret
              placeholder="Initial content"
              label="Crazy Input"
              extra-label="Text"
              extra-icon="add_circle"
              extra-position="top"
              notification="Notification message"
              error="Error message"
              >Lorem ipsum dolor sit amet</PawCrazyInput
            >

            <PawCrazyInput
              @changed="(v) => (this.controlState = v)"
              @typed="(v) => (this.inputValue = v)"
              :value="crazyInputCopy"
              placeholder="Reactive content"
              label="Crazy Input Reactive"
              info="Info"
              context-icon="search"
              extra-label="Text"
              extra-icon="add_circle"
              extra-position="top"
              notification="Notification message"
              error="Error message"
              :loading="crazyInputLoading"
              >Lorem ipsum dolor sit amet</PawCrazyInput
            >

            <PawSwitch
              size="md"
              checked
              class="mr-auto"
              @changed="crazyInputLoading = !crazyInputLoading"
              :title="`${
                crazyInputLoading ? 'Deactivate' : 'Activate'
              } loading mode`"
              >{{ crazyInputLoading ? "Deactivate" : "Activate" }} loading
              mode</PawSwitch
            >

            <PawCrazyInput
              @changed="(v) => (this.controlState = v)"
              @typed="(v) => typing(v, 'select')"
              @selected="(v) => select(v)"
              @cancelled="cancelLoading('select')"
              @added="this.eventsOutput = 'Add button clicked.'"
              :data="results.select"
              select
              add-label="Add"
              add-icon="add"
              placeholder="Search email address"
              context-icon="search"
              extra-icon="add_circle"
              extra-position="top"
              label="Crazy Input Select"
            ></PawCrazyInput>

            <PawCrazyInput
              @changed="(v) => (this.controlState = v)"
              @typed="(v) => typing(v, 'multiselect')"
              @selected="(v) => select(v)"
              @cancelled="cancelLoading('multiselect')"
              @added="this.eventsOutput = 'Add button clicked.'"
              :data="results.multiselect"
              multiselect
              add-label="Add team member"
              add-icon="group_add"
              chip-icon=""
              placeholder="Search team member"
              context-icon="search"
              extra-icon="add_circle"
              extra-position="top"
              label="Crazy Input Multiselect"
              dropdownWrap
            ></PawCrazyInput>
          </div>

          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 my-5 rounded-md transition"
          >
            <strong>Control state:</strong> {{ controlState }}<br />
            <strong>Events output:</strong> {{ eventsOutput }}<br />
            <strong>Selected items:</strong> {{ selectedItems }}
          </div>

          <div
            class="border-white dark:border-gray-800 border-2 p-4 xs:p-8 rounded-3xl transition"
          >
            <PawLazyField
              :value="inputValue"
              label="Crazy input value"
              info="Info"
              title="This text field shows the value of the current crazy input"
              copy
              :format="lazyFieldFormat"
              unit-position="top"
              extra-position="top"
            />

            <div
              class="mt-10 mb-5 prose-lg text-gray-900 dark:text-white transition"
            >
              <span class="font-bold">Choose a format:</span>
              {{ lazyFieldFormatTxt }}
            </div>
            <PawList
              :items="formats"
              divider
              @clicked="
                (value) => {
                  this.lazyFieldFormatTxt = formats[value].text;
                  this.lazyFieldFormat =
                    formats[value].text !== 'ellipsis'
                      ? formats[value].text
                      : null;
                }
              "
            />
          </div>
        </div>

        <div class="max-w-2xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Lazy Field
          </h1>
          <div
            class="flex flex-col gap-8 justify-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <PawLazyField
              label="Lazy Field Date Format"
              info="Info"
              title="Extended information about this field"
              format="date"
              copy
              >28-3-2022</PawLazyField
            >

            <PawLazyField
              label="Lazy Field Datetime Format"
              info="Info"
              title="Extended information about this field"
              format="datetime"
              >28-3-2022 17:14:15</PawLazyField
            >

            <PawLazyField
              label="Lazy Field Time Format"
              info="Info"
              title="Extended information about this field"
              format="time"
              >17:14:15</PawLazyField
            >

            <PawLazyField
              label="Lazy Field Address"
              info="Info"
              title="Extended information about this field"
              copy
              format="multiline"
              unit-position="top"
              extra-position="center"
              >{{ multilineAddress }}</PawLazyField
            >

            <PawLazyField
              label="Lazy Field Credit Card"
              info="Info"
              title="Extended information about this field"
              copy
              secret
              format="card"
            >
              4305 1899 0805 3550
            </PawLazyField>

            <PawLazyField
              label="Lazy Field Private"
              info="Info"
              title="Extended information about this field"
              copy
              secret
            >
              39P6pnhXA4uyLru8YPfb
            </PawLazyField>

            <PawLazyField
              label="Lazy Field Format IBAN"
              info="Info"
              title="Extended information about this field"
              copy
              format="iban"
            >
              CH3181239000001245689
            </PawLazyField>

            <PawLazyField
              label="Lazy Field Action Mail"
              info="Info"
              title="Extended information about this field"
              copy
              action="mail"
            >
              mailname@domain.com
            </PawLazyField>

            <PawLazyField
              label="Lazy Field Format Currency"
              info="Info"
              title="Extended information about this field"
              unit-label="CHF"
              unit-icon="toll"
              unit-icon-outlined
              format="number"
              :min-decimals="2"
            >
              1998792.2
            </PawLazyField>

            <PawLazyField
              label="Lazy Field Format Units"
              info="Info"
              title="Extended information about this field"
              unit-label="Paws"
              unit-icon="pets"
              unit-icon-outlined
              format="number"
              :max-decimals="10"
            >
              3.141592653589793238462643383279
            </PawLazyField>

            <PawLazyField
              label="Lazy Field Action Telephone"
              info="Info"
              title="Extended information about this field"
              copy
              action="phone"
            >
              +410615002828
            </PawLazyField>

            <PawLazyField
              label="Lazy Field Action Link"
              info="Info"
              title="Extended information about this field"
              deleteAction
              editAction
              @deleteClicked="() => console.log('delete!')"
              @editClicked="() => console.log('edit!')"
            >
              localhost:8080
            </PawLazyField>

            <PawLazyField
              label="Lazy Field Action Link"
              info="Info"
              title="Extended information about this field"
              action="link"
              insecure
            >
              localhost:8080
            </PawLazyField>
          </div>
        </div>

        <div class="max-w-6xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            (In)Formal Table
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Searchbar output: </strong
            ><span> {{ tableSearchInput }}</span
            ><br />
            <strong>Selected records:</strong> {{ selectedRecords }}<br />
            <strong>Events output:</strong> <span v-html="tableOutput"></span><br />
            <strong>Searching identifier (key):</strong> {{ tableSearchIdentifier }}
          </div>
          <div
            class="flex flex-col gap-8 justify-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <PawTable
              :data="!informalTable ? table : tableInformal"
              :loading="loadingMode"
              :searchbar="true"
              title="Card Title"
              :buttons="[
                {
                  identifier: 'add',
                  title: 'test button',
                  textSlot: 'Add Row',
                  icon: 'add',
                },
                {
                  identifier: 'delete',
                  title: 'Here',
                  textSlot: 'Delete',
                  icon: 'delete',
                  outlined: true,
                },
              ]"
              :informal="informalTable"
              ctaIcon="ac_unit"
              bg-light="bg-white"
              bg-dark="bg-gray-800"
              :searchDropdownItems="[
                {
                    icon: 'numbers',
                    textSlot: 'Code',
                    identifier: 'code',
                },
                {
                    icon: 'mail',
                    textSlot: 'Email',
                    identifier: 'email',
                },
              ]"
              :actionDropdownItems="[
                {
                    icon: 'edit',
                    textSlot: 'Edit',
                    identifier: 'edit',
                },
                {
                    icon: 'delete',
                    textSlot: 'Delete',
                    identifier: 'delete',
                },
              ]"
              :itemsNotFoundHasBgColor="true"
              itemsNotFoundBgClass="warning"
              itemsNotFoundTextColorClass="warning"
              :searchDropdownText="tableDropdownText"
              :inputRoundedClasses="'rounded-md rounded-l-none'"
              :buttonRoundedClasses="'rounded-md rounded-r-none'"
              @buttonClicked="(identifier) => tableButtonClicked(identifier)"
              @filtered="
                (headingName, headingPosition) =>
                  updateVisibility(headingName, headingPosition)
              "
              @selected="(id, eventValue) => selectRecord(id, eventValue)"
              @sorted="
                (headingName, headingSort) =>
                  updateSorting(headingName, headingSort)
              "
              @clicked="showRecordDetails($event)"
              @reordered="
                (headingName, headingPosition) =>
                  updatePosition(headingName, headingPosition)
              "
              @paginated="paginateTable($event)"
              @searched="(v) => tableSearched(v)"
              @searchDropdownItemClicked="(identifier) => searchDropdownClicked(identifier)"
              @keyDownEnter="keyDownEventHandler('enter')"
              @actionSelected="(actionIdentifier, rowItemIdentifier) => actionItemSelected(actionIdentifier, rowItemIdentifier)"
            >
              <PawIcon
                size="md"
                class="text-warning-600 dark:text-warning-300 mr-2 transition"
                >warning</PawIcon
              >
              No items found.
            </PawTable>
            <div class="flex flex-col xs:flex-row justify-between">
              <PawSwitch
                size="lg"
                class="self-start"
                title="Activate loading mode"
                @changed="activateLoadingMode($event)"
                >Activate table loading mode</PawSwitch
              >
              <PawSwitch
                size="lg"
                class="self-start"
                title="Switch table layout"
                @changed="switchInformalTable($event)"
                >Switch to informal table layout</PawSwitch
              >
            </div>
          </div>
        </div>

        <div class="max-w-6xl w-full mx-auto">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Dropdown
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Selected item:</strong>
            <span v-html="dropdownSelectedOutput"></span>
          </div>
          <div
            class="flex flex-col gap-8 justify-center items-center bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <PawDropdown
              @selected="($event) => (dropdownSelectedOutput = $event)"
              size="md"
              icon="expand_more"
              textSlot="Actions"
              :items="[
                {
                  textSlot: 'Account',
                  identifier: 'account',
                },
                {
                  icon: 'ac_unit',
                  textSlot: 'Cold here..',
                  identifier: 'cold',
                },
                {
                  icon: 'login',
                  textSlot: 'Login',
                  identifier: 'login',
                },
              ]"
            />
          </div>
        </div>
        <div class="max-w-6xl w-full mx-auto mb-32">
          <h1
            class="text-xxl mt-10 mb-5 text-gray-900 dark:text-white transition"
          >
            Datepicker
          </h1>
          <div
            class="bg-success-100 dark:bg-success-800 text-success-800 dark:text-success-100 p-4 mb-5 rounded-md transition"
          >
            <strong>Selected date: </strong>
            <span v-html="datepickerValue"></span>
          </div>
          <div
            class="flex flex-col gap-8 bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl transition"
          >
            <PawDatepicker
              label="Datepicker"
              :inputValue="datepickerValue"
              notification="Notification message"
              error="Error message"
              format="DD/MM/YYYY"
              @changed="(v) => (this.datepickerValue = v)"
            ></PawDatepicker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style>

<script>
// Library components
import PawIcon from "@/components/Icon/Icon.vue";
import PawDropdown from "@/components/Dropdown/Dropdown.vue";
import PawButton from "@/components/Button/Button.vue";
import PawChip from "@/components/Chip/Chip.vue";
import PawLabel from "@/components/Label/Label.vue";
import PawLink from "@/components/Link/Link.vue";
import PawListItem from "@/components/NavigationList/ListItem.vue";
import PawList from "@/components/NavigationList/List.vue";
import PawCheckbox from "@/components/Checkbox/Checkbox.vue";
import PawRadio from "@/components/Radio/Radio.vue";
import PawSwitch from "@/components/Switch/Switch.vue";
import PawCrazyInput from "@/components/CrazyInput/CrazyInput.vue";
import PawLazyField from "@/components/LazyField/LazyField.vue";
import PawTable from "@/components/Table/Table.vue";
import PawDatepicker from "@/components/Datepicker/Datepicker.vue";

export default {
  name: "App",
  components: {
    PawIcon,
    PawButton,
    PawChip,
    PawLabel,
    PawLink,
    PawListItem,
    PawList,
    PawCheckbox,
    PawRadio,
    PawSwitch,
    PawCrazyInput,
    PawLazyField,
    PawTable,
    PawDropdown,
    PawDatepicker,
  },
  data() {
    const testElements = [
      {
        checked: false,
        disabled: false,
      },
      {
        checked: true,
        disabled: false,
      },
      {
        checked: false,
        disabled: true,
      },
      {
        checked: true,
        disabled: true,
      },
    ];

    return {
      darkMode:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,

      // Button
      clickedButton: null,

      // Button
      tableSearchInput: null,

      // Datepicker
      datepickerValue: null,

      // Dropdown
      dropdownSelectedOutput: null,

      // Chip
      closedChip: null,

      // Link
      clickedLink: null,

      // Navigation List
      listItemSelection: null,
      listSelection: null,

      // Checkbox
      checkboxSelection: null,
      checkboxState: null,
      checkboxElements: {
        sm: {
          title: "Small",
          selected: null,
          elements: testElements,
        },
        md: {
          title: "Medium",
          selected: null,
          elements: testElements,
        },
        lg: {
          title: "Large",
          selected: null,
          elements: testElements,
        },
      },

      // Radio
      radioSelection: null,
      radioElements: {
        sm: {
          title: "Small",
          selected: null,
          elements: testElements,
        },
        md: {
          title: "Medium",
          selected: null,
          elements: testElements,
        },
        lg: {
          title: "Large",
          selected: null,
          elements: testElements,
        },
      },

      // Switch
      switchSelection: null,
      switchState: null,
      switchElements: {
        sm: {
          title: "Small",
          selected: null,
          elements: testElements,
        },
        md: {
          title: "Medium",
          selected: null,
          elements: testElements,
        },
        lg: {
          title: "Large",
          selected: null,
          elements: testElements,
        },
      },

      // List
      navListItems: [
        {
          text: "Navigation list item 0",
          title: "List item 1",
        },
        {
          text: "Navigation list item 1",
          title: "List item 2",
          disabled: true,
        },
        {
          text: "Navigation list item 2",
          title: "List item 3",
          outlined: false,
        },
        {
          text: "Navigation list item 3",
          icon: "settings",
          outlined: false,
        },
      ],

      // Crazy Input
      controlState: null,
      inputValue: null,
      crazyInputCopy: null,
      selectedItems: [],
      eventsOutput: null,
      crazyInputLoading: true,
      loaderTimeout: [],
      searchData: {
        select: [
          {
            id: 1,
            value: "jakob.baranowski@revendo.ch",
          },
          {
            id: 2,
            value: "jonathan.miskolczy@revendo.ch",
            extraIcon: "pets",
            extraLabel: "CHF",
          },
          {
            id: 3,
            value: "gerard.figols@revendo.ch",
          },
          {
            id: 4,
            value: "christian.rickenbacher@revendo.ch",
            extraIcon: "ac_unit",
            extraLabel: "EUR",
          },
          {
            id: 5,
            value: "dragan.rapic@revendo.ch",
          },
          {
            id: 6,
            value: "tino.zorotovic@revendo.ch",
          },
          {
            id: 7,
            value: "simun.radmanlivaja@revendo.ch",
          },
          {
            id: 8,
            value: "jerko.zaneta@revendo.ch",
          },
        ],
        multiselect: [
          {
            id: 1,
            value: "Jakob Baranowski",
          },
          {
            id: 2,
            value: "Jonathan Miskolczy",
            extraIcon: "pets",
            extraLabel: "CHF",
          },
          {
            id: 3,
            value: "Gerard Fígols",
            extraIcon: "ac_unit",
            extraLabel: "EUR",
          },
          {
            id: 4,
            value: "Christian Rickenbacher",
          },
          {
            id: 5,
            value: "Dragan Rapić",
          },
          {
            id: 6,
            value: "Tino Zorotović",
          },
          {
            id: 7,
            value: "Šimun Radman-Livaja",
          },
          {
            id: 8,
            value: "Jerko Zaneta",
          },
        ],
      },
      results: {
        select: [],
        multiselect: [],
      },

      // Lazy Field
      lazyFieldFormat: "multiline",
      lazyFieldFormatTxt: "multiline",
      formats: [
        {
          text: "mail",
          icon: "mail",
        },
        {
          text: "phone",
          icon: "ring_volume",
        },
        {
          text: "number",
          icon: "123",
        },
        {
          text: "card",
          icon: "credit_card",
        },
        {
          text: "iban",
          icon: "account_balance",
        },
        {
          text: "ellipsis",
          icon: "more_horiz",
        },
        {
          text: "multiline",
          icon: "segment",
        },
        {
          text: "date",
          icon: "calendar_month",
        },
        {
          text: "time",
          icon: "schedule",
        },
        {
          text: "datetime",
          icon: "today",
        },
      ],
      multilineAddress: `Güterstrasse 133
4053 Basel
Schweiz`,

      tableDropdownText: "Seach by",
      
      tableSearchIdentifier: "code",

      // Formal Table
      table: {
        meta: {
          pagination: 10,
          records: 100,
          page: 1,
        },
        headings: [
          {
            name: "name",
            title: "Name Lastname",
            position: 0,
            sort: null,
            visible: true,
          },
          {
            name: "company",
            title: "Company",
            position: 1,
            sort: null,
            visible: false,
          },
          {
            name: "email",
            title: "E-mail address",
            position: 2,
            sort: null,
            visible: true,
            format: "mail",
            action: "mail",
            align: "right",
          },
          {
            name: "phone",
            title: "Telephone number",
            position: 3,
            sort: null,
            visible: true,
            format: "phone",
          },
          {
            name: "seniority",
            title: "Seniority (years)",
            position: 4,
            sort: "desc",
            visible: true,
            align: "right",
            format: "number",
          },
          {
            name: "birthday",
            title: "Birthday",
            position: 5,
            sort: null,
            visible: true,
            format: "date",
          },
          {
            name: "githubProfile",
            title: "GitHub Profile",
            position: 6,
            sort: null,
            visible: true,
            action: "link",
            align: "right",
          },
        ],
        items: [
          {
            id: 1,
            name: "John Doe",
            company: "Acme Inc.",
            email: "john.doe@acme.com",
            phone: "+1-555-123-4567",
            seniority: 3,
            birthday: "1/1/1980",
            githubProfile: {
              link: "https://github.com/johndoe",
              text: "johndoe",
            },
          },
          {
            id: 2,
            name: "Jane Smith",
            company: "XYZ Corp",
            email: "jane.smith@xyzcorp.com",
            phone: "+1-555-987-6543",
            seniority: 2,
            birthday: "2/2/1990",
            githubProfile: {
              link: "https://github.com/janesmith",
              text: "janesmith",
            },
          },
          {
            id: 3,
            name: "Bob Johnson",
            company: "ABC Co",
            email: "bob.johnson@abcco.com",
            phone: "+1-555-555-1212",
            seniority: 5,
            birthday: "3/3/1985",
            githubProfile: {
              link: "https://github.com/bobjohnson",
              text: "bobjohnson",
            },
          },
          {
            id: 4,
            name: "Sarah Williams",
            company: "MNO Inc.",
            email: "sarah.williams@mnoinc.com",
            phone: "+1-555-789-0123",
            seniority: 1,
            birthday: "4/4/1995",
            githubProfile: {
              link: "https://github.com/sarahwilliams",
              text: "sarahwilliams",
            },
          },
          {
            id: 5,
            name: "Mike Brown",
            company: "PQR Corp",
            email: "mike.brown@pqrcorp.com",
            phone: "+1-555-456-7890",
            seniority: 0.5,
            birthday: "5/5/2000",
            githubProfile: {
              link: "https://github.com/mikebrown",
              text: "mikebrown",
            },
          },
          {
            id: 6,
            name: "Amy Lee",
            company: "DEF Co",
            email: "amy.lee@defco.com",
            phone: "+1-555-246-8013",
            seniority: 0.2,
            githubProfile: {
              link: "https://github.com/amylee",
              text: "amylee",
            },
          },
          {
            id: 7,
            name: "Tom Wilson",
            company: "GHI Inc.",
            email: "tom.wilson@ghiinc.com",
            phone: "+1-555-369-8520",
            seniority: 0.2,
            githubProfile: {
              link: "https://github.com/tomwilson",
              text: "tomwilson",
            },
          },
          {
            id: 8,
            name: "Lisa Nguyen",
            company: "JKL Corp",
            email: "lisa.nguyen@jklcorp.com",
            phone: "+1-555-753-1592",
            seniority: 0.2,
            githubProfile: {
              link: "https://github.com/lisanguyen",
              text: "lisangu",
            },
          },
        ],
      },
      selectedRecords: [],
      tableOutput: null,
      loadingMode: false,

      // Formal Table
      informalTable: false,
      tableInformal: {
        meta: {
          pagination: 10,
          records: 20,
          page: 1,
        },
        headings: [
          {
            name: "date",
            title: "Date",
            position: 0,
            sort: "asc",
            visible: true,
            format: "datetime",
            unitIcon: "",
            unitLabel: "",
          },
          {
            name: "invoice",
            title: "Invoice No.",
            position: 1,
            sort: null,
            visible: true,
          },
          {
            name: "amount",
            title: "Amount",
            position: 2,
            sort: null,
            visible: true,
            align: "right",
            format: "number",
            unitLabel: "CHF",
            maxDecimals: 2,
          },
          {
            name: "status",
            title: "Status",
            position: 3,
            sort: null,
            visible: true,
            align: "right",
            format: "label",
          },
        ],
        items: [
          {
            id: 1,
            date: "2023-01-10T13:37:28.019514Z",
            invoice: "RA123456",
            amount: 128,
            status: {
              color: "success",
              text: "Closed",
            },
          },
          {
            id: 2,
            date: "18.12.2021",
            invoice: "RA123823",
            amount: 12.9,
            status: {
              disabled: true,
              text: "Cancelled",
            },
          },
          {
            id: 3,
            date: "8.1.2022",
            invoice: "RA123340",
            amount: 2180,
            status: {
              color: "warning",
              text: "Pending",
            },
          },
          {
            id: 4,
            date: "28.2.2022",
            invoice: "RA123959",
            amount: 445.95,
            status: {
              color: "danger",
              text: "Failed",
            },
          },
        ],
      },
    };
  },
  methods: {
    /**
     * @param value {String} Receives value of searchbar as typed
     */
    tableSearched(value) {
      this.tableSearchInput = value;
    },

    keyDownEventHandler(type) {
      console.log(type);
    },
    openDatepicker(event) {
      const input = event.srcElement.previousElementSibling;
      try {
        input.showPicker();
      } catch (error) {
        window.alert(error);
      }
    },
    /**
     * @param event {Boolean} Event's value emitted from component
     * @param group {Object} Checkbox group
     * @param value {Number} Current checkbox index
     */
    checkboxChanged(event, group, value) {
      this.checkboxSelection = group.selected = value;
      this.checkboxState = event;
    },
    switchChanged(event, group, value) {
      this.switchSelection = group.selected = value;
      this.switchState = event;
    },

    /**
     * Update selected heading's visibility
     * @param headingName {String} Name of table heading
     * @param value {Boolean} Is table heading visible?
     */
    updateVisibility(headingName, value) {
      this.table.headings.filter((v) => v.name === headingName)[0].visible =
        value;
      this.tableOutput = `Heading <b>${headingName}</b> ${
        value ? "is being displayed" : "has been hidden"
      }.`;
    },

    /**
     * Add or remove record ID from selected records
     * @param id {Number | String} ID of record
     * @param value {Boolean} Is record selected?
     */
    selectRecord(id, value) {
      const index = this.selectedRecords.indexOf(id);
      // Selected record is already present in array
      if (index !== -1) {
        // Skip because record is already selected
        if (value) return;
        // Unselect record
        this.selectedRecords.splice(index, 1);
      }
      // Select record
      if (value) {
        this.selectedRecords.push(id);
      }
    },

    /**
     * Get comparable value of a given table record
     * @param value {String|Object} Property's value of a table item (record)
     * @returns {String|Number|Object} Record's value represented as string, number or other type of object
     */
    getItemValue(value) {
      if (!value) return null;
      // Object
      if (value.text !== undefined) {
        return value.text.toLowerCase();
      }
      // String
      if (typeof value === "string" || value instanceof String) {
        return value.toLowerCase();
      }
      // Number or other
      return value;
    },

    /**
     * Update sorting of heading and sort records accordingly
     * @param headingName {String} Name of table heading
     * @param headingSort {'asc' | 'desc'} Heading sorting
     */
    updateSorting(headingName, headingSort) {
      // Update sort heading
      this.table.headings.filter((v) => v.name === headingName)[0].sort =
        headingSort;
      // Sort records with a bit of magic...
      this[!this.informalTable ? "table" : "tableInformal"].items.sort((a, b) =>
        this.getItemValue(a[headingName]) > this.getItemValue(b[headingName])
          ? headingSort === "asc"
            ? 1
            : -1
          : this.getItemValue(b[headingName]) >
            this.getItemValue(a[headingName])
          ? headingSort === "asc"
            ? -1
            : 1
          : 0
      );
      this.tableOutput = `Table sorted <b>${headingSort}ending</b> by <b>${headingName}</b>.`;
    },

    /**
     * Executed on show record details clicked
     * @param id {Number | String} ID of record
     */
    showRecordDetails(id) {
      this.tableOutput = `Details of record <b>${id}</b> clicked.`;
    },

    /**
     * Change position of table heading
     * @param headingName {String} Name of table heading
     * @param position {Number} New position of heading
     */
    updatePosition(headingName, position) {
      // TODO: implement method to set new heading's position and re-index position of next headings
      this.tableOutput = `Heading <b>${headingName}</b> has been reordered to position <b>${position}</b>.`;
    },

    /**
     * Increase / decrease current page of table
     * @param page {'prev' | 'next'} Page number
     */
    paginateTable(page) {
      // Do not allow page to go below 1
      if (this.table.meta.page === 1 && page === "prev") return;
      this.table.meta.page += page === "prev" ? -1 : 1;
      this.tableOutput = `Table paginated to page <b>${this.table.meta.page}</b>.`;
    },

    tableButtonClicked(identifier) {
      this.tableOutput = `Table button was clicked! ${identifier}`;
    },

    searchDropdownClicked(identifier) {
      let searchText = identifier.charAt(0).toUpperCase() + identifier.slice(1);
      this.tableSearchIdentifier = identifier;
      this.tableDropdownText = searchText
    },

    actionItemSelected(actionIdentifier, rowItemIdentifier) {
      this.tableOutput = `Table dropdown action button was clicked! Button identifier:  ${actionIdentifier}, row item identifier: ${rowItemIdentifier}`;
    },

    activateLoadingMode(loading) {
      this.loadingMode = loading;
      this.tableOutput = `Loading mode ${
        loading ? "activated" : "deactivated"
      }.`;
    },

    switchInformalTable(informal) {
      this.informalTable = informal;
      this.selectedRecords = [];
      this.tableOutput = `Layout switched to ${
        informal ? "informal" : "formal"
      } table.`;
    },

    typing(term, scope) {
      // Update input value
      this.inputValue = term;

      if (term === "") {
        this.eventsOutput = "";
        this.results[scope] = this.searchData[scope];
        return;
      }

      this.search(term, scope);
      this.eventsOutput = "Typing...";
    },

    select(items) {
      this.selectedItems = items;
    },

    /**
     * Perform a search of a term against a data object and set results composed by pairs of 'id' and 'value'
     * @param term {String} Search term
     * @param scope {String} Scope of the search (e.g. select data or multiselect data)
     */
    search(term, scope) {
      // Perform search against a database or, in this example, against a set of data
      const instance = this;
      // Add time-out to simulate loading effect
      this.loaderTimeout[scope] = window.setTimeout(
        () => {
          instance.results[scope] = instance.searchData[scope].filter(
            (item) =>
              item.value.toLowerCase().indexOf(term.toLowerCase()) !== -1
          );
          const numResults = instance.results[scope].length;
          this.eventsOutput = `Loaded ${numResults} result${
            numResults !== 1 ? "s" : ""
          }.`;
        },
        1500,
        instance
      );
    },

    cancelLoading(scope) {
      window.clearTimeout(this.loaderTimeout[scope]);
      this.results[scope] = [];
      this.eventsOutput = "Loading of results was cancelled.";
    },
  },
};
</script>

<style></style>
