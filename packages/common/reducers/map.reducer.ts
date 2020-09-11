import { Action } from "../interfaces/action.interface";
import { ADD, DELETE, PUT } from "../constants/verb.constants";
import { set } from 'lodash';

export class MapReducer {
    constructor(
        private readonly type: string,
    ) {
    }

    public reduce<T extends any>(state = {}, action: Action<T>) {
        if (action.type !== this.type) {
            return state;
        }
        switch (action.verb) {
            case ADD:
            case PUT:
                set(state, action.key as string, action.value);
                break;
            case DELETE:
                set(state, action.key as string, undefined);
                break;
        }

        return { ...state };
    }
}
