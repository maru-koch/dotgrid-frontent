
export const validate=(values)=>{
    // if the inputs are empty error is true else false
    const errors = {email:true, firstName:true, lastName:true, phoneNumber:true};
    if (values.email && values.email.includes('@')){
        errors.email = false}
    if (values.firstName){
        errors.firstName =false
    }
     if (values.lastName){
        errors.lastName =false
    }
     if (values.phoneNumber){
        errors.phoneNumber =false
    }
    return errors;
}

