
export const validate=(values)=>{
    const errors = {email:false, firstName:false, lastName:false};
    if (!values.email){
        errors.email = true
    }else if(!values.email.includes('@')){
        errors.email=true
    }
    if (!values.firstName){
        errors.firstName =true
    }
    if (!values.lastName){
        errors.firstName =true
    }
    return errors;
}

