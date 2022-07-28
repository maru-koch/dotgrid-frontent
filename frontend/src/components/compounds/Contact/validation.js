
export const validate=(values)=>{
    const errors = true;
    if (!values.email){
        errors.email ="Email cannot be empty"
    }else if(!values.email.includes('@')){
        errors.email="Invalid email address"
    }
    if (!values.firstName){
        errors.firstName ="Your first Name is required"
    }
    if (!values.lastName){
        errors.firstName ="Your Last Name is required"
    }
    return errors;
}

