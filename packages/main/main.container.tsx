import * as React from "react";
import { Layout } from "antd";
import styles from './main.container.m.less';
import { NavigatorContainer } from "./navigator.container";

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
                <NavigatorContainer/>
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
