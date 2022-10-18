import apiClient from "../../utils/request";
import React from 'react'
import axiosInstance from "../../utils/request";


export function getAllCards(type: string) {
  return axiosInstance.request({
    method: "GET",
    url: '/api/public/app/product-page/' +type ,

  })
}

