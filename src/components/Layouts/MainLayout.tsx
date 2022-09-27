import React from 'react'
import {Layout} from 'antd'
import Navbar from './Navbar'
import Sider from './Sider'
import Sidebar from './Sidebar'
import "../../styles/MainLayout.scss";
import ContentProvider from "./Content/ContentProvider";

export default function MainLayout() {
    return (
      <Layout className="main-layout">
          <Navbar />
          <Layout className="main-layout">
              <Sider>
                <Sidebar/>
            </Sider>
            <ContentProvider />
          </Layout>
      </Layout>
    )
}
