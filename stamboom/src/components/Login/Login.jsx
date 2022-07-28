import React from 'react'

function Login() {
  return (
    <div id='login'>
      <div className='form-header'>
        <h1>Login Form</h1>
      </div>
      <form>
        <label>Email</label>
        <input alt='email' type='email'/>
        <label>Wachtwoord</label>
        <input alt='password' type='password'/>
        <div className='remember'>
          <input type='checkbox'/>
          <label>Onthou mij</label>
        </div>
        <input type='submit' id='login-button' />
      </form>
    </div>
  )
}

export default Login