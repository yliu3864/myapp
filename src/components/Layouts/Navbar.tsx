import React from 'react'
import { Layout, Space, Dropdown, Menu, Tag, Switch, Badge } from 'antd'
import { SettingOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import "../../styles/Navbar.scss"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();

    const menuItems = [
        {
            key: "/settings",
            icon: <SettingOutlined />,
            label: "Settings",
        },
        {
            key: "/login",
            icon: <LoginOutlined />,
            label: "Login",
        }
    ]
    return (
        <Layout.Header
            className="header"
        >
            <div
                className="header-left"
                role="logo"
                onClick={() => navigate('/')}>
                YanGe
            </div>
            <div className="header-right">
                <Dropdown arrow overlay={<Menu items={menuItems} />}>
                    <Space direction="horizontal" style={{ cursor: "pointer" }}>
                        <UserOutlined className="user-icon" />
                    </Space>
                </Dropdown>
            </div>
        </Layout.Header>
    )
}
