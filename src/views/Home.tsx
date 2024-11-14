import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MainMenu from '../components/MainMenu';


const { Header, Content, Footer, Sider } = Layout;

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Option 1', '/page1', <PieChartOutlined />),
//     getItem('Option 2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    // const navigateTo = useNavigate();
    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    // const menuClick = (e: { key: string }) => {
    //     console.log(e.key);

    //     // 路由跳转，编程式导航，利用一个hook
    //     navigateTo(e.key);
    // };

    // const [openKeys, setOpenKeys] = useState<string[]>(['']);
    // const handleOpenChange = (keys: string[]) => {
    //     console.log(keys);
    //     // 修改成最后一项，也就是当前展开的最后一项
    //     setOpenKeys([keys[keys.length - 1]]);
    // };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左边侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <MainMenu />

            </Sider>
            {/* 右边内容 */}
            <Layout>
                {/* 右边头部 */}
                <Header style={{ padding: 0, paddingLeft: "16px" }} >
                    <Breadcrumb style={{ lineHeight: '64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header >
                {/* 右边内容-白色底盒子 */}
                <Content style={{ margin: '16px 16px 0' }} className='site-layout-background'>
                    <Outlet />
                    {/* <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Bill is a cat.
                    </div> */}
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default View;