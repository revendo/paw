import '../../assets/tailwind.css';
import PawLabel from './Label'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawLabel',
    component: PawLabel,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which defines label text.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of label.'
        },
        color: {
            control: { type: 'select' },
            options: [undefined, 'action', 'success', 'danger', 'warning'],
            description: 'Colour of label.'
        },
        title: {
            control: { type: 'text' },
            description: 'Tooltip text to show extra information.'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Is the label disabled?<br><b>Shortcut:</b> `<PawLabel disabled></PawLabel>`'
        },
    },
};

const Template = (args) => ({
    components: { PawLabel },
    setup() {
        return { args };
    },
    template: `<PawLabel v-bind="args">{{ args.default }}</PawLabel>`,
});

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
    title: 'Label title',
    default: 'Label',
};
Small.parameters = {
    docs: {
        source: {
            code: `
<PawLabel${componentProps(Small.args)}>${Small.args.default}</PawLabel>`,
            type: 'dynamic',
        }
    }
}

export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
    title: 'Label title',
    default: 'Label',
};
Medium.parameters = {
    docs: {
        source: {
            code: `
<PawLabel${componentProps(Medium.args)}>${Medium.args.default}</PawLabel>`,
            type: 'dynamic',
        }
    }
}

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
    title: 'Label title',
    default: 'Label',
};
Large.parameters = {
    docs: {
        source: {
            code: `
<PawLabel${componentProps(Large.args)}>${Large.args.default}</PawLabel>`,
            type: 'dynamic',
        }
    }
}
