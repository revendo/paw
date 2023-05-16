import '@/assets/tailwind.css';
import PawButton from './index'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawButton',
    component: PawButton,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which defines button text.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of button.'
        },
        title: {
            control: { type: 'text' },
            description: 'Tooltip text to show extra information.'
        },
        icon: {
            control: { type: 'text' },
            description: 'Ligature alias of icon.'
        },
        outlined: {
            control: { type: 'boolean' },
            description: 'Is component displayed in outline design?<br><b>Shortcut:</b> `<PawButton outlined></PawButton>`'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Is the button disabled?<br><b>Shortcut:</b> `<PawButton disabled></PawButton>`'
        },
        clicked: {
            description: 'Fired on button clicked.',
        },
    },
};

const Template = (args) => ({
    components: { PawButton },
    setup() {
        return { args };
    },
    template: `<PawButton v-bind="args">{{ args.default }}</PawButton>`,
});

export const Outlined = Template.bind({});
Outlined.args = {
    size: 'lg',
    title: 'Button title',
    icon: 'add_a_photo',
    outlined: true,
    default: 'Button',
};
Outlined.parameters = {
    docs: {
        source: {
            code: `
<PawButton${componentProps(Outlined.args)}>${Outlined.args.default}</PawButton>`,
            type: 'dynamic',
        }
    }
}

export const Filled = Template.bind({});
Filled.args = {
    size: 'lg',
    title: 'Button title',
    icon: 'add_a_photo',
    default: 'Button',
};
Filled.parameters = {
    docs: {
        source: {
            code: `
<PawButton${componentProps(Filled.args)}>${Filled.args.default}</PawButton>`,
            type: 'dynamic',
        }
    }
}

export const Icon = Template.bind({});
Icon.args = {
    size: 'lg',
    title: 'Button title',
    icon: 'add_a_photo',
};
Icon.parameters = {
    docs: {
        source: {
            code: `
<PawButton${componentProps(Icon.args)} />`,
            type: 'dynamic',
        }
    }
}

