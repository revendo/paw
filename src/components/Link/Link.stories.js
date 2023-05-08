import '../../assets/tailwind.css';
import PawLink from './Link'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawLink',
    component: PawLink,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which defines link text.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of link.',
        },
        title: {
            control: { type: 'text' },
            description: 'Tooltip text to show extra information.',
        },
        icon: {
            control: { type: 'text' },
            description: 'Ligature alias of icon.',
        },
        align: {
            control: { type: 'select' },
            options: ['left', 'right'],
            description: 'Icon alignment.',
        },
        color: {
            control: { type: 'select' },
            options: [undefined, 'action', 'success', 'danger', 'warning'],
            description: 'Colour of link and icon. Default is `gray-500`.',
        },
        compact: {
            control: { type: 'boolean' },
            description: 'Is the icon in compact layout displayed?<br><b>Shortcut:</b> `<PawLink compact></PawLink>`',
        },
        outlined: {
            control: { type: 'boolean' },
            description: 'Is icon displayed in outline theme?<br><b>Shortcut:</b> `<PawLink outlined></PawLink>`',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Is the link disabled?<br><b>Shortcut:</b> `<PawLink disabled></PawLink>`'
        },
        clicked: {
            description: 'Fired on link clicked.',
        },
    },
};

const Template = (args) => ({
    components: { PawLink },
    setup() {
        return { args };
    },
    template: `<PawLink v-bind="args">{{ args.default }}</PawLink>`,
});

export const TextIcon = Template.bind({});
TextIcon.args = {
    size: 'md',
    title: 'Link title',
    icon: 'add_a_photo',
    align: 'left',
    default: 'Link text',
};
TextIcon.parameters = {
    docs: {
        source: {
            code: `
<PawLink${componentProps(TextIcon.args)}>${TextIcon.args.default}</PawLink>`,
            type: 'dynamic',
        }
    }
}

export const Text = Template.bind({});
Text.args = {
    size: 'md',
    title: 'Link title',
    default: 'Link text',
};
Text.parameters = {
    docs: {
        source: {
            code: `
<PawLink${componentProps(Text.args)}>${Text.args.default}</PawLink>`,
            type: 'dynamic',
        }
    }
}

export const Icon = Template.bind({});
Icon.args = {
    size: 'md',
    icon: 'add_a_photo',
};
Icon.parameters = {
    docs: {
        source: {
            code: `
<PawLink${componentProps(Icon.args)}></PawLink>`,
            type: 'dynamic',
        }
    }
}
