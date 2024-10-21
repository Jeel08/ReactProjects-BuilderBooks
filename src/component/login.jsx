import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Books/style.css';

const Login = () => {
    return (
        <>
         <div style={{height:"100vh"}}>
            <Form style={{padding:"5rem",border:"2px dotted white",marginTop:"5rem"}}>
                <div style={{marginLeft:"25rem"}}>
                <h1>Login Page</h1>
                <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className='login_Style'/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password *</Form.Label>
                        <Form.Control type="password" placeholder="Password" className='login_Style' />
                    </Form.Group>

                    <p style={{}}>Forgot Password ?</p>
                    <Button variant="primary" type="submit" className='login_Style'>
                        Submit
                    </Button>
                </div>
                    <p style={{textAlign:"center"}}>
                        New User ? 
                        <span> 
                            <a href="/singup" className='anchorStyle paddingNavbar' style={{color:"wheat",textDecoration:"underline"}}>Singup</a>
                        </span>
                    </p>
            </Form>
            </div>
        </>
    )
}
export default Login;