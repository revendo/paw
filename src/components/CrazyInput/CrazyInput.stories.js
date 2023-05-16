import '../../assets/tailwind.css';
import PawCrazyInput from './index'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawCrazyInput',
    component: PawCrazyInput,
    argTypes: {
        /* Text field */
        default: {
            control: { type: 'text' },
            description: `The slot content defines the default value of the CrazyInput.<br>
                <span className="material-icons align-bottom mr-1">warning</span> Prop \`value\` overrides slot content.`,
            table: {
                category: 'Text field',
            },
        },
        value: {
            control: { type: 'text' },
            description: `**Reactive** value of LazyField.<br>
                <span className="material-icons align-bottom mr-1">warning</span> This value overrides any existing slot content.`,
            table: {
                category: 'Text field',
            },
        },
        placeholder: {
            control: { type: 'text' },
            description: 'Value of crazy input\'s placeholder.',
            table: {
                category: 'Text field',
            },
        },
        multiline: {
            control: { type: 'boolean' },
            description: 'Breaks crazy input\'s content in multiple lines by text overflow?<br><b>Shortcut:</b> `<PawCrazyInput multiline></PawCrazyInput>`',
            table: {
                category: 'Text field',
            },
        },
        select: {
            control: { type: 'boolean' },
            description: 'Results are shown in a single option list.<br><b>Shortcut:</b> `<PawCrazyInput select></PawCrazyInput>`',
            table: {
                category: 'Text field',
            },
        },
        multiselect: {
            control: { type: 'boolean' },
            description: 'Results are shown in a multiple selection list.<br><b>Shortcut:</b> `<PawCrazyInput multiselect></PawCrazyInput>`',
            table: {
                category: 'Text field',
            },
        },

        /* Search results (dropdown) */
        data: {
            control: { type: 'object' },
            description: 'JSON object containing search results.',
            table: {
                category: 'Search results (dropdown)',
            },
        },
        item: {
            control: { type: 'object' },
            description: '<span className="material-icons align-bottom mr-1">error</span> <b>Internal component property</b>.<br>JSON object containing one specific search result.',
            table: {
                category: 'Search results (dropdown)',
            },
        },
        isOpen: {
            control: { type: 'boolean' },
            description: '<span className="material-icons align-bottom mr-1">error</span> <b>Internal component property</b>.<br>Is dropdown currently opened?',
            table: {
                category: 'Search results (dropdown)',
            },
        },
        chipIcon: {
            control: { type: 'text' },
            description: 'Ligature alias of chips icon.',
            table: {
                category: 'Search results (dropdown)',
            },
        },
        addLabel: {
            control: { type: 'text' },
            description: 'Text label of "add item" button.',
            table: {
                category: 'Search results (dropdown)',
            },
        },
        addIcon: {
            control: { type: 'text' },
            description: 'Ligature alias of "add item" button\'s icon.',
            table: {
                category: 'Search results (dropdown)',
            },
        },
        dropdownWrap: {
            control: { type: 'boolean' },
            description: 'Is the crazy input wrapped in a container which includes the dropdown height?<br><b>Shortcut:</b> `<PawCrazyInput dropdownWrap></PawCrazyInput>`',
            table: {
                category: 'Search results (dropdown)',
            },
        },

        /* State */
        loading: {
            control: { type: 'boolean' },
            description: 'Is crazy input in loading mode?<br><b>Shortcut:</b> `<PawCrazyInput loading></PawCrazyInput>`',
            table: {
                category: 'State',
            },
        },
        readonly: {
            control: { type: 'boolean' },
            description: 'Can the crazy input only be read (no edition possible)?<br><b>Shortcut:</b> `<PawCrazyInput readonly></PawCrazyInput>`',
            table: {
                category: 'State',
            },
        },
        disabled: {
            control: { type: 'boolean' },
            description: '<span className="material-icons-outlined align-bottom">integration_instructions</span> <b>Not yet implemented</b>.<br>Is the crazy input disabled?<br><b>Shortcut:</b> `<PawCrazyInput disabled></PawCrazyInput>`',
            table: {
                category: 'State',
            },
        },

        /* Top labels */
        label: {
            control: { type: 'text' },
            description: 'Content of top left label.',
            table: {
                category: 'Top elements',
            },
        },
        info: {
            control: { type: 'text' },
            description: 'Content of top right label.',
            table: {
                category: 'Top elements',
            },
        },
        title: {
            control: { type: 'text' },
            description: 'Info label\'s tooltip text.',
            table: {
                category: 'Top elements',
            },
        },

        /* Context elements (left) */
        // Icon
        contextIcon: {
            control: { type: 'text' },
            description: 'Ligature alias of context icon.',
            table: {
                category: 'Context elements (left)',
            },
        },
        contextIconOutlined: {
            control: { type: 'boolean' },
            description: 'Is context icon displayed in outline theme?<br><b>Shortcut:</b> `<PawCrazyInput contextIconOutlined></PawCrazyInput>`',
            table: {
                category: 'Context elements (left)',
            },
        },
        // Checkbox / Radio controls
        contextControl: {
            control: { type: 'select' },
            options: [undefined, 'checkbox', 'radio'],
            description: 'Type of custom control.',
            table: {
                category: 'Context elements (left)',
            },
        },
        contextChecked: {
            control: { type: 'boolean' },
            description: 'Is custom control checked?<br><b>Shortcut:</b> `<PawCrazyInput context-checked></PawCrazyInput>`',
            table: {
                category: 'Context elements (left)',
            },
        },
        contextDisabled: {
            control: { type: 'boolean' },
            description: 'Is custom control disabled?<br><b>Shortcut:</b> `<PawCrazyInput context-disabled></PawCrazyInput>`',
            table: {
                category: 'Context elements (left)',
            },
        },
        // Position
        contextPosition: {
            control: { type: 'select' },
            options: ['top', 'center', 'bottom'],
            description: 'Vertical position of context element.',
            table: {
                category: 'Context elements (left)',
            },
        },

        /* Extra elements (right) */
        extraLabel: {
            control: { type: 'text' },
            description: 'Content of right extra label.',
            table: {
                category: 'Extra elements (right)',
            },
        },
        extraIcon: {
            control: { type: 'text' },
            description: 'Ligature alias of extra icon.',
            table: {
                category: 'Extra elements (right)',
            },
        },
        extraIconOutlined: {
            control: { type: 'boolean' },
            description: 'Is extra icon displayed in outline theme?<br><b>Shortcut:</b> `<PawCrazyInput extraIconOutlined></PawCrazyInput>`',
            table: {
                category: 'Extra elements (right)',
            },
        },
        // Position
        extraPosition: {
            control: { type: 'select' },
            options: ['top', 'center', 'bottom'],
            description: 'Vertical position of extra element.',
            table: {
                category: 'Extra elements (right)',
            },
        },

        /* Bottom labels */
        notification: {
            control: { type: 'text' },
            description: 'Content of bottom notification text.',
            table: {
                category: 'Bottom elements',
            },
        },
        error: {
            control: { type: 'text' },
            description: 'Content of error text.',
            table: {
                category: 'Bottom elements',
            },
        },

        /* Events */
        changed: {
            description: 'Fired on left custom control changed.',
        },
        typed: {
            description: 'Fired on text input typed.',
        },
        selected: {
            description: 'Fired on dropdown option(s) selected/removed.',
        },
        added: {
            description: 'Fired on "add item" button clicked.',
        },
        removed: {
            description: 'Fired on chip removed.',
        },
        cancelled: {
            description: 'Fired either when search loading is cancelled, when dropdown is closed or when all input text is deleted.',
        },
        optionFocused: {
            description: '<span className="material-icons align-bottom mr-1">error</span>  <b>Internal component event</b>.<br>Triggered when dropdown option is focused.',
        },
        optionSelected: {
            description: '<span className="material-icons align-bottom mr-1">error</span> <b>Internal component event</b>.<br>Triggered when dropdown option is selected.',
        },
        optionMoved: {
            description: '<span className="material-icons align-bottom mr-1">error</span> <b>Internal component event</b>.<br>Triggered when focus is moved across dropdown options with arrow keys.',
        },
        optionTyped: {
            description: '<span className="material-icons align-bottom mr-1">error</span> <b>Internal component event</b>.<br>Triggered when text is typed on dropdown\'s option.',
        },
        dropdownClosed: {
            description: '<span className="material-icons align-bottom mr-1">error</span> <b>Internal component event</b>.<br>Triggered when escape key is pressed within the dropdown.',
        },
    },
};

