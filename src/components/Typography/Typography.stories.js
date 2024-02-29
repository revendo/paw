import '@/assets/tailwind.css';
import PawTypography from './Typography.vue'
import { componentProps } from '@'

export default {
    title: 'Typography',
    component: PawTypography,
    argTypes: {
        view: {
            control: { type: 'inline-radio' },
            options: ['sizes', 'context'],
            description: 'Typography page to display.',
        },
    },
};

const Template = (args) => ({
    components: { PawTypography },
    setup() {
        return { args };
    },
    template: `
<div class="-m-5 p-5 bg-gray-100 dark:bg-gray-900">
    <PawTypography v-bind="args">{{ args.default }}</PawTypography>
</div>`,
});

export const Sizes = Template.bind({});
Sizes.args = {
    view: 'sizes',
};
Sizes.parameters = {
    docs: {
        source: {
            code: `<PawTypography${componentProps(Sizes.args)}></PawTypography>`,
            type: 'dynamic',
        }
    }
}

export const Context = Template.bind({});
Context.args = {
    view: 'context',
};
Context.parameters = {
    docs: {
        source: {
            code: `<PawTypography${componentProps(Context.args)}></Typography>`,
            type: 'dynamic',
        }
    }
}
