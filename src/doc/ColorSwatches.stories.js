import '../assets/tailwind.css';
import PawColorSwatches from './ColorSwatches'
import { componentProps } from '../index.js'

export default {
    title: 'Colors',
    component: PawColorSwatches,
    argTypes: {
        bgColor: {
            control: { type: 'object' },
            description: 'Light mode background colour configuration.',
        },
        bgColorDark: {
            control: { type: 'object' },
            description: 'Dark mode background colour configuration.',
        },
    },
};

const Template = (args) => ({
    components: { PawColorSwatches },
    setup() {
        return { args };
    },
    template: `<PawColorSwatches v-bind="args"></PawColorSwatches>`,
});

export const Swatches = Template.bind({});
Swatches.args = {
    bgColor: {
        color: 'white',
        border: 'gray-200',
    },
    bgColorDark: {
        color: 'gray-800',
        border: 'gray-600',
    },
};
Swatches.parameters = {
    docs: {
        source: {
            code: `
<PawColorSwatches${componentProps(Swatches.args)}></PawColorSwatches>`,
            type: 'dynamic',
        }
    }
}
