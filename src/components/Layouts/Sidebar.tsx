import React from 'react'
import { Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { flattenRoutes } from '../../utils/handleRoutes';
import rootRouter from '../../routers';

export default function Sidebar() {
    const routesToMenuItems = () => {
        const routes = flattenRoutes(rootRouter[0].children);
        console.log("menus", routes);
        const menus = [];
        for(let i = 0; i < routes.length; i++) {
            if(routes[i].hasChildren){

            }
        }
        return routes
    }

    const routesToSubMenuItems = (route:any) => {
        
    }

    return (
        <Menu
            className="sidebar"
            mode="inline"
        >
            {/* {routesToMenuItems()} */}
        </Menu>
    )
}
