import React from 'react';
import { Layout } from 'antd';
import Header from '@/components/Header/Header';
import Sider from '@/components/Sider/Sider';
const { Content, Footer } = Layout;

interface State {
    collapsed: boolean
}

export default class Admin extends React.Component<any, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    public render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ height: '100%' }}>
                <Sider collapsed={collapsed}></Sider>
                <Layout className="site-layout">
                    <Header toggle={this.toggle.bind(this)} collapsed={collapsed}></Header>
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2020</Footer>
                </Layout>
            </Layout>
        )
    }
}
