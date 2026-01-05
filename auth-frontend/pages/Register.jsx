import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='auth-container'>
      <h2>Create Account</h2>

      <form>
        <input type="text" placeholder='Full name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />

        <button type='submit'>Register</button>

      </form>

      <p>
        Already have  an account? <Link to="/">Login</Link>
      </p>

    </div>
  )
}

export default Register