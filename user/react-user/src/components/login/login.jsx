// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Validation from './loginvalidation'
// import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css'

// function Login() {
//     const [values,setValues] = useState({
//         email:'',
//         password: ''
//     })
//     const [admin] = useState({
//         email: 'admin@example.com',
//         password: 'password123'
//       });
//     const [errors, setErrors] = useState({})
//     const handleInput = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));

//     }        
//     const handleSubmit =(event) => {
//         event.preventDefault();
//         if (values.email === admin.email && values.password === admin.password) {
//             // Redirect to the dashboard
//             window.location.href = '/dashboard';
//           } else {
//             setErrors(Validation(values));
//           }
//     }

//     return (
//         <div className='d-flex justify-content-center align-items-center vh-100'>
//             <div  style={{"background-color": "white"}} className='bg-white p-3 rounded w-25 card'>
//                 <h2>Sign-In</h2>
//                 <form action="" onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor="email"><strong>Email</strong></label>
//                         <input type="email" placeholder="Enter Email" name='email'
//                         onChange={handleInput} className='form-control rounded-0'/>
//                         {errors.email && <span className='text-danger'>{errors.email}</span>}
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="password"><strong>Password</strong></label>
//                         <input type="password" placeholder="Enter Password" name='password'
//                         onChange={handleInput} className='form-control rounded-0'/>
//                         {errors.password && <span className='text-danger'>{errors.password}</span>}
//                     </div>
//                     {/* <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button> */}
//                     <Link to="/All" className='btn btn-dark border w-100 rounded-0 text-decoration-none'>Login</Link>
//                     {/* <button type='submit' onClick={() => { window.location.href = "/All" }} className='btn border w-100 bg-light rounded-0 text-decoration-none'>Login</button> */}

//                     <p>You are agreeing to our terms and poicies</p>
//                     <Link to="/signup" className='btn border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login;