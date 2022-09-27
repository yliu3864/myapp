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
        const menus = [];
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].hasChildren) {

            }
        }
        return routes
    }

    const routesToSubMenuItems = (route: any) => {

    }
    function getItem(label?:any, key?:any, icon?:any, children?:any) {
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


    return (
     <Menu theme='light' className="sidebar" defaultSelectedKeys={['1']} mode="inline" items={items} />
    )
}
