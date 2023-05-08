import '../../assets/tailwind.css';
import PawSwitch from './Switch'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawSwitch',
    component: PawSwitch,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which defines control label.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of custom control (space around input).',
        },
        title: {
            control: { type: 'text' },
            description: 'Tooltip text to show extra information.'
        },
        checked: {
            control: { type: 'boolean' },
            description: 'Is custom control checked?<br><b>Shortcut:</b> `<PawSwitch checked></PawSwitch>`'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Is custom control disabled?<br><b>Shortcut:</b> `<PawSwitch disabled></PawSwitch>`'
        },
        changed: {
            description: 'Fired on custom control changed.',
        },
    },
};

const Template = (args) => ({
    components: { PawSwitch },
    setup() {
        return { args };
    },
    template:  `<PawSwitch v-bind="args">{{ args.default }}</PawSwitch>`,
});

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
    title: 'Title text',
    checked: true,
    default: 'Label text',
};
Small.parameters = {
    docs: {
        source: {
            code: `
<PawSwitch${componentProps(Small.args)}>${Small.args.default}</PawSwitch>`,
            type: 'dynamic',
        }
    }
}

export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
    title: 'Title text',
    checked: true,
    default: 'Label text',
};
Medium.parameters = {
    docs: {
        source: {
            code: `
<PawSwitch${componentProps(Medium.args)}>${Medium.args.default}</PawSwitch>`,
            type: 'dynamic',
        }
    }
}

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
    title: 'Title text',
    checked: true,
    default: 'Label text',
};
Large.parameters = {
    docs: {
        source: {
            code: `
<PawSwitch${componentProps(Large.args)}>${Large.args.default}</PawSwitch>`,
            type: 'dynamic',
        }
    }
}
