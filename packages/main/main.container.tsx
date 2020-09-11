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

    render() {
        return <Layout>
            <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className={styles.logo}/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload"/>
                        <span>nav 3</span>
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
