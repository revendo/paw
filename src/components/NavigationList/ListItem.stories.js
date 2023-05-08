import '../../assets/tailwind.css';
import PawListItem from './ListItem'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawListItem',
    component: PawListItem,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which defines list item text.',
        },
        title: {
            control: { type: 'text' },
            description: 'Tooltip text to show extra information.'
        },
        icon: {
            control: { type: 'text' },
            description: 'Ligature alias of icon.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of list item.',
        },
        outlined: {
            control: { type: 'boolean' },
            description: 'Is icon displayed in outline theme?<br><b>Shortcut:</b> `<PawListItem outlined></PawListItem>`',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Is the list item disabled?<br><b>Shortcut:</b> `<PawListItem disabled></PawListItem>`'
        },
        clicked: {
            description: 'Fired on list item clicked.',
        },
    },
};

const Template = (args) => ({
    components: { PawListItem },
    setup() {
        return { args };
    },
    template: `<PawListItem v-bind="args">{{ args.default }}</PawListItem>`,
});

export const Primary = Template.bind({});
Primary.args = {
    title: 'List item title',
    icon: 'add_a_photo',
    size: 'md',
    default: 'Navigation list item',
};
Primary.parameters = {
    docs: {
        source: {
            code: `
<PawListItem${componentProps(Primary.args)}>${Primary.args.default}</PawListItem>`,
            type: 'dynamic',
        }
    }
}
