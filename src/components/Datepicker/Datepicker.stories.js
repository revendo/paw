import "../../assets/tailwind.css";
import PawDatepicker from "./DatePicker";
import { componentProps } from "../../index.js";

export default {
  title: "Components/PawDatepicker",
  component: PawDatepicker,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Content of top left label.",
      table: {
        category: "Top elements",
      },
    },
    inputValue: {
      control: { type: "text" },
      description: "Value of datepicker",
    },
    format: {
      control: { type: "text" },
      description:
        "Date format of output. Visit moment.js to see available formats",
    },
    minDate: {
      control: { type: "text" },
      description: "Minimum date which should be available to select",
    },
    maxDate: {
      control: { type: "text" },
      description: "Maximum date which should be available to select",
    },
    /* Bottom labels */
    notification: {
      control: { type: "text" },
      description: "Content of bottom notification text.",
      table: {
        category: "Bottom elements",
      },
    },
    error: {
      control: { type: "text" },
      description: "Content of error text.",
      table: {
        category: "Bottom elements",
      },
    },
    /* State */
    loading: {
      control: { type: "boolean" },
      description:
        "Is datepicker in loading mode?<br><b>Shortcut:</b> `<PawDatepicker loading></PawDatepicker>`",
    },
    readonly: {
      control: { type: "boolean" },
      description:
        "Is datepicker readonly mode?<br><b>Shortcut:</b> `<PawDatepicker readonly></PawDatepicker>`",
    },

    /* Events */
    changed: {
      description: "Fired on left custom date is typed or selected. Emit will return date in defined format",
    },
  },
};

const Template = (args) => ({
  components: { PawDatepicker },
  setup() {
    return { args };
  },
  template: `<PawDatepicker v-bind="args">{{ args.default }}</PawDatepicker>`,
});

export const Normal = Template.bind({});
Normal.args = {
  label: "Datepicker",
  inputValue: "04/05/2023",
  notification: "Notification message",
  error: "Error message",
  format: "DD/MM/YYYY",
  loading: false,
};
Normal.parameters = {
  docs: {
    source: {
      code: `
<PawDatepicker${componentProps(Normal.args)}>${
        Normal.args.default
      }</PawDatepicker>`,
      type: "dynamic",
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Datepicker",
  inputValue: "04/05/2023",
  notification: "Notification message",
  error: "Error message",
  format: "DD/MM/YYYY",
  loading: true,
};
Loading.parameters = {
  docs: {
    source: {
      code: `
<PawDatepicker${componentProps(Loading.args)}>${
        Loading.args.default
      }</PawDatepicker>`,
      type: "dynamic",
    },
  },
};

export const readonly = Template.bind({});
readonly.args = {
  label: "Datepicker",
  inputValue: "04/05/2023",
  notification: "Notification message",
  error: "Error message",
  format: "DD/MM/YYYY",
  readonly: true,
};
readonly.parameters = {
  docs: {
    source: {
      code: `
<PawDatepicker${componentProps(readonly.args)} />`,
      type: "dynamic",
    },
  },
};
