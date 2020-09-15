import { combineReducers } from "../../common/combine-reducers";
import { UserReducer } from "./user.reducer";

export const reducers = combineReducers({
    user: new UserReducer(),
});
