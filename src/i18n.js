import {createI18n} from 'vue-i18n'

export default createI18n({
    legacy: false,
    locale: import.meta.env.I18N_LOCALE || 'en',
    fallbackLocale: import.meta.env.I18N_FALLBACK_LOCALE || 'en',
    globalInjection: true,
    silentFallbackWarn: true,
})
