/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

export default {
    content: ["./src/**/*.{vue,js}", "./node_modules/paw/**/*.js"],
    darkMode: "class",
    safelist: [
        {
            /**
             * Regular expression to match dynamically generated class names
             * @link https://regex101.com/r/2iIIuJ/1
             * */
            pattern:
                /(?:\w*(?::\w*)*:)?(border|bg|text)-(?:(white|black)|(gray|action|success|warning|danger)-(\d{2,3}))/,
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", ...defaultTheme.fontFamily.sans],
                mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                xs: "10px",
                sm: "12px",
                md: "14px",
                lg: "16px", // DEFAULT
                xl: "20px",
                xxl: "24px",
                "icon-sm": "18px",
                "icon-md": "24px",
            },
            letterSpacing: {
                wider: "0.06em",
                widest: "0.08em",
            },
            typography: (theme) => ({
                xs: {
                    css: {
                        fontSize: theme("fontSize.xs"),
                        lineHeight: "140%",
                        letterSpacing: "0.04em",
                        marginBlock: "0.8em",
                    },
                },
                sm: {
                    css: {
                        fontSize: theme("fontSize.sm"),
                        lineHeight: "140%",
                        letterSpacing: "0.02em",
                        marginBlock: "0.8em",
                    },
                },
                md: {
                    css: {
                        fontSize: theme("fontSize.md"),
                        lineHeight: "140%",
                        letterSpacing: "0.02em",
                        marginBlock: "0.8em",
                    },
                },
                lg: {
                    css: {
                        fontSize: theme("fontSize.lg"),
                        lineHeight: "140%",
                        letterSpacing: "0.01em",
                        marginBlock: "0.8em",
                    },
                },
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.900"),
                        fontSize: theme("fontSize.lg"),
                        lineHeight: "140%",
                        letterSpacing: "0.01em",
                        marginBlock: "0.8em",
                    },
                },
                xl: {
                    css: {
                        fontSize: theme("fontSize.xl"),
                        lineHeight: "120%",
                        letterSpacing: "0",
                        marginBlock: "0",
                    },
                },
                xxl: {
                    css: {
                        fontSize: theme("fontSize.xxl"),
                        lineHeight: "120%",
                        letterSpacing: "0",
                        marginBlock: "0",
                    },
                },
            }),
            colors: {
                gray: {
                    // #FFFFFF   // bg-card, dark:text-primary
                    50: "#F9FAFB",
                    100: "#F3F4F6", // bg-body, bg-box
                    200: "#E5E7EB", // icon-soft, card-border, dark:icon-primary
                    300: "#D1D5DB",
                    400: "#9CA3AF", // icon-secondary, dark:icon-secondary
                    500: "#6B7280", // text-secondary, dark:text-secondary
                    600: "#4B5563", // icon-primary
                    700: "#374151", // dark:bg-box, dark:card-border
                    800: "#1F2937", // dark:bg-card
                    900: "#111827", // text-primary, dark:bg-body
                },
                action: {
                    100: "#BFDEFF",
                    200: "#80BDFF",
                    300: "#409CFF",
                    400: "#0A84FF",
                    500: "#007BFF",
                    600: "#0F6DCD",
                    700: "#15569B",
                    800: "#1A4069",
                },
                success: {
                    100: "#BFF2D9",
                    200: "#80E5B2",
                    300: "#40D98C",
                    400: "#00CC66",
                    500: "#00BB66",
                    600: "#049F56",
                    700: "#097246",
                    800: "#0D4537",
                },
                danger: {
                    100: "#FFD2CF",
                    200: "#FFA59F",
                    300: "#FF7870",
                    400: "#FF4B40",
                    500: "#F64338",
                    600: "#C43E3A",
                    700: "#883133",
                    800: "#883133",
                },
                warning: {
                    100: "#FFF5C2",
                    200: "#FFEA84",
                    300: "#FFE047",
                    400: "#FFD60A",
                    500: "#FBC900",
                    600: "#C4A611",
                    700: "#887719",
                    800: "#4D4720",
                },
            },
            gridTemplateColumns: {
                "auto-fit": "repeat(auto-fit, minmax(160px, 1fr))",
                "auto-fill": "repeat(auto-fill, minmax(160px, 1fr))",
            },
            padding: {
                0.75: "3px",
                1.75: "7px",
                2.25: "9px",
                2.75: "11px",
                3.75: "15px",
                left: {
                    0.75: "3px",
                    1.75: "7px",
                    2.25: "9px",
                    2.75: "11px",
                    3.75: "15px",
                },
                right: {
                    0.75: "3px",
                    1.75: "7px",
                    2.25: "9px",
                    2.75: "11px",
                    3.75: "15px",
                },
                px: {
                    0.75: "3px",
                    1.75: "7px",
                    2.25: "9px",
                    2.75: "11px",
                    3.75: "15px",
                },
                py: {
                    0.75: "3px",
                    1.75: "7px",
                    2.25: "9px",
                    2.75: "11px",
                    3.75: "15px",
                },
            },
            margin: {
                0.75: "3px",
                1.75: "7px",
                2.25: "9px",
                2.75: "11px",
                3.75: "15px",
                left: {
                    0.75: "3px",
                    1.75: "7px",
                    2.25: "9px",
                    2.75: "11px",
                    3.75: "15px",
                },
                right: {
                    0.75: "3px",
                    1.75: "7px",
                    2.25: "9px",
                    2.75: "11px",
                    3.75: "15px",
                },
                mx: {
                    0.75: "3px",
                    1.75: "7px",
                    2.25: "9px",
                    2.75: "11px",
                    3.75: "15px",
                },
                my: {
                    0.75: "3px",
                    1.75: "7px",
                    2.25: "9px",
                    2.75: "11px",
                    3.75: "15px",
                },
            },
            borderWidth: {
                6: "6px",
            },
            borderRadius: {
                sm: "4px",
                md: "8px",
                lg: "12px",
                xl: "18px",
            },
            boxShadow: {
                /*
                 * Alpha hex codes
                 * @link https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
                 * 10%: 1A
                 * 20%: 33
                 * 25%: 40
                 * */
                box: `0px 1px 4px ${colors.gray[800]}1A, 0px 4px 8px ${colors.gray[800]}33`,
                "box-dark": `0px 1px 4px ${colors.gray[900]}, 0px 4px 8px ${colors.gray[900]}`,
                card: `0px 2px 4px ${colors.gray[800]}1A, 0px 4px 12px ${colors.gray[800]}40`,
                "card-dark": `0px 2px 4px rgba(0, 0, 0, 0.4), 0px 4px 12px rgba(0, 0, 0, 0.5)`,
                "gray-200-border-b-full": `0 1px 0 0  ${colors.gray[200]}`,
                "gray-700-border-b-full": `0 1px 0 0  ${colors.gray[700]}`,
            },
            transitionDuration: {
                DEFAULT: "250ms",
            },
            keyframes: {
                "pulse-in": {
                    "0%": {
                        opacity: ".25",
                    },
                    "100%": {
                        opacity: ".5",
                    },
                },
                "pulse-out": {
                    "56%": {
                        opacity: ".5",
                    },
                    "100%": {
                        opacity: ".25",
                    },
                },
            },
            animation: {
                loading:
                    "1800ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 0s infinite normal none running pulse-in," +
                    "1800ms ease-in-out 0ms infinite normal none running pulse-out",
            },
            screens: {
                xs: "400px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),

        /** Add dynamically content to :before and :after pseudo-elements
         * @source: https://github.com/tailwindlabs/tailwindcss/discussions/2119#discussioncomment-200587
         * **/
        plugin(({ addVariant, e }) => {
            addVariant("before", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`before${separator}${className}`)}::before`;
                });
            });
            addVariant("after", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`after${separator}${className}`)}::after`;
                });
            });
        }),
        plugin(({ addUtilities }) => {
            const contentUtilities = {
                ".content": {
                    content: "attr(data-content)",
                },
                ".content_": {
                    content: "attr(data-content) ' '",
                },
                ".content-before": {
                    content: "attr(data-before)",
                },
                ".content-after": {
                    content: "attr(data-after)",
                },
            };
            addUtilities(contentUtilities, ["before", "after"]);
        }),
        /** End of pseudo-element content **/
    ],
};

