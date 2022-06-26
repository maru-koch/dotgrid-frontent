import axios from 'axios'

 export const api = axios.create({
    baseURL: "https://josla.herokuapp.com/api/",
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export const addAuthentication=(token)=>{
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  export const removeAuthentication=(token)=>{
    api.defaults.headers.Authorization.remove = `Bearer ${token}`;
  }

