import '../../assets/tailwind.css';
import PawCheckbox from './Checkbox'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawCheckbox',
    component: PawCheckbox,
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
            description: 'Is custom control checked?<br><b>Shortcut:</b> `<PawCheckbox checked></PawCheckbox>`'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Is custom control disabled?<br><b>Shortcut:</b> `<PawCheckbox disabled></PawCheckbox>`'
        },
        changed: {
            description: 'Fired on custom control changed.',
        },
    },
};

const Template = (args) => ({
    components: { PawCheckbox },
    setup() {
        return { args };
    },
    template:  `<PawCheckbox v-bind="args">{{ args.default }}</PawCheckbox>`,
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
<PawCheckbox${componentProps(Small.args)}>${Small.args.default}</PawCheckbox>`,
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
<PawCheckbox${componentProps(Medium.args)}>${Medium.args.default}</PawCheckbox>`,
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
<PawCheckbox${componentProps(Large.args)}>${Large.args.default}</PawCheckbox>`,
            type: 'dynamic',
        }
    }
}
