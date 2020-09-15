import * as intl from 'react-intl-universal';
import { resolve } from "path";
import * as Cookies from 'js-cookie';

const cache = new Map<string, intl.ReactIntlUniversal>();

const locales = {
    dashboard: {
        'en-US': require('../dashboard/locales/en-US'),
        'zh-CN': require('../dashboard/locales/zh-CN'),
    },
    management: {
        'en-US': require('../management/locales/en-US'),
        'zh-CN': require('../management/locales/zh-CN'),
    },
}

export function getIntl(module: string): intl.ReactIntlUniversal {
    if (cache.has(module)) {
        return cache.get(module) as intl.ReactIntlUniversal;
    }

    const intlInst = new intl.ReactIntlUniversal();

    const locale = {
        'en-US': locales[module]['en-US'].default,
        'zh-CN': locales[module]['zh-CN'].default,
    }
    intlInst.init({ currentLocale: getLanguage(), locales: locale });

    console.log(locale, intlInst);
    cache.set(module, intlInst);

    return cache.get(module) as intl.ReactIntlUniversal;
}

export function switchLanguage() {
    Cookies.set('lang', getLanguage() === 'zh-CN' ? 'en-US' : 'zh-CN');
    window.location.reload();
}

export function getLanguage() {
    let lang = Cookies.get('lang');
    if (!lang) {
        lang = window.navigator.language ?? 'zh-CN';
        lang = lang.includes('zh') ? 'zh-CN' : 'en-US';
    }
    return lang;
}
