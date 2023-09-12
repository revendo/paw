import "../../assets/tailwind.css";
import PawTable from "./index";
import { componentProps } from "../../index.js";

export default {
  title: "Components/PawTable",
  component: PawTable,
  argTypes: {
    default: {
      control: { type: "text" },
      description:
        "Slot content which is only displayed if data object is empty `{}` or `null`.",
    },
    data: {
      control: { type: "object" },
      description:
        "JSON object containing table `meta`, `headings` and `items`.",
    },
    title: {
      control: { type: "text" },
      description: "Title which is display in the header",
    },
    buttons: {
      control: { type: "object" },
      description: "Buttons which are displayed in the header",
    },
    informal: {
      control: { type: "boolean" },
      description:
        "Set rendering mode of table to `informal`.<br><b>Shortcut:</b> `<PawTable informal></PawTable>`",
    },
    ctaIcon: {
      control: { type: "text" },
      description: "Set click to action icon for informal table",
    },
    bgDark: {
      control: { type: "text" },
      description:
        'Tailwind background <a href="?path=/story/pawcolorswatches--swatches">colour class</a> applied to sticky headings of an informal table in <b>dark mode</b>.',
    },
    bgLight: {
      control: { type: "text" },
      description:
        'Tailwind background <a href="?path=/story/pawcolorswatches--swatches">colour class</a> applied to sticky headings of an informal table in <b>light mode</b>.',
    },
    loading: {
      control: { type: "boolean" },
      description:
        "Set loading mode to table. All interactive elements will be disabled during loading mode.<br><b>Shortcut:</b> `<PawTable loading></PawTable>`",
    },
    searchbar: {
      control: { type: "boolean" },
      description:
        "Enables searchbar in header of table. <br/><b>IMPORTANT</b> Only visible if title or buttons in the header section are set. Event @searched will be triggered on typing. <br><b>Shortcut:</b> `<PawTable searchbar></PawTable>`",
    },
    selectionEnabled: {
      control: { type: "boolean" },
      description:
        "Enables selection of a table row on formal tables.",
    },
    
    filtered: {
      description: "Triggered when heading's visibility is changed (filtered).",
    },
    selected: {
      description: "Triggered when record is selected / unselected.",
    },
    sorted: {
      description: "Triggered when heading's sort is changed.",
    },
    clicked: {
      description: "Triggered when record details is clicked.",
    },
    reordered: {
      description:
        '<span className="material-icons-outlined align-bottom">integration_instructions</span> <b>Not yet implemented</b>.<br />Triggered when position of table heading is reordered.',
    },
    paginated: {
      description:
        "Triggered when current page of table is increased / decreased.",
    },
    buttonClicked: {
      description: "Triggered when a button in header is clicked",
    },
    searched: {
      description: "Triggered when searchbar is typed",
    },
  },
};

const Template = (args) => ({
  components: { PawTable },
  setup() {
    return { args };
  },
  template: `<PawTable v-bind="args">{{ args.default }}</PawTable>`,
});

