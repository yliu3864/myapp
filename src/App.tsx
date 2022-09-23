import React from 'react';
import { useRoutes } from "react-router-dom";
import './App.css';
import  rootRouter from './routers'

function App() {
  const routes = useRoutes(rootRouter);
  return (
    <div className="App">
      { routes }
    </div>
  );
}

export default App;
