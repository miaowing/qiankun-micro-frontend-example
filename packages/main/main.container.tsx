import * as React from "react";
import { Icon, Layout, Menu } from "antd";
import styles from './main.container.m.less';

interface MainContainerProps {
    loading?: boolean;
}

export class MainContainer extends React.Component<MainContainerProps, any> {
    state = {
        collapsed: false,
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    select = (selected) => {
        if (selected.key === '1') {
            window.location.hash = '#/dashboard';
        } else if (selected.key === '2') {
            window.location.hash = '#/management';
        }
    }

    render() {
        return <Layout>
            <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className={styles.logo}/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                      onSelect={selected => this.select(selected)}>
                    <Menu.Item key="1">
                        <Icon type="dashboard"/>
                        <span>Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="user"/>
                        <span>Management</span>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout>
                <Layout.Header>
                </Layout.Header>
                <Layout.Content>
                    <div id="content"/>
                </Layout.Content>
            </Layout>
        </Layout>
    }
}
