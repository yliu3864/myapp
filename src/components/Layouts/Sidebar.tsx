import React from 'react'
import { Menu } from "antd";

export default function Sidebar() {
    const items2 = [].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            label: `subnav ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
                height: '100%',
                borderRight: 0,
            }}
            items={items2}
        />
    )
}
