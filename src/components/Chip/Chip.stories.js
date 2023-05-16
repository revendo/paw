import '../../assets/tailwind.css';
import PawChip from './index'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawChip',
    component: PawChip,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which defines chip text.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of chip.'
        },
        title: {
            control: { type: 'text' },
            description: 'Tooltip text to show extra information.'
        },
        icon: {
            control: { type: 'text' },
            description: 'Ligature alias of left icon.'
        },
        outlined: {
            control: { type: 'boolean' },
            description: 'Is component displayed in outline design?<br><b>Shortcut:</b> `<PawChip outlined></PawChip>`'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Is the chip disabled?<br><b>Shortcut:</b> `<PawChip disabled></PawChip>`'
        },
        clicked: {
            description: 'Fired on chip clicked.',
        },
    },
};

const Template = (args) => ({
    components: { PawChip },
    setup() {
        return { args };
    },
    template: `<PawChip v-bind="args">{{ args.default }}</PawChip>`,
});

export const Outlined = Template.bind({});
Outlined.args = {
    size: 'lg',
    title: 'Chip title',
    icon: 'ac_unit',
    outlined: true,
    default: 'Chip',
};
Outlined.parameters = {
    docs: {
        source: {
            code: `
<PawChip${componentProps(Outlined.args)}>${Outlined.args.default}</PawChip>`,
            type: 'dynamic',
        }
    }
}

export const Filled = Template.bind({});
Filled.args = {
    size: 'lg',
    title: 'Chip title',
    icon: 'ac_unit',
    default: 'Chip',
};
Filled.parameters = {
    docs: {
        source: {
            code: `
<PawChip${componentProps(Filled.args)}>${Filled.args.default}</PawChip>`,
            type: 'dynamic',
        }
    }
}

