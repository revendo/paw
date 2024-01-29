// Storybook documentation for FloatingBar.vue
import '@/assets/tailwind.css';
import PawFloatingBar from './index';

export default {
    title: 'Components/PawFloatingBar',
    component: PawFloatingBar,
    argTypes: {
        showStory: {
            control: { type: 'select' },
            options: ['Default', 'NoButtons', 'DifferentSizes'],
            description: 'Select the story to display.'
        },
        buttons: {
            control: { type: 'object' },
            description: 'Array of button objects to be displayed.'
        },
        scrollGradient: {
            control: { type: 'boolean' },
            description: 'If true, applies a gradient to indicate that the content is scrollable.'
        },
        clicked: {
            description: 'Fired when a button is clicked. Emits the identifier of the clicked button.',
        },
    },
};

const Template = (args) => ({

    components: { PawFloatingBar },
    setup() {
        return { args };
    },
    template: `
    <div class="relative w-full ">
        <h2> The floating bar is at the bottom of the page </h2>
        <PawFloatingBar v-if="args.showStory === 'Default'" v-bind="args"/>
        <PawFloatingBar v-if="args.showStory === 'NoButtons'" :buttons="[]" :scrollGradient="true" />
        <PawFloatingBar v-if="args.showStory === 'DifferentSizes'" :buttons="[
            { icon: 'add', textSlot: 'Small', outlined: true, size: 'sm', identifier: 'smallButton' },
            { icon: 'edit', textSlot: 'Medium', outlined: false, size: 'md', identifier: 'mediumButton' },
            { icon: 'delete', textSlot: 'Large', outlined: true, size: 'lg', identifier: 'largeButton' },
        ]" :scrollGradient="false" />
    </div>`,
});

export const Default = Template.bind({});
Default.args = {
    buttons: [
        { icon: 'add', textSlot: 'Add', outlined: false, size: 'md', identifier: 'addButton' },
    ],
    scrollGradient: true,
};
Default.parameters = {
    docs: {
        source: {
            code: `
    <PawFloatingBar 
        :buttons="[
            { icon: 'add', textSlot: 'Add', outlined: false, size: 'md' },
        ]" 
    :scrollGradient="true" />`,
            type: 'dynamic',
        }
    }
}