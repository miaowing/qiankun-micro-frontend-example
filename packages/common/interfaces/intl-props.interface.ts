import * as intl from 'react-intl-universal';

export interface IntlProps {
    language?: string;
    intl?: intl.ReactIntlUniversal,
    switchLanguage?: Function;
}