const Template = (args) => ({
    components: { PawCrazyInput },
    setup() {
        return { args };
    },
    template: `<PawCrazyInput v-bind="args">{{ args.default }}</PawCrazyInput>`,
});

export const Ellipsis = Template.bind({});
Ellipsis.args = {
    placeholder: 'Initial content',
    label: 'Crazy Input',
    info: 'Info',
    title: 'Extended information about this field',
    extraLabel: 'Text',
    extraIcon: 'add_circle',
    extraPosition: 'top',
    notification: 'Notification message',
    error: 'Error message',
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae elit vel ante bibendum lobortis.',
};
Ellipsis.parameters = {
    docs: {
        source: {
            code: `
<PawCrazyInput${componentProps(Ellipsis.args)}>
${Ellipsis.args.default}
</PawCrazyInput>`,
            type: 'dynamic',
        }
    }
}

export const Multiline = Template.bind({});
Multiline.args = {
    placeholder: 'Initial content',
    multiline: true,
    label: 'Crazy Input',
    info: 'Info',
    title: 'Extended information about this field',
    contextControl: 'checkbox',
    contextPosition: 'top',
    extraLabel: 'Some text',
    extraIcon: 'add_circle',
    extraPosition: 'top',
    notification: 'Notification message',
    error: 'Error message',
    default: 'Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen?',
};
Multiline.parameters = {
    docs: {
        source: {
            code: `
<PawCrazyInput${componentProps(Multiline.args)}>
${Multiline.args.default}
</PawCrazyInput>`,
            type: 'dynamic',
        }
    }
}

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
    readonly: false,
    label: 'Crazy Input',
    info: 'Info',
    contextIcon: 'search',
    extraLabel: 'Some text',
    extraIcon: 'add_circle',
    extraPosition: 'top',
    notification: 'Notification message',
    error: 'Error message',
};
Loading.parameters = {
    docs: {
        source: {
            code: `
<PawCrazyInput${componentProps(Loading.args)}></PawCrazyInput>`,
            type: 'dynamic',
        }
    }
}

