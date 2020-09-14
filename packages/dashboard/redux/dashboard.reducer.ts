import { MapReducer } from "../../common/reducers/map.reducer";
import { DashboardModel } from "./dashboard.model";

export class DashboardReducer extends MapReducer<DashboardModel> {
    constructor() {
        super('dashboard', new DashboardModel());
    }
}
