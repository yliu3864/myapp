import React from 'react'
import {Layout} from 'antd'
import Navbar from './Navbar'
import Sider from './Sider'
import Sidebar from './Sidebar'

export default function MainLayout() {
    return (
      <Layout>
          <Navbar />
          <Layout>
              <Sider>
                <Sidebar/>
            </Sider>
          </Layout>
      </Layout>
    )
}
