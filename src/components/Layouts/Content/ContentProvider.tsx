import React from 'react'
import { Layout } from "antd";
import Breadcrumbs from './Breadcrumbs';
import Pane from './Pane';
export default function ContentProvider() {
    const { Content, Header, Footer } = Layout;
    return (
       <Layout className="content-container">
      <Header className="content-header" style = {{ backgroundColor: 'white',padding: '0 20px',height:'auto'}}>
        <Breadcrumbs />
      </Header>
      <Content className="content-main">
        <Pane 

        />
      </Content>
      <Footer className="content-footer"></Footer>
    </Layout>
    )
}
