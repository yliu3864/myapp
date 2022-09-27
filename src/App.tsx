import React from 'react';
import { useRoutes } from "react-router-dom";
import './App.css';
import  rootRouter from './routers'
import "antd/dist/antd.css";

function App() {
  const routes = useRoutes(rootRouter);
  return (
    <div className="App">
      { routes }
    </div>
  );
}

export default App;
