import {createI18n} from 'vue-i18n'

export default createI18n({
    legacy: false,
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    globalInjection: true,
    silentFallbackWarn: true,
})
