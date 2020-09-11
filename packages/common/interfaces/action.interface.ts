export interface Action<T extends any> {
    type: string;
    verb: string;
    value?: T;
    key?: string;
}
