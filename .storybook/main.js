export default {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-docs",
        "@storybook/addon-interactions",
        "@storybook/addon-styling",
        "storybook-tailwind-dark-mode",
    ],
    staticDirs: ["../src/assets"],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    core: {
        builder: "@storybook/builder-vite",
    },
    docs: {
        autodocs: true,
    },
};

