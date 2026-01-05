import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth-container'>
      <h2>Login</h2>

      <form>
        <input type='email' placeholder='Email'/>
        <input type="password" placeholder='Password'/>

        <button type='submit'>Submit</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Create Account</Link>
      </p>

      <p>
        <Link to="/forget-password">Forgot Password</Link>
      </p>


    </div>
  )
}

export default Login