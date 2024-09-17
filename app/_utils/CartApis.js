import axiosClient from "./axiosClient";

export const addToCart = (payload) => axiosClient.post('/carts',payload) 
export const getUserCartItems = (email) => axiosClient.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`)
export const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`)