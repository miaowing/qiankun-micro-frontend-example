import * as React from "react";
import { Connect } from "../common/decorators/connect.decorator";
import { State } from "./interfaces/state.interface";
import { bindActionCreators } from "../common/bind-action-creators";
import { DashboardAction } from "./actions/dashboard.action";

@Connect(
    (state: State) => ({ dashboard: state.dashboard }),
    dispatch => ({
        actions: {
            dashboard: bindActionCreators(DashboardAction, dispatch),
        }
    })
)
export class DashboardContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.actions.dashboard.getDashboardData();
    }

    render() {
        console.log(this.props.dashboard);
        return <>
            Dashboard
        </>
    }
}
