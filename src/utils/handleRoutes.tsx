import React from 'react'
import routes from "../routers/index";

export const flattenRoutes = (arr:any) =>
  arr.reduce(function(prev:any, item:any) {
    if(Array.isArray(item.children)){
        prev.push(item);
    }
    return prev.concat(
      Array.isArray(item.children) ? flattenRoutes(item.children) : item
    );
  }, []);
  
  export const getKeyName = (path:string) =>{
    
    const curRoute = flattenRoutes(routes)
    .filter((item:any)=>!item.index)
    .filter((item:any)=>item.key?.indexOf(path) !==-1);
    
     const { name, key, element } = curRoute[0];
    return { title: name, tabKey: key, element };
  }