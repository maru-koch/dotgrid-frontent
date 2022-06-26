import {api} from './index'

export const setAuthorizationHeader = (token) => {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  };

export const signUp= async (formData)=>{
    const res = await api.post('account/signup/')
    return res.data
}

export const login = async (formData)=>{
    const res = await api.post('account/signup/')
    return res.data
}

export const addModel= async (formData)=>{
    const res = await api.post('account/signup/')
    return res.data
}

export const requestDevice = async (formData)=>{
    const res = await api.post('account/signup/')
    return res.data
}

export const assignDevice = async (formData)=>{
    const res = await api.post('account/signup/')
    return res.data
}

export const generateData = async (formData)=>{
    const res = await api.post('account/signup/')
    return res.data
}

export const analyzeData = async ({device, start, end, duration})=>{
    const res = await api.post('/device/analytics/all')
    return res.data
}

export const retrieveDevice = async ({id})=>{
     try{
        const res = await api.post(`/device/${id}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const getAllDevices = async ()=>{
    try{
        const res = await api.post('/device/')
        return res.data
    }catch(err){
        console.log(err)
    }
    
}