<template>
    <div class="p-4 xs:p-8 rounded-3xl grid grid-cols-auto-fit gap-4 transition"
         :class="`bg-${bgColor.color} dark:bg-${bgColorDark.color}`">
        <div v-for="(palette, colorName) in colors" :key="colorName">
            <!-- Palette -->
            <h2 class="text-xl mb-4 text-gray-900 dark:text-white transition">{{ colorName }}</h2>
            <div v-for="(color, key) in palette" :key="key" class="flex items-center gap-2 mb-3">
                <!-- Swatch -->
                <div class="flex-auto w-24 h-12 rounded-xl"
                     :class="[
                        `bg-${colorName}-${key}`,
                        `${colorName}-${key}` === bgColor.color ? `border border-${bgColor.border}` : '',
                        `${colorName}-${key}` === bgColorDark.color ? `border border-${bgColorDark.border}` : '',
                    ]"></div>
                <div class="grow w-[14ch] font-mono text-xs text-gray-500">{{ key }} ({{ color }})</div>
            </div>
        </div>
    </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@tailwindConfig'
const fullConfig = resolveConfig(tailwindConfig)


export default {
    name: 'PawColorSwatches',
    props: {
        bgColor: {
            type: Object,
            required: true
        },
        bgColorDark: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            colors: {
                gray: fullConfig.theme.colors.gray,
                action: fullConfig.theme.colors.action,
                success: fullConfig.theme.colors.success,
                danger: fullConfig.theme.colors.danger,
                warning: fullConfig.theme.colors.warning,
            }
        }
    }
}
</script>
