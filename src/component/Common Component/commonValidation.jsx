const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phone_regex = /^\d{10}$/;
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const Email_Validation = (email) => {
    return email_regex.test(email);
}

export const Phone_Validation = (phone) =>{
    return phone_regex.test(phone)
}

export const Password_Validation = (password) => {
    return password_regex.test(password)
}

// Password1!
// Test@123
// Abcdef1#
// MyPass@2020
// SuperStrong$9