const searchData = {
    select: [
        {
            id: 1,
            value: 'jakob.baranowski@revendo.ch',
        },
        {
            id: 2,
            value: 'jonathan.miskolczy@revendo.ch',
            extraIcon: 'pets',
            extraLabel: 'CHF',
        },
        {
            id: 3,
            value: 'gerard.figols@revendo.ch',
        },
        {
            id: 4,
            value: 'christian.rickenbacher@revendo.ch',
            extraIcon: 'ac_unit',
            extraLabel: 'EUR',
        },
        {
            id: 5,
            value: 'dragan.rapic@revendo.ch',
        },
        {
            id: 6,
            value: 'tino.zorotovic@revendo.ch',
        },
        {
            id: 7,
            value: 'simun.radmanlivaja@revendo.ch',
        },
        {
            id: 8,
            value: 'jerko.zaneta@revendo.ch',
        },
    ],
        multiselect: [
        {
            id: 1,
            value: 'Jakob Baranowski',
        },
        {
            id: 2,
            value: 'Jonathan Miskolczy',
            extraIcon: 'pets',
            extraLabel: 'CHF',
        },
        {
            id: 3,
            value: 'Gerard Fígols',
            extraIcon: 'ac_unit',
            extraLabel: 'EUR',
        },
        {
            id: 4,
            value: 'Christian Rickenbacher',
        },
        {
            id: 5,
            value: 'Dragan Rapić',
        },
        {
            id: 6,
            value: 'Tino Zorotović',
        },
        {
            id: 7,
            value: 'Šimun Radman-Livaja',
        },
        {
            id: 8,
            value: 'Jerko Zaneta',
        },
    ],
};

export const SelectEmail = Template.bind({});
SelectEmail.args = {
    select: true,
    addLabel: 'Add',
    addIcon: 'add',
    placeholder: 'Search email address',
    contextIcon: 'search',
    extraIcon: 'add_circle',
    extraPosition: 'top',
    data: searchData.select,
    label: 'Crazy Input Select',
    dropdownWrap: true,
};
SelectEmail.parameters = {
    docs: {
        storyDescription: '<span class="material-icons align-bottom" style="margin-right: 4px; font-size: 24px; font-family: \'Material Icons\';">error</span> <b>How to use</b>: After typing something in, close and open dropdown again with right icon in order to see the options.',
        source: {
            code: `
<PawCrazyInput${componentProps(SelectEmail.args)}></PawCrazyInput>`,
            type: 'dynamic',
        }
    }
}

export const MultiselectTeamMember = Template.bind({});
MultiselectTeamMember.args = {
    multiselect: true,
    addLabel: 'Add team member',
    addIcon: 'group_add',
    chipIcon: 'ac_unit',
    placeholder: 'Search team member',
    contextIcon: 'search',
    extraIcon: 'add_circle',
    extraPosition: 'top',
    data: searchData.multiselect,
    label: 'Crazy Input Multiselect',
    dropdownWrap: true,
};
MultiselectTeamMember.parameters = {
    docs: {
        storyDescription: '<span class="material-icons align-bottom" style="margin-right: 4px; font-size: 24px; font-family: \'Material Icons\';">error</span> <b>How to use</b>: After typing something in, close and open dropdown again with right icon in order to see the options.',
        source: {
            code: `
<PawCrazyInput${componentProps(MultiselectTeamMember.args)}></PawCrazyInput>`,
            type: 'dynamic',
        }
    }
}
