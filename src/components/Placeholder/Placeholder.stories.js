import '../../assets/tailwind.css';
import PawPlaceholder from './index'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawPlaceholder',
    component: PawPlaceholder,
    argTypes: {
        default: {
            control: { type: 'text' },
            description: 'Slot content which defines component text.',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of component.',
        },
        outlined: {
            control: { type: 'boolean' },
            description: 'Is icon displayed in outline theme?<br><b>Shortcut:</b> `<PawPlaceholder outlined></PawPlaceholder>`',
        },
    },
};

const Template = (args) => ({
    components: { PawPlaceholder },
    setup() {
        return { args };
    },
    template: `<PawPlaceholder v-bind="args">{{ args.default }}</PawPlaceholder>`,
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
<PawPlaceholder${componentProps(Outlined.args)}>${Outlined.args.default}</PawPlaceholder>`,
            type: 'dynamic',
        }
    }
}
