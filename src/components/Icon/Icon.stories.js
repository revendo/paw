import '../../assets/tailwind.css';
import PawIcon from './index'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawIcon',
    component: PawIcon,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which defines ligature alias of icon.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of icon.',
        },
        outlined: {
            control: { type: 'boolean' },
            description: 'Is icon displayed in outline theme?<br><b>Shortcut:</b> `<PawIcon outlined></PawIcon>`',
        },
    },
};

const Template = (args) => ({
    components: { PawIcon },
    setup() {
        return { args };
    },
    template:  `<PawIcon v-bind="args">{{ args.default }}</PawIcon>`,
});

export const Outlined = Template.bind({});
Outlined.args = {
    size: 'lg',
    outlined: true,
    default: 'add_a_photo',
};
Outlined.parameters = {
    docs: {
        source: {
            code: `
<PawIcon${componentProps(Outlined.args)}>${Outlined.args.default}</PawIcon>`,
            type: 'dynamic',
        }
    }
}

export const Filled = Template.bind({});
Filled.args = {
    size: 'lg',
    default: 'add_a_photo',
};
Filled.parameters = {
    docs: {
        source: {
            code: `
<PawIcon${componentProps(Filled.args)}>${Filled.args.default}</PawIcon>`,
            type: 'dynamic',
        }
    }
}
