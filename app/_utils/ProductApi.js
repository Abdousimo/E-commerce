import axiosClient from "./axiosClient";

export const getLatestProducts = () => axiosClient.get('/products?populate=*')
export const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`)
export const getProductByCategory = (category)=> axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)