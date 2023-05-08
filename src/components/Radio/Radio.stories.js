import '../../assets/tailwind.css';
import PawRadio from './Radio'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawRadio',
    component: PawRadio,
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
            description: 'Is custom control checked?<br><b>Shortcut:</b> `<PawRadio checked></PawRadio>`'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Is custom control disabled?<br><b>Shortcut:</b> `<PawRadio disabled></PawRadio>`'
        },
        changed: {
            description: 'Fired on custom control changed.',
        },
    },
};

const Template = (args) => ({
    components: { PawRadio },
    setup() {
        return { args };
    },
    template: `<PawRadio v-bind="args">{{ args.default }}</PawRadio><br>`.repeat(3),
});

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
    title: 'Radio title',
    default: 'Label text',
};
Small.parameters = {
    docs: {
        source: {
            code: `
<PawRadio${componentProps(Small.args)}>${Small.args.default}</PawRadio>`,
            type: 'dynamic',
        }
    }
}

export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
    title: 'Radio title',
    default: 'Label text',
};
Medium.parameters = {
    docs: {
        source: {
            code: `
<PawRadio${componentProps(Medium.args)}>${Medium.args.default}</PawRadio>`,
            type: 'dynamic',
        }
    }
}

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
    disabled: false,
    title: 'Radio title',
    default: 'Label text',
};
Large.parameters = {
    docs: {
        source: {
            code: `
<PawRadio${componentProps(Large.args)}>${Large.args.default}</PawRadio>`,
            type: 'dynamic',
        }
    }
}
