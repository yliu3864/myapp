import React from 'react'
import { Menu } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { flattenRoutes } from '../../utils/handleRoutes';
import rootRouter from '../../routers';

export default function Sidebar() {
    const routesToMenuItems = () => {
        const routes = flattenRoutes(rootRouter[0].children);
        console.log(routes);

        const menus = [];
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].hasChildren) {
                menus.push(routesToSubMenuItems(routes[i]));
                console.log(routesToSubMenuItems(routes[i]));
                i += routes[i].children.length;
                console.log(i);

            } else {

                menus.push(<Menu.Item key={routes[i].key} icon={routes[i].icon}>{routes[i].name}</Menu.Item>);
            }
        }
        console.log(menus);
        return menus
    }

    const routesToSubMenuItems = (route: any) => {
        console.log("route", route);
        return (
            <Menu.SubMenu key={route.key}
                title={route.name}
                icon={route.icon}
            >
                {route.children.map((child: any) => <Menu.Item key={child.key}>{child.name} </Menu.Item>)}
            </Menu.SubMenu>

        )
    }

    function getItem(label?: any, key?: any, icon?: any, children?: any) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];

    routesToMenuItems();
    // return (
    //  <Menu theme='light' className="sidebar" defaultSelectedKeys={['1']} mode="inline" items={items} />
    // )
    return (
        <Menu
            className="sidebar"
            mode="inline"
            theme='light'
        >
            {routesToMenuItems()}
        </Menu>
    )
}
