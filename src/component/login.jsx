/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Books/style.css';
import { useState } from 'react';
import {Email_Validation,Phone_Validation,Password_Validation} from './Common Component/commonValidation.jsx'


const Login = () => {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        let formIsValid = true;
        let newErrors = {
            email:"",
            password:"",
            };

        console.log(formData);
        if(!Email_Validation(formData.email))
        {
            formIsValid = false;
            newErrors.email="Email is invalid";
        }
        if(!Password_Validation(formData.password)) {
            formIsValid = false;
            newErrors.password = "Password is invalid";
        }
        setFormErrors(newErrors);
        if(formIsValid)
        {
            console.log(formData);
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }


    return (
        <>
        <h1 style={{textAlign:"center",marginTop:"2rem",marginBottom:"10px"}}>Login Page</h1>
         <div style={{height:"100vh",display:"flex",justifyContent:"center"}}>

            <Form className='form_Style'  autoComplete="off" onSubmit={handleSubmit}>

                <div>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" className='login_Style' 
                         isInvalid={!!formErrors.email} value={formData.email} onChange={(e)=>handleChange(e)} required/>
                        <Form.Control.Feedback type="invalid">
                                {formErrors.email}
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password *</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" className='login_Style' 
                        isInvalid={!!formErrors.password} value={formData.password} onChange={(e)=>handleChange(e)} required/>
                        <Form.Control.Feedback type="invalid">
                                {formErrors.password}
                            </Form.Control.Feedback>
                    </Form.Group>

                </div>
                    <p>Forgot Password ?</p>
                    <Button variant="primary" type="submit" className='login_Style' style={{width:"100%"}} >
                        Submit
                    </Button>
                <br />
                <div>
                    <p style={{textAlign:"center"}}>
                        New User ? 
                        <span> 
                            <a href="/singup" className='anchorStyle paddingNavbar' style={{color:"wheat",textDecoration:"underline"}}> Singup </a>
                        </span>
                    </p>
                </div>
            </Form>
            </div>
        </>
    )
}
export default Login;