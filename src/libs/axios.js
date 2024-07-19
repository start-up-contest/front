import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 8000,
});

axiosClient?.interceptors.request.use((config) => {
  const token = "eyJraWQiOiI5IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdWQiOiJkcC1kdHgtMDA2Iiwic3ViIjoiejdSaWZXS2lSTDY3dTBzaV9mLVhadyIsInVpZCI6Ino3UmlmV0tpUkw2N3Uwc2lfZi1YWnciLCJyb2xlIjoiVVNFUiIsInByb3ZpZGVyIjoiUEhPTkVfT1RQIiwiZXhwIjoxNzE4OTc0NzQ4LCJpYXQiOjE3MTg5NzExNDgsImVtYWlsIjpudWxsfQ.JfUvOHzKQGqRU7wEsYCHgccMD6S7CuuzJf7_vYqksChwNH6kg5wOy9uvNEKmI75A6QgxaUnT7AfGYxCgOe9js8wGPrAd9PRqPfWxPkPSShzClDEZkZuRWICzuX62eaqxqor8UCAE_s4QFNdAr8ssranMfRiZQDBoUO1VjLIMon8-KO-fUdpf8CmiFDWs-uEhct_WPH_Cn7wS7RnPXyiW1rhqOFpTD0Tc2_p6l4ZviLsdLBgJYdOhfIlhGbs25SVKg8UaNnnRV8EHkbawWM737szWKiBHRtDBBmLUMQuL83Xk6pW1a0v8HND46t7KVwhhG2FRMC1Ccqtq-Vab8R1CBQ";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
