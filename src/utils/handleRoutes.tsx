import React from 'react'

export const flattenRoutes = (arr:any) =>
  arr.reduce(function(prev:any, item:any) {
    if(Array.isArray(item.children)){
        prev.push(item);
    }
    return prev.concat(
      Array.isArray(item.children) ? flattenRoutes(item.children) : item
    );
  }, []);