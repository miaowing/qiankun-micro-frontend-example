import * as React from "react";
import { State } from "./interfaces/state.interface";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DashboardAction } from "./redux/dashboard.action";
import { DashboardModel } from "./redux/dashboard.model";

export function ManagementContainer() {
    const state = useSelector<State, { dashboard: DashboardModel }>(state => ({ dashboard: state.dashboard }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(DashboardAction.getDashboardData());
    }, []);

    return <>
        Management {state.dashboard.test}
    </>
}