export const TeamExample = Template.bind({});
TeamExample.args = {
  data: {
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
        sort: "asc",
        visible: true,
        format: "number",
        align: "right",
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
  loading: false,
  bgDark: "bg-gray-900",
  default: `<PawIcon size="md" class="text-warning-600 dark:text-warning-300 mr-2 transition">warning</PawIcon>
              No items found.`,
};
TeamExample.parameters = {
  docs: {
    source: {
      code: `
<PawTable${componentProps(TeamExample.args)}>${
        TeamExample.args.default
      }</PawTable>`,
      type: "dynamic",
    },
  },
};

export const LoadingMode = Template.bind({});
LoadingMode.args = {
  data: {
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
        sort: "asc",
        visible: true,
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
    ],
    items: [
      {
        id: 1,
        name: "John Doe",
        company: "ABC Inc.",
        email: "johndoe@abcinc.com",
        phone: "+1 (123) 456-7890",
        seniority: 7,
        birthday: "11/02/1985",
      },
      {
        id: 2,
        name: "Jane Smith",
        company: "XYZ Corp.",
        email: "janesmith@xyzcorp.com",
        phone: "+1 (234) 567-8901",
        seniority: 5,
        birthday: "04/20/1990",
      },
      {
        id: 3,
        name: "Bob Johnson",
        company: "DEF Co.",
        email: "bobjohnson@defco.com",
        phone: "+1 (345) 678-9012",
        seniority: 4,
        birthday: "01/08/1986",
      },
      {
        id: 4,
        name: "Sarah Lee",
        company: "GHI LLC",
        email: "sarahlee@ghillc.com",
        phone: "+1 (456) 789-0123",
        seniority: 2,
        birthday: "12/19/1992",
      },
      {
        id: 5,
        name: "Tom Jackson",
        company: "JKL Corp.",
        email: "tomjackson@jklcorp.com",
        phone: "+1 (567) 890-1234",
        seniority: 1.5,
        birthday: "04/08/1988",
      },
      {
        id: 6,
        name: "Alice Kim",
        company: "MNO Inc.",
        email: "alicekim@mnoinc.com",
        phone: "+1 (678) 901-2345",
        seniority: 0.2,
        birthday: "07/13/1997",
      },
      {
        id: 7,
        name: "David Park",
        company: "PQR Co.",
        email: "davidpark@pqrco.com",
        phone: "+1 (789) 012-3456",
        seniority: 0.2,
        birthday: "09/22/1996",
      },
      {
        id: 8,
        name: "Lisa Chen",
        company: "STU LLC",
        email: "lisachen@stullc.com",
        phone: "+1 (890) 123-4567",
        seniority: 0.2,
        birthday: "02/18/2000",
      },
    ],
  },
  loading: true,
  bgDark: "bg-gray-900",
  default: `<PawIcon size="md" class="text-warning-600 dark:text-warning-300 mr-2 transition">warning</PawIcon>
              No items found.`,
};
LoadingMode.parameters = {
  docs: {
    source: {
      code: `
<PawTable${componentProps(LoadingMode.args)}>${
        LoadingMode.args.default
      }</PawTable>`,
      type: "dynamic",
    },
  },
};
export const Searchbar = Template.bind({});
Searchbar.args = {
  data: {
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
        sort: "asc",
        visible: true,
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
    ],
    items: [
      {
        id: 1,
        name: "John Doe",
        company: "ABC Inc.",
        email: "johndoe@abcinc.com",
        phone: "+1 (123) 456-7890",
        seniority: 7,
        birthday: "11/02/1985",
      },
      {
        id: 2,
        name: "Jane Smith",
        company: "XYZ Corp.",
        email: "janesmith@xyzcorp.com",
        phone: "+1 (234) 567-8901",
        seniority: 5,
        birthday: "04/20/1990",
      },
      {
        id: 3,
        name: "Bob Johnson",
        company: "DEF Co.",
        email: "bobjohnson@defco.com",
        phone: "+1 (345) 678-9012",
        seniority: 4,
        birthday: "01/08/1986",
      },
      {
        id: 4,
        name: "Sarah Lee",
        company: "GHI LLC",
        email: "sarahlee@ghillc.com",
        phone: "+1 (456) 789-0123",
        seniority: 2,
        birthday: "12/19/1992",
      },
      {
        id: 5,
        name: "Tom Jackson",
        company: "JKL Corp.",
        email: "tomjackson@jklcorp.com",
        phone: "+1 (567) 890-1234",
        seniority: 1.5,
        birthday: "04/08/1988",
      },
      {
        id: 6,
        name: "Alice Kim",
        company: "MNO Inc.",
        email: "alicekim@mnoinc.com",
        phone: "+1 (678) 901-2345",
        seniority: 0.2,
        birthday: "07/13/1997",
      },
      {
        id: 7,
        name: "David Park",
        company: "PQR Co.",
        email: "davidpark@pqrco.com",
        phone: "+1 (789) 012-3456",
        seniority: 0.2,
        birthday: "09/22/1996",
      },
      {
        id: 8,
        name: "Lisa Chen",
        company: "STU LLC",
        email: "lisachen@stullc.com",
        phone: "+1 (890) 123-4567",
        seniority: 0.2,
        birthday: "02/18/2000",
      },
    ],
  },
  title: "Card Title",
  buttons: [
    {
      identifier: "add",
      title: "test button",
      textSlot: "Add Row",
      icon: "add",
    },
    {
      identifier: "delete",
      title: "Here",
      textSlot: "Delete",
      icon: "delete",
      outlined: true,
    },
  ],
  searchbar: true,
  loading: false,
  bgDark: "bg-gray-900",
  default: `<PawIcon size="md" class="text-warning-600 dark:text-warning-300 mr-2 transition">warning</PawIcon>
              No items found.`,
};
Searchbar.parameters = {
  docs: {
    source: {
      code: `
<PawTable${componentProps(Searchbar.args)}>${
        Searchbar.args.default
      }</PawTable>`,
      type: "dynamic",
    },
  },
};

