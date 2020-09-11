declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}
declare var __webpack_public_path__: string;
declare var __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
declare var __POWERED_BY_QIANKUN__: boolean;

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
}

declare module '*.m.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.m.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.m.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.m.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
