import '../../assets/tailwind.css';
import {PawList} from './index';
import PawIcon from '../Icon/index';
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawList',
    component: PawList,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which is only displayed if list items object is empty `{}` or `null`.',
        },
        title: {
            control: { type: 'text' },
            description: '<b>Default</b> tooltip text to show extra information.',
        },
        icon: {
            control: { type: 'text' },
            description: '<b>Default</b> ligature alias of icon.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: '<b>Default</b> size of list items (space around).',
        },
        outlined: {
            control: { type: 'boolean' },
            description: 'Are icons displayed in outline theme by <b>default</b>?',
        },
        divider: {
            control: { type: 'boolean' },
            description: 'Show divider between list items?',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Are list items disabled by <b>default</b>?<br><b>Shortcut:</b> `<PawList disabled></PawList>`'
        },
        items: {
            control: { type: 'object' },
            description: 'JSON object containing list items, the values of which will override default values.',
        },
        clicked: {
            description: 'Fired by <b>default</b> on list item clicked.',
        },
    },
};

const Template = (args) => ({
    components: { PawList, PawIcon },
    setup() {
        return { args };
    },
    template: `
<PawList v-bind="args">
    <PawIcon size="md" class="text-warning-600 dark:text-warning-300 mr-2">warning</PawIcon>
    No items found.
</PawList>`,
});

export const Primary = Template.bind({});
Primary.args = {
    title: 'List item title',
    icon: 'add_a_photo',
    size: 'md',
    outlined: false,
    disabled: false,
    items:
        [
            {
                text: 'Navigation list item 1',
                title: 'List item 1',
            },
            {
                text: 'Navigation list item 2',
                title: 'List item 2',
                disabled: true,
            },
            {
                text: 'Navigation list item 3',
                title: 'List item 3',
                outlined: false,
            },
            {
                text: 'Navigation list item 4',
                title: 'List item 4',
                icon: 'settings',
                outlined: false,
            },
        ]
};
Primary.parameters = {
    docs: {
        source: {
            code: `
<PawList${componentProps(Primary.args)}>
    <PawIcon size="md" class="text-warning-600 dark:text-warning-300 mr-2">warning</PawIcon>
    No items found.
</PawList>`,
            type: 'dynamic',
        }
    }
}
