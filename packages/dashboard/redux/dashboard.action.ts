import { Dispatch } from "redux";
import { State } from "../interfaces/state.interface";
import { ADD } from "../../common/constants/verb.constants";

export class DashboardAction {
    public static getDashboardData() {
        return (dispatch: Dispatch, state: State) => {
            dispatch({ type: 'dashboard', verb: ADD, key: 'test', value: 123 });
        }
    }
}
