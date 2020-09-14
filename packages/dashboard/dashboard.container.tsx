import * as React from "react";
// import { State } from "./interfaces/state.interface";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { DashboardAction } from "./redux/dashboard.action";
// import { DashboardModel } from "./redux/dashboard.model";

// export function DashboardContainer() {
//     const state = useSelector<State, { dashboard: DashboardModel }>(state => ({ dashboard: state.dashboard }));
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(DashboardAction.getDashboardData());
//     }, []);
//
//     return <>
//         <span>Dashboard</span> {state.dashboard.test}
//     </>
// }

export class DashboardContainer extends React.Component<any, any> {
    render() {
        return <>
            Dashboard
        </>;
    }
}
