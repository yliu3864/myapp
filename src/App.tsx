import React from 'react';
import { useRoutes } from "react-router-dom";
import './App.css';
import  rootRouter from './routers'
import 'antd/dist/antd.min.css'
import { useTranslation } from "react-i18next";
import zh_CN from "antd/es/locale/zh_CN";
import en_US from "antd/es/locale/en_US";
import { ConfigProvider, Empty } from "antd";

function App() {
  const routes = useRoutes(rootRouter);
  const locale = localStorage.getItem("lang") === "zh" ? zh_CN : en_US;
  return (
    <div className="App">
      {/* <ConfigProvider
      locale={locale}> */}

      { routes }
      {/* </ConfigProvider> */}
    </div>
  );
}

export default App;
