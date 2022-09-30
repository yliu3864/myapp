import { Layout } from 'antd'
import React, { useState } from 'react'
import "../../styles/Sider.scss";

export default function Sider(props: any) {
  const [collapsed, setCollapsed] = useState(false);  
  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
      className="sider"
    theme='light'
    >
      {props.children}
    </Layout.Sider>
  )
}
