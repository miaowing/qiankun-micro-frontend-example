import { MapReducer } from "../../common/reducers/map.reducer";
import { UserModel } from "./user.model";

export class UserReducer extends MapReducer<UserModel> {
    constructor() {
        super('user', new UserModel());
    }
}
