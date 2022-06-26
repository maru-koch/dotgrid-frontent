

const validate=(values)=>{
    const errors = {}
    if (!values.first_name){
        errors.first_name = "first name is required"
    }
    if (!values.last_name){
         errors.last_name = "last name is required"
    }
    if (!values.email){
        errors.email = "email is required"

    }else if (!/\s+@\s+\.\s+/.test(values.email)){
        errors.email = "email is invalid"
    }
    if (!values.password){
        errors.password = "Password is required"
    }else if (values.password.length < 6){
        errors.password = "Password must be at least 6 characters"
    }

    return errors
}

export default validate