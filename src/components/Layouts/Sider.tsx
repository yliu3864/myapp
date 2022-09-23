import { Layout } from 'antd'
import React, { useState } from 'react'

export default function Sider(props:any) {
        const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout.Sider
   collapsed={collapsed}
        >
             {props.children}
        </Layout.Sider>
    )
}
