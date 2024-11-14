import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, theme } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

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

const items: MenuItem[] = [
    {
        label: '栏目 1',
        key: '/page1',
        icon: <PieChartOutlined />,
    },
    {
        label: '栏目 2',
        key: '/page2',
        icon: <DesktopOutlined />,
    },
    {
        label: '栏目 3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目 3-1',
                key: '/page3/page301',
            },
            {
                label: '栏目 3-2',
                key: '/page3/page302',
            },
            {
                label: '栏目 3-3',
                key: '/page3/page303',
            },
        ],
    },
    {
        label: '栏目 4',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目 4-1',
                key: '/page4/page401',
            },
            {
                label: '栏目 4-2',
                key: '/page4/page402',
            },
        ],
    },
    {
        label: '栏目 5',
        key: '/page5',
        icon: <FileOutlined />,
    }
];

const Comp: React.FC = () => {
    const navigateTo = useNavigate();
    const currentRoute = useLocation();
    console.log('--------', currentRoute);
    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    const menuClick = (e: { key: string }) => {
        console.log(e.key);

        // 路由跳转，编程式导航，利用一个hook
        navigateTo(e.key);
    };

    let firstOpenKeys: string = '';
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname;
    }

    // 确保 items 数组已定义并且不为空
    if (items && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            if (items[i]?.children?.length > 0 && items[i]?.children.find(findKey)) {
                firstOpenKeys = items[i]?.key as string;
                break;
            }
        }
    }

    const [openKeys, setOpenKeys] = useState<string[]>(['']);
    const handleOpenChange = (keys: string[]) => {
        console.log(keys);
        // 修改成最后一项，也就是当前展开的最后一项
        setOpenKeys([keys[keys.length - 1]]);
    };

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            // 某项菜单展开的时候触发
            onOpenChange={handleOpenChange}
            // 当前菜单展开项的key数组
            openKeys={openKeys}
        />
    )

}

export default Comp;