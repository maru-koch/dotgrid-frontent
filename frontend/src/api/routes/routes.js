
import { dotGridRequest } from './index'

export const auth={

// USER ROUTES
signUp: (formData)=>{
    const res = dotGridRequest.post('account/signup/', formData)
    return res.data
},

login: (formData)=>{
    const res = dotGridRequest.post('account/login/', formData)
    return res
},

subscribe: (formData)=>{
    const res = dotGridRequest.post('account/subscribe/', formData)
    return res.data
},

updateUser: (id)=>{
    const res = dotGridRequest.post(`user/${id}`)
    return res.data
},

removeUser: (id)=>{
    const res = dotGridRequest.post(`user/${id}`)
    return res.data
},

getAllUsers: ()=>{
    const res = dotGridRequest.post('user/all/')
    return res.data
},


// DEVICE ROUTES
addModel: (formData)=>{
    const res = dotGridRequest.post('device/add-model', formData)
    return res.data
},

requestDevice: (formData)=>{
    const res = dotGridRequest.post('device/request/device', formData)
    return res.data
},

assignDevice: (formData)=>{
    const res = dotGridRequest.post('account/signup/', formData)
    return res.data
},

retrieveDevice: ({id})=>{
     try{
        const res = dotGridRequest.post(`/device/${id}`)
        return res.data
    }catch(err){
        console.log(err)
    }
},

getAllDevices: ()=>{
    try{
        const res = dotGridRequest.post('/device/')
        return res.data
    }catch(err){
        console.log(err)
    }  
  },
  

// DATA ROUTES
generateData: (formData)=>{
    const res = dotGridRequest.post('vice/energy/generate', formData)
    return res.data
},

analyzeData: (formData)=>{
    const res = dotGridRequest.post('device/energy/analyze', formData)
    return res.data
},

clearData: (formData)=>{
    const res = dotGridRequest.post('device/energy/clear', formData)
    return res.data
},



}


export default auth