import * as React from 'react';
import { getIntl, getLanguage, switchLanguage } from "../intl";


export function Intl(module: string): ClassDecorator {
    return target => {
        return initIntl(target, module) as any;
    }
}

function initIntl(Component: any, module: string) {
    return (props: any) => {
        return <Component
            {...props}
            intl={getIntl(module)}
            language={getLanguage()}
            switchLanguage={switchLanguage}
        />
    }
}
