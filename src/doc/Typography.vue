<template>
    <div class="bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl flex flex-col gap-4 transition">
        <div v-if="view === 'sizes'" class="flex flex-col gap-8 sm:gap-4">
            <div v-for="(font, size) in typography" :key="size"
                class="sm:flex sm:flex-row sm:justify-items-start sm:items-center sm:gap-10 text-gray-900 dark:text-white transition">
                <p class="flex-none font-mono text-xs text-gray-500 w-24">
                    prose-{{ size }} {{ getFontCSS(font).fontSize }}
                </p>
                <p :class="`prose-${size}`">
                    Roboto Regular
                </p>
                <p :class="`prose-${size}`" class="sm:text-right sm:ml-auto">
                    <span class="font-bold">Bold</span>
                    <span v-if="['lg','md','sm','xs'].includes(size)" class="italic">, Italic</span>
                    <span v-if="['sm','xs'].includes(size)" class="uppercase" :class="{'tracking-wider': size === 'sm', 'tracking-widest': size === 'xs'}">, Uppercase</span>
                </p>
            </div>
        </div>

        <div v-if="view === 'context'" class="text-gray-900 dark:text-white transition">
            <h1 class="prose-xxl font-bold">Supercharged for pros.</h1>
            <h2 class="prose-xl font-bold text-gray-500">From $1999</h2>
            <br><br>
            <p class="text-lg">
                <span class="font-bold">A case full of energy.</span> <span class="text-gray-500">Wirelessly</span>
            </p>
            <p class="prose-md max-w-xs">and effortlessly recharge the MagSafe Charging Case on a MagSafe charger. Fully loaded, the case gives you up to 30 hours of total listening time. And charging AirPods in the case for just 5 minutes generates around an hour of listening time.</p>
            <br><br>
            <p class="prose-sm text-gray-500">Delightfully capable. Surprisingly affordable.</p>
            <p class="prose-xs text-gray-500">Die Displays haben gerundete Ecken. Als Rechteck gemessen hat das Display eine Diagonale von 12,9" (32,77 cm) beim 12,9" iPad Pro, von 11" (27,96 cm) beim 11" iPad Pro, von 10,86" (27,59 cm) beim iPad Air (4. Generation) und von 8,3" (21,08 cm) beim iPad mini (6. Generation). Der tatsächlich sichtbare Displaybereich ist kleiner.</p>
        </div>
    </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@tailwindConfig'
const fullConfig = resolveConfig(tailwindConfig)

export default {
    name: 'PawTypography',
    props: ['view'],
    data() {
        return {
            typography: {
                xxl: fullConfig.theme.typography.xxl,
                xl: fullConfig.theme.typography.xl,
                lg: fullConfig.theme.typography.lg,
                md: fullConfig.theme.typography.md,
                sm: fullConfig.theme.typography.sm,
                xs: fullConfig.theme.typography.xs,
            }
        }
    },
    methods: {
        getFontCSS(font) {
            return font.css.constructor.name === 'Array' ?
                font.css[font.css.length-1] : font.css;
        }
    }
}
</script>
