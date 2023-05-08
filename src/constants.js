export const actionIcons = {
    'mail': 'mail',
    'phone': 'ring_volume',
    'link': 'link',
};
export const creditCardMinDigits = 13;

/* Default language locale, used for the date & time format recognition */
export const defaultLanguageLocale = ['en', 'de'];

/* Set preferred language from user's browser settings */
export const languagePreference = window.navigator.userLanguage || window.navigator.language || defaultLanguageLocale[0];

/**
 * Date & time formatting.
 * @formats: recognised input formats
 * @format: parsing format to be output
 */
export const momentFormats = {
    date: {
        /* Possible input formats */
        formats: [
                                  /* German */                  /* English */
            'YYYY M D',           // 2022 3 28
            'D M YYYY',           // 28 3 2022
            'D M YY',             // 28 3 22
            'YYYY-M-D',           // 2022-3-28
            'D-M-YYYY',           // 28-3-2022
            'D-M-YY',             // 28-3-22
            'YYYY.M.D',           // 2022-3-28
            'D.M.YYYY',           // 28-3-2022
            'D.M.YY',             // 28-3-22
            'dddd, D M YYYY',     // Montag, 28 3 2022          Monday, 28 3 2022
            'dddd, D-M-YYYY',     // Montag, 28-3-2022          Monday, 28-3-2022
            'dddd, D.M.YYYY',     // Montag, 28.3.2022          Monday, 28.3.2022
            'Do MMMM YYYY',       // 28. März 2022              28th March 2022
            'dddd, Do MMMM YYYY', // Montag, 28. März 2022      Monday, 28th March 2022
        ],
        /* Output format */
        format: 'dddd, l',        // Montag, 28.3.2022          Monday, 3/28/2022
    },
    time: {
        /* Possible input formats */
        formats: [
            'kk:mm:ss', // 17:14:11
            'kk:mm',    // 17:14
            'x',        // 1410715640579 (UNIX time)
        ],
        /* Output format */
        format: 'kk:mm',// 17:14
    },
    datetime: {
        /* Possible input formats */
        formats: [
            /* With seconds */             /* German */                         /* English */
            'YYYY M D kk:mm:ss',           // 2022 3 28 17:14:11
            'D M YYYY kk:mm:ss',           // 28 3 2022 17:14:11
            'D M YY kk:mm:ss',             // 28 3 22 17:14:11
            'YYYY-M-D kk:mm:ss',           // 2022-3-28 17:14:11
            'D-M-YYYY kk:mm:ss',           // 28-3-2022 17:14:11
            'D-M-YY kk:mm:ss',             // 28-3-22 17:14:11
            'YYYY.M.D kk:mm:ss',           // 2022-3-28 17:14:11
            'D.M.YYYY kk:mm:ss',           // 28-3-2022 17:14:11
            'D.M.YY kk:mm:ss',             // 28-3-22 17:14:11
            'dddd, D M YYYY kk:mm:ss',     // Montag, 28 3 2022 17:14:11        Monday, 28 3 2022 17:14:11
            'dddd, D-M-YYYY kk:mm:ss',     // Montag, 28-3-2022 17:14:11        Monday, 28-3-2022 17:14:11
            'dddd, D.M.YYYY kk:mm:ss',     // Montag, 28.3.2022 17:14:11        Monday, 28.3.2022 17:14:11
            'Do MMMM YYYY kk:mm:ss',       // 28. März 2022 17:14:11            28th March 2022 17:14:11
            'dddd, Do MMMM YYYY kk:mm:ss', // Montag, 28. März 2022 17:14:11    Monday, 28th March 2022 17:14:11
            /* Without seconds */
            'YYYY M D kk:mm',           // 2022 3 28 17:14
            'D M YYYY kk:mm',           // 28 3 2022 17:14
            'D M YY kk:mm',             // 28 3 22 17:14
            'YYYY-M-D kk:mm',           // 2022-3-28 17:14
            'D-M-YYYY kk:mm',           // 28-3-2022 17:14
            'D-M-YY kk:mm',             // 28-3-22 17:14
            'YYYY.M.D kk:mm',           // 2022-3-28 17:14
            'D.M.YYYY kk:mm',           // 28-3-2022 17:14
            'D.M.YY kk:mm',             // 28-3-22 17:14
            'dddd, D M YYYY kk:mm',     // Montag, 28 3 2022 17:14              Monday, 28 3 2022 17:14
            'dddd, D-M-YYYY kk:mm',     // Montag, 28-3-2022 17:14              Monday, 28-3-2022 17:14
            'dddd, D.M.YYYY kk:mm',     // Montag, 28.3.2022 17:14              Monday, 28.3.2022 17:14
            'Do MMMM YYYY kk:mm',       // 28. März 2022 17:14                  28th March 2022 17:14
            'dddd, Do MMMM YYYY kk:mm', // Montag, 28. März 2022 17:14          Monday, 28th March 2022 17:14
            /* UTC datetime format */
            'utc'                       // 2022-03-28T17:14:11+01:00
        ],
        /* Output format */
        format: 'dddd, l kk:mm:ss',     // Montag, 28.3.2022 17:14:11           Monday, 3/28/2022 17:14:11
    },
};
