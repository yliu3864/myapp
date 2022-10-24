import React from "react";
import loadable from "@loadable/component";
import Loading from "../components/Stateless/Loading";
import { DashboardOutlined, EditOutlined, TableOutlined, PercentageOutlined, NotificationOutlined, ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons';

const MainLayout = loadable(() => import("../components/Layouts/MainLayout"), {
    fallback: <Loading />
})
const Home = loadable(() => import("../views/Dashboard/Home"), {
    fallback: <Loading />
})
const Coupon = loadable(() => import("../views/Coupon/Coupon"), {
    fallback: <Loading />
})
const Giftcard = loadable(() => import("../views/Giftcard/Giftcard"), {
    fallback: <Loading />
})
const Groupon = loadable(() => import("../views/Groupon/Groupon"), {
    fallback: <Loading />
})
const Auths = loadable(() => import("../views/Auths"), {
    fallback: <Loading />
})

const rootRouter = [
    {
        path: "/",
        name: "Dashboard",
        key: "/",
        element: <MainLayout />,
        children: [
            {
                index: false,
                name: "Dashboard",
                key: '/dashboard',
                path: "dashboard",
                icon: <DashboardOutlined />,
                element: <Home />
            },
            {
                index: false,
                path: "cards",
                name: "Cards",
                key: "/cards",
                icon: <EditOutlined />,
                hasChildren: true,
                children: [
                    {
                        index: false,
                        path: "giftcard",
                        name: "giftcard",
                        key: "/cards/giftcard",
                        element: <Giftcard />
                    },
                    {
                        index: false,
                        path: "groupon",
                        name: "groupon",
                        key: "/cards/groupon",
                        element: <Groupon />
                    },
                    {
                        index: false,
                        path: "coupon",
                        name: "coupon",
                        key: "/cards/coupon",
                        element: <Coupon />
                    },
                ]
            }
        ]
    },
    {
        index: false,
        path: "auths",
        label: "Auths",
        key: "/auths",
        clickable: false,
        children: [
            {
                index: false,
                clickable: false,
                path: "login",
                label: "Login",
                key: "/auths/login",
                element: <Auths />,
            },
            {
                index: false,
                clickable: false,
                path: "signup",
                label: "Signup",
                key: "/auths/signup",
                element: <Auths />,
            },
        ],
    },
]

export default rootRouter;