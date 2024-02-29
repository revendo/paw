<template>
    <div class="flex flex-col gap-1">
        <div v-if="label || info" class="flex flex-row">
            <label v-if="label"
                   class="prose-xs element-text text-xs uppercase text-gray-500 transition">{{ label }}</label>
            <span v-if="info"
                  class="ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition"
                  :title="title">{{ info }}</span>
        </div>

        <div class="flex flex-row items-center justify-between text-gray-800 dark:text-white transition"
             :class="{
                'border-t border-gray-200 dark:border-gray-600': label,
             }">
            <div class="flex items-center" :class="formatting == 'icon' && fieldValueIconPosition == 'right' ? 'flex-row-reverse' : ''">
                <PawIcon v-if="formatting == 'icon' && valueIconName" :class="valueColorClass ?? 'text-gray-400'" size="sm" >
                    {{ valueIconName }}
                </PawIcon>
                <span class="my-1.5"
                      :class="{
                        'prose-md': size === 'md',
                        'prose-sm': size === 'sm',
                        'prose-xs': size === 'xs',
                        'whitespace-pre-wrap': format === 'multiline',
                        'truncate': format !== 'multiline',
                        'text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition': action && !formatError,
                        [valueColorClass]: valueColorClass,
                      }"
                      @click="click"
                      v-text="this.inputValue(false)">
                
                </span>
            </div>

            <div class="flex flex-row shrink-0 items-center gap-1 py-1 ml-3" :class="{
                     'self-start': unitPosition === 'top',
                     'self-center': unitPosition === 'center',
                     'self-end': unitPosition === 'bottom'
                 }">
                <span v-if="unit.label"
                      class="mr-1 text-xs text-gray-400">{{ unit.label }}</span>
                <PawIcon v-if="unit.icon"
                         size="sm"
                         class="text-gray-400"
                         :outlined="unit.outlined === true">
                    {{ unit.icon }}
                </PawIcon>
                <PawIcon v-if="copy && !formatError"
                         size="sm"
                         @click="copyToClipboard"
                         class="text-gray-400 cursor-pointer">
                    copy_all
                </PawIcon>
                <PawIcon v-if="editAction && !formatError"
                         size="sm"
                         @click="editTrigger"
                         class="text-gray-400 cursor-pointer">
                    edit
                </PawIcon>
                <PawIcon v-if="deleteAction && !formatError"
                         size="sm"
                         @click="deleteTrigger"
                         class="text-gray-400 cursor-pointer">
                    delete
                </PawIcon>
                <PawIcon v-if="secret && !formatError"
                         size="sm"
                         class="text-gray-400 cursor-pointer"
                         @click="toggleSecret">
                    {{ show ? 'visibility_off' : 'visibility' }}
                </PawIcon>
                <PawIcon v-if="action && !formatError"
                         size="sm"
                         @click="click"
                         class="text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition">
                    {{ actionIcons[action] }}
                </PawIcon>
            </div>
        </div>

        <div v-if="message && success"
             class="prose-xs element-text italic text-success-500 dark:text-success-400 transition"
             v-html="message"></div>
        <div v-if="message && !success && !hideErrors"
             class="prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
             v-html="message"></div>
    </div>
</template>

<script>
import PawIcon from '../Icon/Icon.vue';
import creditCardType from 'credit-card-type';
import moment from 'moment';
import { actionIcons, defaultLanguageLocale, languagePreference, creditCardMinDigits, momentFormats } from '../../constants';
import { useI18n } from 'vue-i18n';

