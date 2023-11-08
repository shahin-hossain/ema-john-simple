import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider';
const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    // redirect page location অর্থাৎ যে পেজ থেকে login page এ পাঠানো হয়েছে, login এর পরে সে পেজে ফিরে যাওয়ার জন্য। useLocation hook ব্যবহার করা হয়েছে।
    // নিচের optional chaining use করা হয়েছে কারণ সব সময় location এর state থাকবে না 
    // যদি state না থাকে chaining করে home route এ নিয়ে যাবে।
    const from = location.state?.from?.pathname || '/';
    console.log(location)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                // navigate('/') // login এর পরে user কে home পাঠানোর জন্য navigate ব্যবহার করা হয়েছে।
                navigate(from, { replace: true }) //from এর condition অনুযায়ী navigate হবে। history না রাখার জন্য replace কে true করে পাঠানো হয়েছে।
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                {/* form এর মধ্যে যে জিনিসগুলো থাকে তাকে বলা হয় form Control */}
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='Enter your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={show ? 'text' : 'password'} name='password' placeholder='Enter your password' required />
                </div>
                <p onClick={() => setShow(!show)}><small>
                    {
                        show ? <span>Hide password</span> : <span>Show password</span>
                    }
                </small></p>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='toggle-login-signup'><small>New to Ema-John ? <Link to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login; 