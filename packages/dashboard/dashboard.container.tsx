import * as React from "react";
import { State } from "./interfaces/state.interface";
import { useDispatch, useSelector } from "react-redux";
import { useMount } from "react-use";
import { DashboardAction } from "./redux/dashboard.action";
import { DashboardModel } from "./redux/dashboard.model";
import { useIntl, useLanguage } from "../common/hooks/use-intl.hook";

export function DashboardContainer() {
    const state = useSelector<State, { dashboard: DashboardModel }>(state => ({ dashboard: state.dashboard }));
    const dispatch = useDispatch();
    useMount(() => {
        dispatch(DashboardAction.getDashboardData());
    });
    const intl = useIntl('dashboard');
    const [language, switchLanguage] = useLanguage();

    return <>
        <span>{intl.get('title')}</span> {state.dashboard.test}

        <a onClick={() => switchLanguage()}>{language}</a>
    </>
}
