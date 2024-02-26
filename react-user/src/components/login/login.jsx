import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './loginvalidation'
// import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
function Login() {
    const [values,setValues] = useState({
        email:'',
        password: ''
    })
    const [admin] = useState({
        email: 'admin@example.com',
        password: 'password123'
      });
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));

    }        
    const handleSubmit =(event) => {
        event.preventDefault();
        if (values.email === admin.email && values.password === admin.password) {
            // Redirect to the dashboard
            window.location.href = '/dashboard';
          } else {
            setErrors(Validation(values));
          }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='card' style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
                <h2>Sign-In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name='email'
                        onChange={handleInput} style={{ width: '100%', borderRadius: '5px', padding: '10px' }}/>
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name='password'
                        onChange={handleInput} style={{ width: '100%', borderRadius: '5px', padding: '10px' }}/>
                        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                    </div>
                    <Link to="/dash" className='btn btn-dark border w-100 rounded-0 text-decoration-none'>Login</Link>
                    <p>You are agreeing to our terms and policies</p>
                    <Link to="/signup" className='btn border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;