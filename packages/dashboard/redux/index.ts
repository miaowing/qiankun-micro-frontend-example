import { combineReducers } from "../../common/combine-reducers";
import { DashboardReducer } from "./dashboard.reducer";

export const reducers = combineReducers({
    dashboard: new DashboardReducer(),
});
