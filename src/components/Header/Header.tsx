import React from 'react';
import './Header.scss'
import { Layout, Avatar, Dropdown, Menu, Badge } from 'antd';
import { SettingFilled, LogoutOutlined, BellOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const { Header } = Layout;

interface Props {
    toggle: Function,
    collapsed: boolean
}

export default class LayoutHeader extends React.Component<Props, any> {
    toggle = () => {
        this.props.toggle()
    }

    public render() {
        const menu = (
            <Menu>
                <Menu.Item style={{ padding: '4px 40px' }} className="item" key="1">
                    <SettingFilled />设置
            </Menu.Item>
                <Menu.Divider />
                <Menu.Item style={{ padding: '4px 40px' }} className="item" key="2">
                    <LogoutOutlined />登出
            </Menu.Item>
            </Menu>
        );
        const { collapsed } = this.props;
        return (
            <Header className="header">
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })}
                {collapsed}
                <div className="right">
                    <Badge dot>
                        <BellOutlined style={{ fontSize: '18px' }} />
                    </Badge>
                    <Dropdown overlay={menu} >
                        <Avatar style={{ verticalAlign: 'middle', marginLeft: '20px' }} ></Avatar>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}