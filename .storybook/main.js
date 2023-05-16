module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-docs",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling",
            options: {
                // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
                // For more details on this addon's options.
                postCss: true,
            },
        },
        {
            name: "@storybook/addon-postcss",
            options: {
                cssLoaderOptions: {
                    // When you have split your css over multiple files
                    // and use @import('./other-styles.css')
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    // When using postCSS 8
                    implementation: require("postcss"),
                },
            },
        },
        "storybook-tailwind-dark-mode",
        "@storybook/addon-mdx-gfm",
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

