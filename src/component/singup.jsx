import './Books/style.css';
import Button from 'react-bootstrap/Button';

const Singup = ()=> {
    return (
        <>
        <div style={{height:"100vh"}}>

        <h2 style={{textAlign:"center",marginTop:"5rem"}}>Singup Page</h2>
        <div  className='singup_Style brdrRadius'>

            <div style={{display:"flex",gap:"5rem"}}>

                <div>
                    <label htmlFor="">First Name : </label>
                    <input type="text" 
                            name='fname'
                            title='First Name'
                            placeholder='Enter a First Name'
                            className='brdrRadius'
                    />
                </div>

                <div>
                    <label htmlFor="">Last Name : </label>
                    <input type="text" 
                            name='lname'
                            title='Last Name'
                            placeholder='Enter a Last Name'
                            className='brdrRadius'
                    />
                </div>
            </div>

            <div style={{display:"flex",gap:"5rem"}}>
                <div>
                    <label htmlFor="">Email Address : </label>
                    <input type="text" 
                            name='email'
                            title='Email'
                            placeholder='Enter an Email Address'
                            className='brdrRadius'
                            />
                </div>

                <div>
                    <label htmlFor="">Contact Number : </label>
                    <input type="text" 
                            name='number'
                            title='number'
                            placeholder='Enter a Number'
                            className='brdrRadius'
                            />
                </div>

            </div>

            <div style={{display:"flex",gap:"5rem"}}>
                <div>
                    <label htmlFor="">Password : </label>
                    <input type="text" 
                            name='password'
                            title='password'
                            placeholder='Enter a Password'
                            className='brdrRadius'
                    />
                </div>

                <div>
                    <label htmlFor="">Confirm Password : </label>
                    <input type="text" 
                            name='confirm_password'
                            title='Confirm Password'
                            placeholder='Enter a Confirm Password'
                            className='brdrRadius'
                    />
                </div>
            </div>

            <div style={{display:"flex",gap:"2rem"}}>
                <Button variant="success" >Submit</Button>
                <Button  variant="danger" >Cancle</Button>
            </div>
            
            <p style={{textAlign:"center"}}>
                        Already Have an Account?
                        <span> 
                            <a href="/login" className='anchorStyle paddingNavbar' style={{color:"wheat",textDecoration:"underline"}}>Login</a>
                        </span>
                    </p>

        </div>
        </div>

        </>
    )
}
export default Singup;