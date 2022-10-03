import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    Component,
    useMemo,
} from "react";
import Home from "../../../views/Dashboard/Home";
import { useLocation } from 'react-router-dom';
import { getKeyName } from "../../../utils/handleRoutes";

const initPane =
{
    title: 'Home',
    key: '/dashboard',
    content: <Home />,
    closable: false,
    path: '/',
}

export default function Pane(props: any) {
    const { pathname, search } = useLocation();
    const [panes, setPanes] = useState(initPane);
    const { tabKey, title, element } = getKeyName(pathname);
    useEffect(() => {
    if ( panes.path === pathname) return;
        setPanes({
            title,
            content: element,
            key: tabKey,
            closable: tabKey !== "/",
            path: pathname,
        });
    }, [pathname])

    return (
        <div>
            {panes.content}
        </div>
    )
}
