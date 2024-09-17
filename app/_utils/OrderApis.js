import axiosClient from "./axiosClient";

export const createOrder = (data) => axiosClient.post('/orders',data)