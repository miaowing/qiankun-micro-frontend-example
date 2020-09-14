import * as React from 'react';
import { Icon, Menu } from "antd";

export function NavigatorContainer() {
    const select = (selected) => {
        if (selected.key === '1') {
            window.location.hash = '#/dashboard';
        } else if (selected.key === '2') {
            window.location.hash = '#/management';
        }
    }
    return <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                 onSelect={selected => select(selected)}>
        <Menu.Item key="1">
            <Icon type="dashboard"/>
            <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user"/>
            <span>Management</span>
        </Menu.Item>
    </Menu>;
}
