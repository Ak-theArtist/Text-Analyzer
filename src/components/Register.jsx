import React from 'react'

function Register() {
  return (
    <div className='register-page'>
      <input type="radio" id="loginForm" name="formToggle" checked />

      <input type="radio" id="registerForm" name="formToggle" />

      <input type="radio" id="forgotForm" name="formToggle" />



      <div class="wrapper" id="loginFormContent">

        <form action="">

          <h1>Register</h1>

          <div class="input-box">

            <input type="text" placeholder="Username" required />

          </div>
          <div class="input-box">

            <input type="text" placeholder="Email" required />

          </div>

          <div class="input-box">

            <input type="password" placeholder="Password" required />

          </div>

          <div class="checkbox1">

            <label><input type="checkbox" />I agree to Terms & Conditions</label>

          </div>

          <button type="submit" class="btn">Register</button>

          

        </form>

      </div>

      <div class="wrapper" id="registerFormContent">

        <form action="">

          <h1>Register</h1>

          <div class="input-box">

            <input type="text" placeholder="Username" required />



          </div>

          <div class="input-box">

            <input type="email" placeholder="Email" required />



          </div>

          <div class="input-box">

            <input type="password" placeholder="Password" required />



          </div>

          <div class="checkbox1">

            <label><input type="checkbox" required />I agree to terms & conditions</label>

          </div>

          <button type="submit" class="btn">Register</button>

          <div class="link">

            <p>Already have an account? <label for="loginForm">Login</label></p>

          </div>

        </form>

      </div>

      <div class="wrapper" id="forgotFormContent">

        <form action="">

          <h1>Reset your password</h1>

          <div class="input-box">

            <input type="email" placeholder="Email" required />

          </div>

          <button type="submit" class="btn">Send Request</button>

          <div class="link">

            <p>Don't have an account? <label for="registerForm">Register</label></p>

          </div>

        </form>

      </div>
    </div>
  )
}

export default Register