export const ListOfInvoices = Template.bind({});
ListOfInvoices.args = {
  data: {
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
        format: "date",
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
        date: "4.12.2021",
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
  informal: true,
  loading: false,
  bgDark: "bg-gray-900",
  default: `<PawIcon size="md" class="text-warning-600 dark:text-warning-300 mr-2 transition">warning</PawIcon>
              No items found.`,
};
ListOfInvoices.parameters = {
  docs: {
    source: {
      code: `
<PawTable${componentProps(ListOfInvoices.args)}>${
        ListOfInvoices.args.default
      }</PawTable>`,
      type: "dynamic",
    },
  },
};

export const ExampleWithEvents = Template.bind({});
ExampleWithEvents.args = {
  data: {
    meta: {
      pagination: 10,
      records: 5,
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
        name: "email",
        title: "E-mail address",
        position: 2,
        sort: null,
        visible: true,
        format: "mail",
      },
      {
        name: "phone",
        title: "Telephone number",
        position: 3,
        sort: null,
        visible: true,
        format: "phone",
      },
    ],
    items: [
      {
        id: 1,
        name: "Max Muster",
        email: "max.muster@domain.com",
        phone: "+41123456789",
      },
      {
        id: 2,
        name: "John Example",
        email: "john.example@domain.com",
        phone: "+41246803579",
      },
      {
        id: 3,
        name: "Lucy Fox",
        email: "lucy.fox@domain.com",
        phone: "+41987654321",
      },
      {
        id: 4,
        name: "Willy Paw",
        email: "willy.paw@domain.com",
        phone: "+41192837465",
      },
      {
        id: 5,
        name: "Nancy Fancy",
        email: "nancy.fancy@domain.com",
        phone: "+415918273645",
      },
    ],
  },
  loading: false,
  bgDark: "bg-gray-900",
  default: `<PawIcon size="md" class="text-warning-600 dark:text-warning-300 mr-2 transition">warning</PawIcon>
              No items found.`,
};
ExampleWithEvents.parameters = {
  docs: {
    source: {
      code: `
<PawTable${componentProps(ExampleWithEvents.args)}
  @filtered="(headingName, headingPosition) => updateVisibility(headingName, headingPosition)"
  @selected="(id, eventValue) => selectRecord(id, eventValue)"
  @sorted="(headingName, headingSort) => updateSorting(headingName, headingSort)"
  @clicked="showRecordDetails($event)"
  @reordered="(headingName, headingPosition) => updatePosition(headingName, headingPosition)"
  @paginated="paginateTable($event)">${
    ExampleWithEvents.args.default
  }</PawTable>`,
      type: "dynamic",
    },
  },
};

export const ExampleWithHeader = Template.bind({});
ExampleWithHeader.args = {
  data: {
    meta: {
      pagination: 10,
      records: 5,
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
        name: "email",
        title: "E-mail address",
        position: 2,
        sort: null,
        visible: true,
        format: "mail",
      },
      {
        name: "phone",
        title: "Telephone number",
        position: 3,
        sort: null,
        visible: true,
        format: "phone",
      },
    ],
    items: [
      {
        id: 1,
        name: "Max Muster",
        email: "max.muster@domain.com",
        phone: "+41123456789",
      },
      {
        id: 2,
        name: "John Example",
        email: "john.example@domain.com",
        phone: "+41246803579",
      },
      {
        id: 3,
        name: "Lucy Fox",
        email: "lucy.fox@domain.com",
        phone: "+41987654321",
      },
      {
        id: 4,
        name: "Willy Paw",
        email: "willy.paw@domain.com",
        phone: "+41192837465",
      },
      {
        id: 5,
        name: "Nancy Fancy",
        email: "nancy.fancy@domain.com",
        phone: "+415918273645",
      },
    ],
  },
  title: "Card Title",
  buttons: [
    {
      identifier: "add",
      title: "test button",
      textSlot: "Add Row",
      icon: "add",
    },
    {
      identifier: "delete",
      title: "Here",
      textSlot: "Delete",
      icon: "delete",
      outlined: true,
    },
  ],
  loading: false,
  bgDark: "bg-gray-900",
  default: `<PawIcon size="md" class="text-warning-600 dark:text-warning-300 mr-2 transition">warning</PawIcon>
              No items found.`,
};

ExampleWithHeader.parameters = {
  docs: {
    source: {
      code: `
<PawTable${componentProps(ExampleWithHeader.args)}>${
        ExampleWithHeader.args.default
      }</PawTable>`,
      type: "dynamic",
    },
  },
};
