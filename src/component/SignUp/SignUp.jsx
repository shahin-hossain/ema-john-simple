import React from 'react';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
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
        </div>
    );
};

export default SignUp;