export default {
    name: 'PawLazyField',
    emits: ['clicked', 'editClicked', 'deleteClicked'],
    data() {
        return {
            hasSlot: null,
            formatting: null,
            inputOutline: false,
            fieldValueIconPosition: this.valueIconPosition,
            valueIconName: this.valueIcon,
            show: false,
            copying: false,
            message: null,
            success: null,
            formatError: null,
            actionIcons: actionIcons,
            unit: {
                label: this.unitLabel,
                icon: this.unitIcon,
                outlined: this.unitIconOutlined,
            },
            languagePreference: null,
        }
    },
    computed: {
        inputValue() {
            return reveal => {
                if (this.secret && !this.show && this.formatting !== 'card' && !reveal) {
                    return '••••••••';
                }

                if (this.value) {
                    return this.formatValue(this.value, reveal);
                }

                this.hasSlot = this.$slots.default && this.$slots.default().filter(o => o.type !== Comment && (typeof o.children === 'string' || o.children instanceof String ? o.children.trim() : o.children) !== '').length;
                if (this.hasSlot) {
                    return this.formatValue(this.$slots.default()[0].children.trim(), reveal);
                }

                return '';
            }
        }
    },
    created() {
        this.initFormat();
        // Set moment locale
        moment.locale(languagePreference);
    },
    watch: {
        value() {
            // Clear error/success message
            this.setMessage('');
        },
        format() {
            this.initFormat();
        },
    },
    props: {
        /* Top labels */
        label: {
            type: String
        },
        info: {
            type: String,
        },
        title: {
            type: String,
        },

        /* Field & icons */
        value: {
            type: String,
            default: '',
        },
        valueIcon: {
            type: String,
            default: ""
        },
        valueIconPosition: {
            type: String,
            default: "left",
        },
        valueColorClass: {
            type: String,
            default: ""
        },
        unitLabel: {
            type: String,
        },
        unitIcon: {
            type: String,
        },
        unitIconOutlined: {
            type: Boolean,
            default: false,
        },
        copy: {
            type: Boolean,
        },
        editAction: {
            type: Boolean,
        },
        deleteAction: {
            type: Boolean,
        },
        secret: {
            type: Boolean,
        },
        action: {
            type: String,
            validator: function(value) {
                return [undefined, 'mail', 'phone', 'link'].includes(value);
            },
        },
        size: {
            type: String,
            validator: function(value) {
                return ['sm', 'md'].includes(value);
            },
            default: 'md',
        },
        format: {
            type: String,
            validator: function(value) {
                return [undefined, 'mail', 'phone', 'number', 'card', 'iban', 'multiline', 'date', 'time', 'datetime', 'icon'].includes(value);
            },
        },
        link: {
            type: String,
        },
        insecure: {
            type: Boolean,
        },
        // Digits
        minDecimals: {
            type: Number,
            default: 2,
        },
        maxDecimals: {
            type: Number,
            default: 10,
        },

        // Position
        unitPosition: {
            type: String,
            validator: function(value) {
                return [undefined, 'top', 'center', 'bottom'].includes(value);
            },
        },

        /* Bottom elements */
        hideErrors: {
            type: Boolean,
            default: false,
        }
    },
    components: {
        PawIcon,
    },
    setup() {
        const {t} = useI18n({
            inheritLocale: true,
            useScope: 'local',
            messages: {
                "en": {
                    "clipboard": {
                        "error": "Unable to copy content to clipboard.",
                        "success": "Field content copied to clipboard."
                    },
                    "format": {
                        "creditCardDigitError": "Credit card must have minimum {minDigits} digits.",
                        "creditCardInvalid": "Invalid credit card number.",
                        "datetimeError": "{momentType} could not be parsed (closest format: {candidate}{overflow}{mismatch}).",
                        "emailError": "Not a valid email address.",
                        "mismatch": ", weekday mismatch",
                        "numberError": "Not a valid number.",
                        "overflow": ", overflown: {overflow}",
                        "phonePrefixError": "Error formatting phone number (no valid international prefix found).",
                        "phoneTooShort": "Error formatting phone number (too short)."
                    }
                },
                "de": {
                    "clipboard": {
                        "error": "Der Inhalt kann nicht in die Zwischenablage kopiert werden.",
                        "success": "Feldinhalt in die Zwischenablage kopiert."
                    },
                    "format": {
                        "creditCardDigitError": "Eine Kreditkarte muss mindestens {minDigits} Ziffern enthalten.",
                        "creditCardInvalid": "Ungültige Kreditkartennummer.",
                        "datetimeError": "{momentType} konnte nicht geparst werden (nächstliegende Format: {candidate}{overflow}{mismatch}).",
                        "emailError": "Ungültige E-Mail-Adresse.",
                        "mismatch": ", Wochentagsinkongruenz",
                        "numberError": "Ungültige Nummer.",
                        "overflow": ", überflogen: {overflow}",
                        "phonePrefixError": "Fehler beim Formatieren der Telefonnummer (keine gültige int. Vorwahl gefunden).",
                        "phoneTooShort": "Fehler beim Formatieren der Telefonnummer (zu kurz)."
                    }
                }
            },
        });

        return {t};
    },
    methods: {
        click() {
            if (this.action) {
                this.$emit('clicked');

                if (this.formatError) return;

                const value = this.inputValue(true);
                const url = this.link || value;

                switch (this.action) {
                    case 'mail':
                        window.location.href = `mailto:${value}`;
                        break;
                    case 'phone':
                        window.location.href = `tel:${value}`;
                        break;
                    case 'link':
                        window.open(url.indexOf('://') !== -1 ? url : `http${!this.insecure ? 's' : ''}://${url}`);
                        break;
                }
            }
        },

        toggleSecret() {
            this.show = !this.show;

        },

        copyToClipboard() {
            if(this.copying) return;

            this.copying = true;
            this.$copyText(this.inputValue(true)).then(
                () => this.setMessage(this.t('clipboard.success'), true),
                () => this.setMessage(this.t('clipboard.error'), false)
            );
        },

        editTrigger() {
            this.$emit('editClicked');
        },

        deleteTrigger() {
            this.$emit('deleteClicked');
        },

        setMessage(message, success) {
            this.message = message;
            this.success = success;

            if (this.copying) {
                setTimeout(() => {
                    this.copying = false;
                    this.message = null;
                }, 3000);
            }
        },

        initFormat() {
            // Clear error/success message
            this.setMessage('');

            // Set current format
            this.formatting = this.format;

            // Set format if action is phone or mail
            if (['phone', 'mail'].includes(this.action)) {
                this.formatting = this.action;
            }
        },

        formatValue(value, reveal) {
            const number = this.number(value);

            switch (this.formatting) {
                case 'phone':
                    return this.filterPhone(value, {
                        plus: true,
                        brackets: true,
                        space: true,
                        dash: false,
                        localPrefix: true,
                        areaCode: true,
                    });

                case 'mail':
                    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                        this.setMessage(this.t('format.emailError'));
                        this.formatError = true;
                    }
                    return value;

                case 'number':
                    if (isNaN(value) || isNaN(parseFloat(value))) {
                        this.setMessage(this.t('format.numberError'), false);
                        this.formatError = true;
                        return value;
                    }

                    return new Intl.NumberFormat(languagePreference, {
                        minimumFractionDigits: this.minDecimals,
                        maximumFractionDigits: this.maxDecimals,
                    }).format(value);

                case 'card':
                    if (number.length < creditCardMinDigits) {
                        this.setMessage(this.t('format.creditCardDigitError', {minDigits: `<b>${creditCardMinDigits}</b>`}), false);
                        this.formatError = true;
                        return value;
                    }

                    return this.formatCard(number, reveal);

                case 'iban':
                    return value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

                case 'date':
                    return this.parseDate(value, this.formatting);

                case 'time':
                    return this.parseDate(value, this.formatting);

                case 'datetime':
                    return this.parseDate(value, this.formatting);

                default:
                    return value;
            }
        },

        formatDate(momentObj, format, formatting) {
            switch (formatting) {
                case 'time':
                    this.unit.label = '24h';
                    this.unit.icon = 'schedule';
                    break;
                case 'date':
                    break;
                case 'datetime':
                    this.unit.label = this.unitLabel ?? '24h';
                    this.unit.icon = this.unitIcon ?? 'calendar_today';
                    break;
            }
            return momentObj.locale(languagePreference).format(format);
        },

        parseDate(value, formatting) {
            if (!value || !formatting) return value;

            let unusedParts = -1;
            let bestCandidate = null, bestFlags = null;

            for (const l in defaultLanguageLocale) {
                for (const i in momentFormats[formatting].formats) {
                    if (momentFormats[formatting].formats[i] === 'utc') continue;

                    const format = moment(value, momentFormats[formatting].formats[i], defaultLanguageLocale[l], true);
                    const flags = format.parsingFlags();

                    if (format.isValid() && !flags.weekdayMismatch) {
                        return this.formatDate(format, momentFormats[formatting].format, formatting);
                    }

                    const parts = flags.unusedInput.length + flags.unusedTokens.length;
                    if (parts < unusedParts || unusedParts === -1) {
                        unusedParts = parts;
                        bestCandidate = momentFormats[formatting].formats[i];
                        bestFlags = flags;
                    }
                }
            }

            // Check UTC datetime format
            if (formatting === 'datetime' && momentFormats[formatting].formats.includes('utc')) {
                const format = moment.utc(value, true);
                const flags = format.parsingFlags();

                if (format.isValid()) {
                    return this.formatDate(format, momentFormats[formatting].format, formatting);
                }

                const parts = flags.unusedInput.length + flags.unusedTokens.length;
                if (flags.overflow >= 0 && (parts < unusedParts || unusedParts === -1)) {
                    unusedParts = parts;
                    bestCandidate = 'UTC → YYYY-MM-DDTkk:mm:ss+ZZ';
                    bestFlags = flags;
                }
            }

            let overflow = null;
            if (bestFlags.overflow >= 0 && bestFlags.parsedDateParts.length > bestFlags.overflow - 1) {
                overflow = bestFlags.parsedDateParts[bestFlags.overflow];
            }
            this.setMessage(this.t('format.datetimeError', {
                momentType: `<b>${formatting.charAt(0).toUpperCase() + formatting.slice(1)}</b>`,
                candidate: `<b>${bestCandidate}</b>`,
                overflow: overflow ? this.t('format.overflow', {
                    overflow: `<b>${overflow}</b>`
                }): '',
                mismatch: bestFlags.weekdayMismatch ? this.t('format.mismatch', {
                    mismatch: `<b>${this.t('format.mismatch')}</b>`
                }): ''
            }), false);

            return value;
        },

        formatCard(number, reveal) {
            const card = creditCardType(number)[0];
            if (!card) {
                this.setMessage(this.t('format.creditCardInvalid'), false);
                this.formatError = true;
                return number;
            }

            let cardArr = number.toString().split('');
            card.gaps.forEach((gap, index) => cardArr.splice((gap + index), 0, ' '));

            if (reveal) return cardArr.join('');

            return `${card.niceType?.toUpperCase()} ${this.show ? cardArr.join('') : `•••• ${number.slice(-4)}`}`
        },

        standard(string) {
            const newString = string.match(/[0-9]{0,14}/g);
            if (newString === null) return '';
            return `+${newString.join('').substring(0, 15)}`;
        },

        number(string) {
            if (!string) return 0;
            const newString = string.match(/[0-9]+/g);
            if (newString === null) return 0;
            return `${newString.join('').substring(0)}`;
        },

        /**
         * Phone formatting method
         * @link https://github.com/evildvl/vue-e164
         * @param value String to be formatted as a phone number.
         * @param options Formatting options.
         * @returns Formatted phone according to given options.
         */
        filterPhone(value, options) {
            if (!value) return '';
            const pref = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)/ig;
            // Regular Expression: https://regex101.com/r/UZmJ2n/1
            const reg = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(0)*(\d{2,3})(\d{3})(\d{2})(\d{2})/ig;
            const plus = options.plus ? '+' : '';
            const brackets = options.brackets ? {l: '(', r: ')'} : {l: '', r: ''};
            const space = options.space ? ' ' : '';
            const dash = options.dash ? '-' : '';
            const e164 = this.standard(value);
            const ph = reg.exec(e164);
            const hasPref = pref.exec(e164);
            if (!ph && hasPref) {
                this.setMessage(this.t('format.phoneTooShort'), false);
                this.formatError = true;
                return value;
            }
            if (!ph && !hasPref) {
                this.setMessage(this.t('format.phonePrefixError'), false);
                this.formatError = true;
                return value;
            }
            const localPrefix = options.localPrefix && ph[3] ? `${brackets.l}${ph[3]}${brackets.r}` : '';
            const areaCode = options.areaCode ? ph[2] : '';
            return `${(options.areaCode) ? plus: ''}${areaCode}${(options.areaCode) ? space : ''}${localPrefix}${ph[4]}${space}${ph[5]}${space}${dash}${(options.dash) ? space : ''}${ph[6]}${space}${dash}${(options.dash) ? space : ''}${ph[7]}`;
        },
    },
}
</script>

<style></style>
