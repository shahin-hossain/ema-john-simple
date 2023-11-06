import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {

    const [error, setError] = useState('')
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm)
        if (password !== confirm) {
            setError('Your Password did not match')
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return
        }

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                {/* form এর মধ্যে যে জিনিসগুলো থাকে তাকে বলা হয় form Control */}
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='' placeholder='Enter your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' id='' placeholder='Enter your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='confirm' id='' placeholder='Enter your password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='toggle-login-signup'><small>Already have an account?  <Link to='/login'>login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;