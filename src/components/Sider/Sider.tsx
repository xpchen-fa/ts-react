import React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import menuData from './menu';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';

import './Sider.scss'
const { SubMenu } = Menu;
const { Sider } = Layout;

interface Props extends RouteComponentProps{
    collapsed: boolean
}
interface State {
    defaultSelectedKeys: string[],
    openKeys: string[]
}

type menuType = {
    children?: menuType[];
    icon?: string
    key: string;
    name: string;
    path: string;
}

class MenuSider extends React.Component<Props, State> {
    private rootSubmenuKeys: string[] = [];
    private iconComponents: { [key: string]: any } = {
        video: VideoCameraOutlined,
        user: UserOutlined,
        upload: UploadOutlined
    };
    constructor(props: any) {
        super(props)
        this.state = {
            openKeys: this.setDefaultOpenKeys(),
            defaultSelectedKeys: this.setDefaultSelectedKeys()
        }
    }
    public UNSAFE_componentWillMount() {
        menuData.forEach((item) => {
            this.rootSubmenuKeys.push(item.key);
        });
    }
    setDefaultSelectedKeys = () => {
        const { pathname } = this.props.location;
        const keys = pathname.split("/");
        if (keys.length > 3) {
            return [keys[3]];
        }
        if (keys.length === 3) {
            return [keys[2]];
        }
        return ['']
    }
    setDefaultOpenKeys = () => {
        const { pathname } = this.props.location;
        const keys = pathname.split("/");
        return [keys[2]];
    }


    private onOpenChange(openKeys: string[]) {
        this.setState({
            openKeys
        })
        // const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1) || "";
        // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        //     this.setState({ openKeys });
        // } else {
        //     this.setState({
        //         openKeys: latestOpenKey ? [latestOpenKey] : [],
        //     });
        // }
    }

    private renderIcon(icon:any) {
        const Icon = this.iconComponents[icon];
        return <Icon />;
    }

    public renderSub = (data: menuType[], parentPath: string): any => {
        const menu = data.map((item: menuType) => {
            if (!item.children?.length) {
                return (
                    <Menu.Item key={item.key} icon={item.icon ? this.renderIcon(item.icon) : ''}>
                        <NavLink to={`${parentPath}/${item.path}`}>
                            <span>{item.name}</span>
                        </NavLink>
                    </Menu.Item>
                );
            } else {
                return (
                    <SubMenu key={item.key} icon={item.icon ? this.renderIcon(item.icon) : ''} title={<span>{item.name}</span>}>
                        {this.renderSub(item.children, `${parentPath}/${item.path}`)}
                    </SubMenu>
                )
            }
        });
        return menu;
    }

    public render() {
        const { openKeys, defaultSelectedKeys } = this.state;
        const { collapsed, history } = this.props;
        return (
            <Sider className="site-layout-background" trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" onClick={() => history.push('/admin/dashboard')} ></div>
                <Menu
                    theme="dark"
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                    openKeys={openKeys}
                    defaultSelectedKeys={defaultSelectedKeys}
                    onOpenChange={(key) => this.onOpenChange(key)}
                >
                    {this.renderSub(menuData, '/admin')}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(MenuSider);