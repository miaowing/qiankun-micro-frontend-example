import { Dispatch } from "redux";
import { State } from "../interfaces/state.interface";
import { ADD } from "../../common/constants/verb.constants";

export class UserAction {
    public static getUser() {
        return (dispatch: Dispatch, state: State) => {
            dispatch({ type: 'user', verb: ADD, key: 'name', value: 'tt' });
        }
    }
}
