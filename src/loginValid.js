function Validation(values) {
    let error={}
    const email_pattern= /@/;
    const password_pattern=/^(?=.*[a-z])(?=.*[A-Z])/;

    if (values.email === " "){
        error.email=" email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="email did not match"
    }
    else{
        error.email=""
    }
    if (values.password_pattern === " "){
        error.passward=" passward should not be empty"
    }
    else if(!password_pattern.test(values.passward)){
        error.password="passward did not match"
    }
    else{
        error.password=""
    }
    return error

}
export default Validation;