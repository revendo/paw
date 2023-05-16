import "../../assets/tailwind.css";
import PawDropdown from "./index";
import { componentProps } from "../../index.js";

export default {
  title: "Components/PawDropdown",
  component: PawDropdown,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of dropdown button.",
    },
    title: {
      control: { type: "text" },
      description: "Tooltip text to show extra information on dropdown button.",
    },
    icon: {
      control: { type: "text" },
      description: "Ligature alias of icon for dropdown button.",
    },
    outlined: {
      control: { type: "boolean" },
      description: "Is component displayed in outline design?",
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Is the button disabled?<br><b>Shortcut:</b> `<PawDropdown disabled></PawDropdown>`",
    },
    items: {
      control: { type: "object" },
      description: "Items to display in the dropdown",
    },
    selected: {
      control: { type: "text" },
      description: "Fired when item in dropdown is selected",
    },
  },
};

const Template = (args) => ({
  components: { PawDropdown },
  setup() {
    return { args };
  },
  template: `<PawDropdown v-bind="args">{{ args.default }}</PawDropdown>`,
});

export const Outlined = Template.bind({});
Outlined.args = {
  size: "lg",
  title: "Button title",
  textSlot: "Dropdown",
  outlined: true,
  default: "Button",
  items: [
    {
      textSlot: "Account",
      identifier: "account",
    },
    {
      icon: "ac_unit",
      textSlot: "Cold here..",
      identifier: "cold",
    },
    {
      icon: "login",
      textSlot: "Login",
      identifier: "login",
    },
  ],
};
Outlined.parameters = {
  docs: {
    source: {
      code: `
<PawDropdown${componentProps(Outlined.args)}>${
        Outlined.args.default
      }</PawDropdown>`,
      type: "dynamic",
    },
  },
};

export const Filled = Template.bind({});
Filled.args = {
  size: "lg",
  title: "Button title",
  textSlot: "Dropdown",
  default: "Button",
  items: [
    {
      textSlot: "Account",
      identifier: "account",
    },
    {
      icon: "ac_unit",
      textSlot: "Cold here..",
      identifier: "cold",
    },
    {
      icon: "login",
      textSlot: "Login",
      identifier: "login",
    },
  ],
};
Filled.parameters = {
  docs: {
    source: {
      code: `
<PawDropdown${componentProps(Filled.args)}>${
        Filled.args.default
      }</PawDropdown>`,
      type: "dynamic",
    },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  size: "lg",
  title: "Button title",
  icon: "add_a_photo",
  items: [
    {
      textSlot: "Account",
      identifier: "account",
    },
    {
      icon: "ac_unit",
      textSlot: "Cold here..",
      identifier: "cold",
    },
    {
      icon: "login",
      textSlot: "Login",
      identifier: "login",
    },
  ],
};
Icon.parameters = {
  docs: {
    source: {
      code: `
<PawDropdown${componentProps(Icon.args)} />`,
      type: "dynamic",
    },
  },
};
