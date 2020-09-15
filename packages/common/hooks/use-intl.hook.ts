import { getIntl, getLanguage, switchLanguage } from "../intl";
import * as intl from 'react-intl-universal';

export function useIntl(module: string): intl.ReactIntlUniversal {
    return getIntl(module);
}

export function useLanguage(): [string, Function] {
    return [getLanguage(), switchLanguage];
}
