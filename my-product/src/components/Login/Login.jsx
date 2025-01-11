import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const [success, setSuccess] = useState(' ');
    const [loginError, setLoginError] = useState(' ');
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setSuccess('');
        setLoginError('');
        if(password.length < 6){
            setLoginError("please give more than 6 character!!!")
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
           .then((res) => {
               console.log(res.user);
               setSuccess("Logged in successfully!!");
           })
           .catch((error) => {
                console.error(error);
                setLoginError(error.message);
           });
    }
    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen lg:mt-0 mt-12">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                        <p className="py-6">
                        A login page allows users to access their account after they've created it, while a register page, 
                        also known as a sign up or create account page, allows new users to create an account.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-base">Login</button>
                            </div>
                        </form>
                        {loginError && <p className='text-red-600 text-xl text-center mb-5'>{loginError}</p>}
                        {success && <p className='text-green-600 text-xl text-center mb-5'>{success}</p>}
                        <p className='text-lg font-semibold px-3 mb-3'>New to this website ? Please <Link className="text-green-600" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;