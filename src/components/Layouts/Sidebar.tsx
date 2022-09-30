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
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();
    const onSelect = (key:any) =>{
        navigate(key.key);
    }

    const routesToMenuItems = () => {
        const routes = flattenRoutes(rootRouter[0].children);
        console.log(routes);

        const menus = [];
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].hasChildren) {
                menus.push(routesToSubMenuItems(routes[i]));
                i += routes[i].children.length;
            } else {

                menus.push(<Menu.Item key={routes[i].key} icon={routes[i].icon}>{routes[i].name}</Menu.Item>);
            }
        }
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
    return (
        <Menu
            className="sidebar"
            mode="inline"
            theme='light'
            onSelect={onSelect}
        >
            {routesToMenuItems()}
        </Menu>
    )
}
