/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './Books/style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Email_Validation,Phone_Validation,Password_Validation} from './Common Component/commonValidation.jsx'

const Singup = ()=> {
    
    const [formData,setFormData] = useState({
        fname:"",
        lname:"",
        email:"",
        phone: '',
        password:"",
        confirm_password:""
    });

    const [errors, setErrors] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:'',
        password:"",
        confirm_password:""
      });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        let formIsValid = true;
        let newErrors = {
            email:"",
            phone:'',
            password:"",
            confirm_password:"" };

        console.log(formData);
        if(!Email_Validation(formData.email))
        {
            formIsValid = false;
            newErrors.email="Email is invalid";
        } 
        if(!Phone_Validation(formData.phone)) {
            formIsValid = false;
            newErrors.phone = "Phone Number is invalid";
        }
        if(!Password_Validation(formData.password)) {
            formIsValid = false;
            newErrors.password = "Password must have One Number, One Special word, One Capital word, One Small word and Atleat 8 digit";
        }
        if(!Password_Validation(formData.confirm_password))
        {
            formIsValid = false;
            newErrors.confirm_password = "Confirm Password must have One Number, One Special word, One Capital word, One Small word and Atleat 8 digit"
        }
        if(formData.password !== formData.confirm_password) {
            formIsValid= false;
            newErrors.confirm_password = "Password and Confirm Password must be Same."
        }

        setErrors(newErrors);

        if(formIsValid)
        {
            console.log("Final Formdata",formData);
        }
    }

    return (
        <>
            <div>
            <p style={{borderLeft:"1px solid white" }}></p>
            <h2 style={{textAlign:"center",marginTop:"2rem",marginBottom:"10px"}}>Singup Page</h2>
            </div>

            <div style={{height:"100%",display:"flex",justifyContent:"center"}}>

                <Form className='form_Style' onSubmit={handleSubmit} autoComplete="off">

                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name : *</Form.Label>
                            <Form.Control type="text" placeholder="Enter a First Name" className='singup_Style' name='fname' required
                             value={formData.fname} onChange={(e)=>handleChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name : *</Form.Label>
                            <Form.Control type="text" placeholder="Enter a Last Name"  className='singup_Style' name='lname' required
                            value={formData.lname} onChange={(e)=>handleChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email Address : *</Form.Label>
                            <Form.Control type="email" placeholder="Enter an Email Address" className='singup_Style' name='email' required
                            isInvalid={!!errors.email} value={formData.email} onChange={(e)=>handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contact Number : *</Form.Label>
                            <Form.Control type="text" placeholder="Enter a Contact Number"  className='singup_Style' name='phone' required
                            isInvalid={!!errors.phone} value={formData.phone} onChange={(e)=>handleChange(e)} />
                            <i>Only Number</i>
                            <Form.Control.Feedback type="invalid">
                                {errors.phone}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password :  *</Form.Label>
                            <Form.Control type="password" placeholder="Enter a Password"  className='singup_Style' name='password' required
                             isInvalid={!!errors.password} value={formData.password} onChange={(e)=>handleChange(e)} />
                             <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password :  *</Form.Label>
                            <Form.Control type="password" placeholder="Enter a Confirm Password"  className='singup_Style' name='confirm_password' required
                            isInvalid={!!errors.confirm_password} value={formData.confirm_password} onChange={(e)=>handleChange(e)}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.confirm_password}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div style={{display:"flex",gap:"2rem",justifyContent:"center"}}>
                        <Button variant="success" type='submit'>Submit</Button>
                        <Button  variant="danger" >Cancle</Button>
                    </div>

                    <br/>

                    <div>
                        <p style={{textAlign:"center"}}>
                            Already Have an Account?
                            <span> 
                            <a href="/login" className='anchorStyle paddingNavbar' style={{color:"wheat",textDecoration:"underline"}}> Login </a>
                            </span>
                        </p>
                    </div>

                </Form>
            </div>


        </>
    )
}
export default Singup;