import { Layout } from 'antd'
import React, { useState } from 'react'

export default function Sider(props:any) {
        const [collapsed, setCollapsed] = useState(false);
        console.log(props.children);
    return (
        <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
        >
             {props.children}
        </Layout.Sider>
    )
}
